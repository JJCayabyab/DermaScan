import Navbar from '../Navbar/Navbar'
import styles from './SkinConditions.module.scss'
import { skinConditionData } from '../../data/SkinConditionsData'
const SkinConditions = () => {

  const displayDisease = skinConditionData.map((data, index) => {

    return (
      <div key={index} className={styles.diseaseContainer}>
        <img src={data.img} />
        <h4>{data.name}</h4>
      </div>
    )
  })

  return (
    <>
      <Navbar />
      <div className={styles.introContainer}>
        <h2>Introduction to Facial Skin Diseases</h2>

        <p className={styles.introText}>
          Your face is often the first thing people notice about you, making it essential to understand its unique health and beauty needs. Facial skin conditions can affect anyone and manifest in various forms, ranging from common issues like acne and rosacea to more complex concerns such as melasma and dermatitis. Early detection and understanding are vital for effective treatment and management.
          <br /> <br />
          This page is dedicated to exploring a range of facial skin conditions that can be detected by our model, providing detailed insights into their symptoms, causes, and treatment options. Our aim is to empower you with the knowledge to recognize potential issues on your face and seek timely care.
          <br /> <br />
          Whether you&apos;re concerned about a specific condition or simply looking to enhance your understanding of facial skin health, you’re in the right place. Dive into our comprehensive guides on common facial skin conditions and discover how our AI-powered tool can assist you in analyzing your skin for potential concerns. Remember, a healthy face reflects overall well-being—let's take the first step toward understanding your skin together.
        </p>
      </div>


      <h2 className={styles.skinText}>Skin Diseases</h2>
      <p className={styles.infoText}>This section focuses on various facial skin diseases, providing an overview of their symptoms, causes, and treatment options. Click on the image to view the full details of each condition. The information presented here is thoroughly researched and sourced from reputable medical platforms, including DermNet and the Cleveland Clinic, ensuring accuracy and reliability
        for those seeking a deeper understanding of these common skin conditions. </p>
      <div className={styles.diseaseWrapper}>

        {displayDisease}
      </div>
    </>
  )
}

export default SkinConditions
