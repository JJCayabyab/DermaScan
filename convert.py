from tensorflow.keras.models import load_model
import json

# Load your Keras model (.keras or .h5 file)
model = load_model(r'D:\Programming\Github\DermaScan\alexnet.keras')  # or .h5

# Convert the model architecture to JSON
model_json = model.to_json()

# Save the architecture to a JSON file
with open("model_architecture.json", "w") as json_file:
    json_file.write(model_json)

print("Model architecture saved as JSON.")
