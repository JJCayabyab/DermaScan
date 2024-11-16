// File 1: Analyze.jsx
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Analyze.module.scss";
import uploadVector from "../../assets/images/analyze/upload.png";
import axios from "axios";

const Analyze = () => {
  const [imageSrc, setImageSrc] = useState(null); // to check if user has uploaded a file
  const [errorMessage, setErrorMessage] = useState(""); // to store error message
  const [isModalOpen, setIsModalOpen] = useState(false); // to manage modal visibility
  const [alexnetResult, setAlexnetResult] = useState(null); // Store AlexNet prediction image
  const [xgboostResult, setXgboostResult] = useState(null); // Store XGBoost prediction image
  const [alexnetTextResult, setAlexnetTextResult] = useState(null); // Store AlexNet text result
  const [xgboostTextResult, setXgboostTextResult] = useState(null); // Store XGBoost text result
  const [alexnetConfidence, setAlexnetConfidence] = useState(null); // Store AlexNet confidence
  const [xgboostConfidence, setXgboostConfidence] = useState(null); // Store XGBoost confidence
  const [alexnetFeatures, setAlexnetFeatures] = useState(null); // Store AlexNet features
  const [xgboostFeatures, setXgboostFeatures] = useState(null); // Store XGBoost features

  const [uploadedFile, setUploadedFile] = useState(null); // State to store the uploaded file

  const [loading, setLoading] = useState(false); // Manage loading state

  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png"];

    if (file) {
      if (allowedTypes.includes(file.type)) {
        setImageSrc(URL.createObjectURL(file));
        setUploadedFile(file); // Store the uploaded file in state
        setErrorMessage("");
      } else {
        setImageSrc(null);
        setUploadedFile(null); // Clear the file in state
        setErrorMessage(
          "Unsupported file type! Please upload a JPG, JPEG, or PNG image."
        );
      }
    }
  };

  // Handle clear if the user uploads an image
  const handleClear = () => {
    setImageSrc(null);
    setErrorMessage(""); // Clear the error when clearing the image
  };

  const openResults = async () => {
    if (!uploadedFile) {
      console.log("No file selected.");
      setErrorMessage("No file uploaded.");
      return; // Exit early if no file
    }

    setLoading(true); // Set loading before starting request

    const formData = new FormData();
    formData.append("file", uploadedFile);

    const apiUrl = window.location.hostname === 'localhost'
      ? "http://localhost:8000/predict"
      : "http://192.168.1.15:8000/predict";

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API response:", response.data);

      const {
        alexnet_image,
        xgboost_image,
        alexnet_prediction,
        xgboost_prediction,
        alexnet_confidence,
        xgboost_confidence,
        alexnet_features,
        xgboost_features,
      } = response.data;

      setAlexnetResult(alexnet_image);
      setXgboostResult(xgboost_image);
      setAlexnetTextResult(alexnet_prediction);
      setXgboostTextResult(xgboost_prediction);
      setAlexnetConfidence(alexnet_confidence);
      setXgboostConfidence(xgboost_confidence);
      setAlexnetFeatures(alexnet_features);
      setXgboostFeatures(xgboost_features);

      setIsModalOpen(true); // Open modal to display the images
    } catch (error) {
      console.error("Error analyzing the image:", error);
      setErrorMessage("Error analyzing the image. Please try again."); // Display error message to the user
    } finally {
      setLoading(false); // End loading state regardless of success or failure
    }
  };

  const closeResults = () => {
    setIsModalOpen(false);
    setAlexnetResult(null);
    setXgboostResult(null);
    setAlexnetTextResult(null);
    setXgboostTextResult(null);
    setAlexnetConfidence(null);
    setXgboostConfidence(null);
    setAlexnetFeatures(null);
    setXgboostFeatures(null);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.textContainer}>
        <h1>Facial Skin Disease Detection</h1>
        <p>
          Upload a facial image and get instant, AI-powered detection of common
          skin conditions. Identify and analyze potential skin diseases.
        </p>
      </div>

      <div className={styles.uploadCotainer}>
        {imageSrc ? (
          <img src={imageSrc} alt="Preview" className={styles.previewImage} />
        ) : (
          <>
            <img
              src={uploadVector}
              className={styles.uploadVector}
              alt="Upload"
            />
            <p className={styles.allowedMessage}>
              Only JPG, JPEG, and PNG image formats are accepted for upload.
              Other formats will not be allowed.
              <br /> To take a photo, use mobile or tablet.
            </p>
          </>
        )}

        {/* Display error message if there is one */}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div className={styles.optionsContainer}>
          {/* condition to return if the user has uploaded an image or not */}
          {(() => {
            if (imageSrc) {
              return (
                <>
                  <button
                    className={styles.analyzeButton}
                    onClick={openResults}
                  >
                    Analyze
                  </button>
                  <button className={styles.clearButton} onClick={handleClear}>
                    Clear
                  </button>
                </>
              );
            } else {
              return (
                <>
                  <label htmlFor="upload-input" className={styles.customButton}>
                    Upload
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    id="upload-input"
                    onChange={handleUploadChange}
                    className={styles.hiddenInput}
                  />

                  <label htmlFor="camera-input" className={styles.customButton}>
                    Take Picture
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    capture="user"
                    onChange={handleUploadChange}
                    id="camera-input"
                    className={styles.hiddenInput}
                  />
                </>
              );
            }
          })()}
        </div>
        {/*for loading animation, before displaying the result */}
        {loading && (
          <div
            className={styles.loadingContainer}
            //onClick={() => setLoading(false)}
          >
            <div className={styles.loading}></div>
          </div>
        )}

        {/*for modal of results*/}
        {isModalOpen && (
          <div className={styles.resultsWrapper}>
            <div className={styles.results}>
              <button onClick={closeResults}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="35px"
                  viewBox="0 -960 960 960"
                  width="35px"
                  fill="#00000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className={styles.resultImages}>
                {alexnetResult && (
                  <div className={styles.alexContainer}>
                    <p>AlexNet Prediction</p>
                    <h2>{alexnetTextResult}</h2>
                    <p>Confidence: {(alexnetConfidence * 100).toFixed(2)}%</p>
                    <p>Features: {alexnetFeatures}</p>
                    <img
                      src={`data:image/png;base64,${alexnetResult}`}
                      alt="AlexNet Prediction"
                    />
                  </div>
                )}
                {xgboostResult && (
                  <div className={styles.xgContainer}>
                    <p>AlexNet-XGBoost Prediction</p>
                    <h2>{xgboostTextResult}</h2>
                    <p>Confidence: {(xgboostConfidence * 100).toFixed(2)}%</p>
                    <p>Features: {xgboostFeatures}</p>
                    <img
                      src={`data:image/png;base64,${xgboostResult}`}
                      alt="XGBoost Prediction"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;
