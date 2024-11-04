from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import torch
import torch.nn as nn
import torchvision.transforms as transforms
import torchvision.models as models
import xgboost as xgb
import joblib
import cv2
import base64
from io import BytesIO
from PIL import Image
import logging

logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define constants
INPUT_SIZE = (256, 256)
MEAN = (0.6181, 0.4643, 0.4194)
STD = (0.1927, 0.1677, 0.1617)
CATEGORIES = ['Acne', 'Eczema', 'Normal', 'Perioral Dermatitis', 'Psoriasis', 'Rocasea', 'Seborrheic Dermatitis', 'Tinea Faciei']

# Standard AlexNet
class AlexNet(nn.Module):
    def __init__(self, num_classes=CATEGORIES):
        super(AlexNet, self).__init__()
        self.model = models.alexnet(weights=None) 
        self.model.classifier[6] = nn.Linear(4096, num_classes)  

    def forward(self, x):
        return self.model(x)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
alexnet_model = AlexNet(num_classes=CATEGORIES).to(device)
alexnet_model.load_state_dict(torch.load('backend/alexnet.pth', weights_only=True))
alexnet_model.eval() 

# Feature Extractor AlexNet
class AlexNetFC6(nn.Module):
    def __init__(self):
        super(AlexNetFC6, self).__init__()
        # Load AlexNet from torch hub
        alexnet = torch.hub.load('pytorch/vision:v0.10.0', 'alexnet', pretrained=False)
        self.features = alexnet.features  # Retain convolutional layers
        # Only include layers up to fc6 (first fully connected layer)
        self.pooling = nn.AdaptiveAvgPool2d((6, 6))
        self.fc6 = nn.Sequential(
            nn.Dropout(0.6),
            nn.Linear(9216, 4096),
            nn.ReLU(inplace=True)
        )
    
    def forward(self, x):
        x = self.features(x)  # Pass input through convolutional layers
        x = torch.flatten(x, 1)  # Flatten before fully connected layers
        x = self.fc6(x)  # Pass through fc6
        return x

# Instantiate the modified AlexNet model for hybrid AlexNet-XGBoost
alexnet_fc6 = AlexNetFC6()

state_dict = torch.load('backend/alexnet.pth', map_location=torch.device('cpu'))

# Adjust the state dictionary to match the model keys
new_state_dict = {}
for k, v in state_dict.items():
    new_key = k.replace("model.", "") if k.startswith("model.") else k
    if new_key in alexnet_fc6.state_dict().keys():
        new_state_dict[new_key] = v

# Load the state dictionary into the model
alexnet_fc6.load_state_dict(new_state_dict, strict=False)

# Set the model to evaluation mode
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
alexnet_fc6.to(device)

# Freeze model parameters
for param in alexnet_fc6.parameters():
    param.requires_grad = False

alexnet_fc6.eval()
# XGBoost Classifier
xgboost_model = xgb.XGBClassifier()
xgboost_model.load_model('backend/xgboost.json')


# CLAHE

class CLAHETransform:
    def __init__(self, clip_limit=2.0, tile_grid_size=(8, 8)):
        self.clip_limit = clip_limit
        self.tile_grid_size = tile_grid_size

    def __call__(self, img):
        # Convert PIL Image to NumPy array
        img_np = np.array(img)
        
        # Apply CLAHE on each channel independently if it's a color image
        if len(img_np.shape) == 3:
            channels = cv2.split(img_np)
            clahe = cv2.createCLAHE(clipLimit=self.clip_limit, tileGridSize=self.tile_grid_size)
            channels = [clahe.apply(channel) for channel in channels]
            img_np = cv2.merge(channels)
        else:
            # Apply CLAHE on grayscale images
            clahe = cv2.createCLAHE(clipLimit=self.clip_limit, tileGridSize=self.tile_grid_size)
            img_np = clahe.apply(img_np)

        # Convert back to PIL Image
        img_clahe = Image.fromarray(img_np)
        return img_clahe


# Preprocessing function for the input image
def preprocess_image(image: Image.Image):
    
    transform = transforms.Compose([
        CLAHETransform(clip_limit=2.0, tile_grid_size=(8, 8)),
        transforms.Resize(INPUT_SIZE),
        transforms.CenterCrop((227,227)),
        transforms.ToTensor(),
        transforms.Normalize(mean=MEAN, std=STD)
    ])
    return transform(image).unsqueeze(0) 

def np_to_base64(image_np):
    image_pil = Image.fromarray(cv2.cvtColor(image_np, cv2.COLOR_BGR2RGB))
    buffered = BytesIO()
    image_pil.save(buffered, format="PNG")
    return base64.b64encode(buffered.getvalue()).decode()

def add_prediction_text(image, text, position):
    font_scale = 0.6 if image.shape[1] > 300 else 0.4
    font = cv2.FONT_HERSHEY_SIMPLEX
    (text_width, text_height), _ = cv2.getTextSize(text, font, font_scale, 2)
    text_x = 10 if position == "top" else 10
    text_y = 30 if position == "top" else image.shape[0] - 10
    cv2.rectangle(image, (text_x, text_y - text_height - 5), (text_x + text_width, text_y + 5), (0, 0, 0), -1)
    cv2.putText(image, text, (text_x, text_y), font, font_scale, (255, 255, 255), 2, cv2.LINE_AA)

def predict_with_alexnet(image: Image.Image):
    preprocessed_image = preprocess_image(image)
    with torch.no_grad():
        predictions = alexnet_model(preprocessed_image)
    predicted_class = CATEGORIES[torch.argmax(predictions, dim=1).item()]
    return predicted_class

def predict_with_xgboost(image: Image.Image):
    # Step 1: Preprocess the image
    image_tensor = preprocess_image(image)

    # Step 2: Extract features using the modified AlexNet (up to fc6)
    with torch.no_grad():
        features = alexnet_fc6(image_tensor)

    # Step 3: Predict using the XGBoost model
    prediction = xgboost_model.predict(features)
    return CATEGORIES[int(prediction[0])]


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        img_np = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(img_np, cv2.IMREAD_COLOR)
        pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

        logging.info("Image successfully loaded and converted")
        
        alexnet_image = image.copy()  # Create a copy for AlexNet prediction
        xgboost_image = image.copy()  # Create a copy for XGBoost prediction

        # Get predictions
        alexnet_prediction = predict_with_alexnet(pil_image)
        logging.info(f"AlexNet Prediction: {alexnet_prediction}")
        
        xgboost_prediction = predict_with_xgboost(pil_image)
        logging.info(f"XGBoost Prediction: {xgboost_prediction}")

        # Convert images to base64
        alexnet_image_base64 = np_to_base64(alexnet_image)
        xgboost_image_base64 = np_to_base64(xgboost_image)

        return JSONResponse({
            "alexnet_image": alexnet_image_base64,
            "xgboost_image": xgboost_image_base64,
            "alexnet_prediction": alexnet_prediction,
            "xgboost_prediction": xgboost_prediction
        })
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return JSONResponse({"error": str(e)}, status_code=500)