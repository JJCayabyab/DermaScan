import Navbar from '../Navbar/Navbar'
import styles from './Analyze.module.scss'
import uploadVector from '../../assets/images/analyze/upload.png'
import { useState } from 'react';

const Analyze = () => {
  const [imageSrc, setImageSrc] = useState(null);



  const handleUploadChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.textContainer} >
        <h1>Facial Skin Disease Detection</h1>
        <p>Upload a facial image and get instant, AI-powered detection of common skin conditions. Identify and analyze potential skin diseases quickly and accurately.</p>
      </div>
      <div className={styles.uploadCotainer}>
        {imageSrc ? (
          <img src={imageSrc} alt="Preview" className={styles.previewImage} />
        ) : (
          <img src={uploadVector} className={styles.uploadVector} alt="Upload" />
        )}



        <div className={styles.optionsContainer}>
          {/* Upload Image */}
          <label htmlFor="upload-input" className={styles.customButton}>
            Upload
          </label>
          <input
            type="file"
            accept="image/*"
            id="upload-input"
            onChange={handleUploadChange}
            className={styles.hiddenInput}
          />

          {/* Take Picture */}
          <label htmlFor="camera-input" className={styles.customButton}>
            Take Picture
          </label>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={handleUploadChange}
            id="camera-input"
            className={styles.hiddenInput}
          />
        </div>


      </div>


    </div>
  )
}

export default Analyze
