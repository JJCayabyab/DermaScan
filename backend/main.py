from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model, Model
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
import cv2
import base64
from io import BytesIO
from PIL import Image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load models
alexnet_model = load_model('backend/alexnet.keras')
xgboost_model = xgb.XGBClassifier()
xgboost_model.load_model('backend/xgboost.json')

# Feature extractor from AlexNet
feature_extractor = Model(inputs=alexnet_model.input, outputs=alexnet_model.get_layer('fc6').output)

CATEGORIES = ['Acne', 'Eczema', 'Rosacea', 'Psoriasis', 'Seborrheic Dermatitis', 'Perioral Dermatitis', 'Tinea Faciei']

def preprocess_image(image: Image.Image):
    image = image.resize((227, 227))
    image = np.array(image).astype(np.float32) / 255.0
    image = (image - np.mean(image)) / (np.std(image) + 1e-7)
    image = np.expand_dims(image, axis=0)
    return image

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
    predictions = alexnet_model.predict(preprocessed_image)
    predicted_class = CATEGORIES[np.argmax(predictions, axis=1)[0]]
    return predicted_class

def predict_with_xgboost(image: Image.Image):
    preprocessed_image = preprocess_image(image)
    features = feature_extractor.predict(preprocessed_image)
    scaler = StandardScaler()
    features_scaled = scaler.fit_transform(features)
    prediction = xgboost_model.predict(features_scaled)
    return CATEGORIES[int(prediction[0])]

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    img_np = np.frombuffer(contents, np.uint8)
    image = cv2.imdecode(img_np, cv2.IMREAD_COLOR)
    pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

    alexnet_image = image.copy()  # Create a copy for AlexNet prediction
    xgboost_image = image.copy()  # Create a copy for XGBoost prediction

    # Get predictions
    alexnet_prediction = predict_with_alexnet(pil_image)
    xgboost_prediction = predict_with_xgboost(pil_image)

    # Draw predictions
    add_prediction_text(alexnet_image, f"AlexNet: {alexnet_prediction}", "top")
    add_prediction_text(xgboost_image, f"AlexNet-XGBoost: {xgboost_prediction}", "bottom")

    # Convert images to base64
    alexnet_image_base64 = np_to_base64(alexnet_image)
    xgboost_image_base64 = np_to_base64(xgboost_image)

    return JSONResponse({
        "alexnet_image": alexnet_image_base64,
        "xgboost_image": xgboost_image_base64,
    })