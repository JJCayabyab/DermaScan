import Navbar from "../Navbar/Navbar"
import styles from './Analyze.scss'
const Analyze = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.textContainer}>
          <h1>Facial Skin Disease Detection</h1>
          <p>Upload a facial image and get instant, AI-powered detection of common skin conditions. Identify and analyze potential skin diseases quickly and accurately.</p>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Analyze
