/**
 * Program Title: Home.jsx
 * Programmers: Jeremy Jhay B. Cayabyab
 * 
 * Where the Program Fits in the General System Design:
 * This file defines the Home component, which serves as the main landing page 
 * of the application. It includes the hero section, information about the app, 
 * and a list of detectable skin conditions. It also manages navigation to other pages 
 * like Analyze, Contact, and About.
 * 
 * Date Written: September 29,2024
 * Date Revised: November 4, 2024
 * 
 * Purpose:
 * - To display the homepage layout with sections for the hero, informational content, 
 *   and detectable conditions.
 * - To provide a call-to-action for users to analyze skin conditions.
 * - To showcase a list of skin conditions and link to their details.
 */

import Navbar from '../Navbar/Navbar'
import styles from './Home.module.scss'
import heroImage from '../../assets/images/home/heroImage.png'
import { diseaseData } from '../../data/HomeData'

const Home = () => {

  // Map diseaseData to  generate the disease cards
  const displayDisease = diseaseData.map((data, index) => {
    return (
      <div key={index} className={styles.diseaseImgContainer}>
        <img src={data.image} alt={data.altText} />
        <p>{data.name}</p>
      </div>
    )
  })

  return (
    <div>
      <Navbar />
      {/* Hero section showcasing the app's purpose and a call-to-action button */}
      <div className={styles.heroContainer}>
        <div className={styles.heroLeftContainer}>
          <div className={styles.circle1}></div>
          <h1>Detect Skin Disease from Your Face.</h1>
          <h4>Upload a photo and get insights on potential skin conditions</h4>
          <a href='/analyze'>
            <button className={styles.heroButton}>Try Now</button>
          </a>
        </div>

        <div className={styles.heroRightContainer}>
          <div className={styles.circle2}></div>
          <img className={styles.heroImage} src={heroImage} alt='Hero Icon' />
        </div>
      </div>

      {/* Informational section about DermaScan */}
      <div className={styles.infoContainer}>
        <h2> Welcome to DermaScan</h2>
        <hr className={styles.line} />
        <p>
          At DermaScan, we leverage advanced AI technology to provide fast, accurate assessments of your skin.  With DermaScan,
          taking charge of your skin’s well-being has never been easier or more reliable.
        </p>
      </div>

      {/* Section to display the detectable skin conditions */}
 
        <h2 className={styles.detectable}> Detectable Conditions</h2>
        <div className={styles.diseaseContainer}>
          {displayDisease}
        </div>
      </div>

 
  )
}

export default Home
