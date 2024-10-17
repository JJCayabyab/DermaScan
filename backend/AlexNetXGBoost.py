import torch
import torchvision.transforms as transforms
import torch.nn as nn
import torchvision.models as models
import numpy as np
import cv2
from PIL import Image
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
import base64
from io import BytesIO
import joblib

app = FastAPI()

# Define constants
INPUT_SIZE = (227, 227)  # Image input size expected by AlexNet
cates = ['Acne', 'Eczema', 'Rosacea', 'Psoriasis', 'Seborrheic Dermatitis', 'Perioral Dermatitis', 'Tinea Faciei']  # Prediction categories
checkpoint_path = r'C:\path\to\alexnet_weights.pth'  # Path to your pretrained AlexNet weights
xgboost_model_path = r'C:\path\to\xgboost_model.json'  # Path to your XGBoost model
scaler_path = 'scaler.joblib'  # Path to the saved scaler

# Define a custom AlexNet that stops at fc6
class AlexNetFC6(nn.Module):
    def __init__(self):
        super(AlexNetFC6, self).__init__()
        alexnet = models.alexnet(pretrained=False)
        self.features = alexnet.features  # Retain convolutional layers
        self.pooling = nn.AdaptiveAvgPool2d((6, 6)
        self.fc6 = nn.Sequential(
            nn.Dropout(0.5),
            nn.Linear(9216, 4096),
            nn.ReLU(inplace=True)
        )
    
    def forward(self, x):
        x = self.features(x)  # Pass input through convolutional layers
        x = torch.flatten(x, 1)  # Flatten before fully connected layers
        x = self.fc6(x)  # Pass through fc6
        return x

# Instantiate the modified AlexNet model
alexnet_fc6 = AlexNetFC6()

# Load the pre-trained weights
alexnet_fc6.load_state_dict(torch.load(checkpoint_path), strict=False)

# Set the model to evaluation mode
alexnet_fc6.eval()

# Load the pretrained XGBoost model
xgb_model = xgb.XGBClassifier()
xgb_model.load_model(xgboost_model_path)

# Load the pre-fitted StandardScaler
scaler = joblib.load(scaler_path)

# Preprocessing function for the input image
def preprocess_image(image):
    transform = transforms.Compose([
        transforms.Resize(INPUT_SIZE),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])  # Normalizing to match AlexNet
    ])
    return transform(image).unsqueeze(0)

# Function to extract features using the modified AlexNet (up to fc6)
def extract_features(image_tensor, model):
    with torch.no_grad():
        features = model(image_tensor)  # Pass the image through the modified AlexNet
    return features.cpu().numpy()

# Function to predict using XGBoost
def predict_with_xgboost(image):
    # Step 1: Preprocess the image
    image_tensor = preprocess_image(image)

    # Step 2: Extract features using the modified AlexNet (up to fc6)
    features = extract_features(image_tensor, alexnet_fc6)

    # Step 3: Scale the features using the pre-fitted scaler
    scaled_features = scaler.transform(features)

    # Step 4: Predict using the XGBoost model
    prediction = xgb_model.predict(scaled_features)
    
    # Return the predicted category
    return cates[prediction[0]]

# Function to convert image to base64 for sending via JSON
def np_to_base64(image_np):
    _, buffer = cv2.imencode('.jpg', image_np)
    return base64.b64encode(buffer).decode('utf-8')

# Function to draw predictions on the image
def add_prediction_text(image, text, position):
    font = cv2.FONT_HERSHEY_SIMPLEX
    font_scale = 0.7
    color = (255, 0, 0)  # Blue color in BGR
    thickness = 2
    text_size = cv2.getTextSize(text, font, font_scale, thickness)[0]
    text_x = (image.shape[1] - text_size[0]) // 2  # Center the text horizontally
    
    if position == "top":
        text_y = 30  # Position at the top
    else:
        text_y = image.shape[0] - 10  # Position at the bottom
    
    cv2.putText(image, text, (text_x, text_y), font, font_scale, color, thickness)

# Validate file extension to ensure it's either .png, .jpeg, or .jpg
def validate_image_extension(file: UploadFile):
    valid_extensions = ['.png', '.jpg', '.jpeg']
    file_extension = file.filename.split('.')[-1].lower()
    if f'.{file_extension}' not in valid_extensions:
        raise HTTPException(status_code=400, detail="Invalid file extension. Only .png, .jpg, and .jpeg are allowed.")

# FastAPI endpoint to handle image upload and prediction
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Step 1: Validate file extension
    validate_image_extension(file)

    # Step 2: Read the uploaded image file
    contents = await file.read()
    
    # Step 3: Convert the file content to a NumPy array and decode it as an image
    img_np = np.frombuffer(contents, np.uint8)
    image = cv2.imdecode(img_np, cv2.IMREAD_COLOR)  # OpenCV image (BGR format)
    
    # Step 4: Convert the OpenCV image to PIL format (RGB format)
    pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

    # Step 5: Make predictions using AlexNet and XGBoost
    xgboost_prediction = predict_with_xgboost(pil_image)

    # Step 6: Draw the prediction on the image
    add_prediction_text(image, f"XGBoost Prediction: {xgboost_prediction}", "bottom")

    # Step 7: Convert the image to base64 format for JSON response
    image_base64 = np_to_base64(image)

    # Step 8: Return the prediction and the image as a JSON response
    return JSONResponse({
        "prediction": xgboost_prediction,
        "image": image_base64
    })
