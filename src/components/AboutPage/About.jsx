import Navbar from '../Navbar/Navbar'
import styles from './About.module.scss'
import { aboutData } from '../../data/AboutData'
const About = () => {


    //destruct mission and change its variable for readibility
    const { info: missionInfo, img: missionImage } = aboutData.mission[0];


    //display "Our Technology"
    const displayTech = aboutData.technology.map((tech, index) => {
        return (
            <div key={index} className={styles.techContainer}>
                <img src={tech.img} />
                <p>{tech.info}</p>
            </div>
        )
    })

    //display "How it Works"
    const displayHow = aboutData.process.map((process, index) => {
        return (
            <div key={index} className={styles.processContainer}>
                <h2>{process.number}</h2>
                <img src={process.img} />
                <p>{process.info}</p>
            </div>
        )
    })
    return (
        <>
            <Navbar />
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={styles.infoWrapper}>
                <div className={styles.missionContainer}>
                    <div className={styles.leftSide}>
                        <h2>Our Mission</h2>
                        <p>{missionInfo}</p>
                    </div>
                    <div className={styles.rightSide}>
                        <img src={missionImage} />
                    </div>
                </div>

                <div className={styles.techWrapper}>
                    <h2>Our Technology</h2>
                    {displayTech}
                </div>


                <div className={styles.processWrapper}>
                    <h2>How it Works</h2>
                    {displayHow}
                </div>
            </div>

        </>
    )
}

export default About
