import Navbar from '../Navbar/Navbar';
import styles from './Analyze.module.scss';
import uploadVector from '../../assets/images/analyze/upload.png';
import { useState } from 'react';

const Analyze = () => {
  const [imageSrc, setImageSrc] = useState(null); // to check if user has uploaded a file
  const [errorMessage, setErrorMessage] = useState(''); // to store error message

  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];

    if (file) {
      // Check if the file type is allowed
      if (allowedTypes.includes(file.type)) {
        setImageSrc(URL.createObjectURL(file));
        setErrorMessage(''); // Clear error message if the file is valid
      } else {
        setImageSrc(null);
        setErrorMessage('Unsupported file type! Please upload a JPG, JPEG, or PNG image.');
      }
    }
  };

  // Handle clear if the user uploads an image
  const handleClear = () => {
    setImageSrc(null);
    setErrorMessage(''); // Clear the error when clearing the image
  };

  return (
    <div>
      <Navbar />
      <div className={styles.textContainer}>
        <h1>Facial Skin Disease Detection</h1>
        <p>Upload a facial image and get instant, AI-powered detection of common skin conditions. Identify and analyze potential skin diseases quickly and accurately.</p>
      </div>

      <div className={styles.uploadCotainer}>
        {imageSrc ? (
          <img src={imageSrc} alt="Preview" className={styles.previewImage} />
        ) : (
          <>
            <img src={uploadVector} className={styles.uploadVector} alt="Upload" />
            <p className={styles.allowedMessage}>Only JPG, JPEG, and PNG image formats are accepted for upload. Other formats will not be allowed.</p>
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
                  <button className={styles.analyzeButton}>Analyze</button>
                  <button className={styles.clearButton} onClick={handleClear}>Clear</button>
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
      </div>
    </div>
  );
};

export default Analyze;
