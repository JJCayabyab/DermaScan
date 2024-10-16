import React, { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";

// install 
// pip install tensorflowjs
// npm install @tensorflow/tfjs

// convert keras file in terminal
// tensorflowjs_converter --input_format=keras path_to_your_model.keras path_to_output_directory


const ModelComponent = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const classLabels = [
    "Acne",
    "Infection",
    "Eczema",
    "Psoriasis",
    "Rosacea",
    "Seborrheic Dermatitis",
    "Perioral Dermatitis",
  ];

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadLayersModel("/path_to_model/model.json");
      setModel(model);
    };
    loadModel();
  }, []);

  const processImage = (imageElement) => {
    let tensor = tf.browser
      .fromPixels(imageElement)
      .resizeNearestNeighbor([227, 227]) // Adjust to your image size
      .toFloat()
      .expandDims();
    return tensor;
  };

  const predict = async (imageTensor) => {
    if (!model) return;

    const prediction = model.predict(imageTensor);
    const predictionArray = prediction.arraySync();

    const predictedIndex = predictionArray[0].indexOf(
      Math.max(...predictionArray[0])
    );
    const predictedLabel = classLabels[predictedIndex];

    setPrediction(predictedLabel); // Update state with the prediction
  };

  return (
    <div>
      <h1>Model Loaded: {model ? "Yes" : "No"}</h1>
      <div>{prediction && <h2>Predicted Label: {prediction}</h2>}</div>
      {/* Add image input and call predict() after processing the image */}
    </div>
  );
};

export default ModelComponent;
