import Navbar from '../Navbar/Navbar'
import styles from './Home.module.scss'
import heroImage from '../../assets/images/home/heroImage.png'
import { diseaseData } from '../../data/Home'
const Home = () => {

  const displayDisease = diseaseData.map((data, index) => {
    return (
      <div key={index} className={styles.diseaseImgContainer}>
        <img src={data.image} />
        <p>{data.name}</p>
      </div>
    )
  })

  return (
    <div>
      <Navbar />

      <div className={styles.heroContainer}>
        <div className={styles.circles}>

        </div>


        <div className={styles.heroLeftContainer}>
          <div className={styles.circle1}></div>
          <h1>Detect Skin Disease from  <br />Your Face Instantly.</h1>
          <h4>Upload a photo and get instant insights on potential skin conditions</h4>
          <button className={styles.heroButton}>Get Started</button>
        </div>

        <div className={styles.heroRightContainer}>

          <div className={styles.circle2}></div>
          <img className={styles.heroImage} src={heroImage} />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h2> Welcome to DermaScan</h2>
        <hr className={styles.line} />
        <p>
          At DermaScan, we leverage advanced AI technology to provide fast, accurate assessments of your skin&apos;s health. From identifying early signs of common conditions like acne or eczema to offering expert guidance on more complex issues, our system is designed to empower you with the knowledge you need for proactive skincare. With DermaScan, taking charge of your skin’s well-being has never been easier or more reliable.
        </p>
      </div>



      <div className={styles.diseaseContainer}>
        <h2> Detectable Conditions</h2>
        {displayDisease}
      </div>
    </div>
  )
}

export default Home
