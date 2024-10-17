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
INPUT_SIZE = (227, 227)  # Image input size expected by AlexNet
CATEGORIES = ['Acne', 'Eczema', 'Rosacea', 'Psoriasis', 'Seborrheic Dermatitis', 'Perioral Dermatitis', 'Tinea Faciei']

# Define a custom AlexNet that stops at fc6
class AlexNetFC6(nn.Module):
    def __init__(self):
        super(AlexNetFC6, self).__init__()
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

# Load the pre-trained weights for hybrid AlexNet-XGBoost
alexnet_fc6.load_state_dict(torch.load('backend/alexnet.pth', map_location=torch.device('cpu')), strict=False)

# Set the model to evaluation mode
alexnet_fc6.eval()

# Load the pretrained XGBoost model
xgboost_model = xgb.XGBClassifier()
xgboost_model.load_model('backend/xgboost.json')

# Load the pre-fitted StandardScaler
scaler = joblib.load('backend/scaler.joblib')

# Load the standard AlexNet model
alexnet_model = models.alexnet(pretrained=False)
alexnet_model.classifier = nn.Sequential(
    nn.Dropout(0.6),  
    nn.Linear(9216, 4096),  
    nn.ReLU(inplace=True),
    
    nn.Dropout(0.6),  
    nn.Linear(4096, 4096),  
    nn.ReLU(inplace=True),
    
    nn.Linear(4096, len(CATEGORIES))  # Final output layer
)

# Load the pre-trained weights for standard AlexNet
alexnet_model.load_state_dict(torch.load('backend/alexnet.pth', map_location=torch.device('cpu')))

# Set the standard AlexNet model to evaluation mode
alexnet_model.eval()

# Preprocessing function for the input image
def preprocess_image(image: Image.Image):
    transform = transforms.Compose([
        transforms.Resize(INPUT_SIZE),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])
    ])
    return transform(image).unsqueeze(0)  # Add batch dimension

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

    # Step 3: Scale the features using the pre-fitted scaler
    features_scaled = scaler.transform(features.cpu().numpy())

    # Step 4: Predict using the XGBoost model
    prediction = xgboost_model.predict(features_scaled)
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