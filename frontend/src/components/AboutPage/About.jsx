/**
 * Program Title: About.jsx
 * Programmers: Kirsten Kyla Talyo
 * 
 * Where the Program Fits in the General System Design:
 * This file defines the About component, which provides an overview of the project's mission, 
 * the technologies used, and the process flow of how the system operates. It is part of the 
 * informational section of the website, aimed at educating users about the purpose and 
 * functionality of the application.
 * 
 * Date Written: October 1, 2024
 * Date Revised: October 10, 2024
 * 
 * Purpose:
 * - To display the mission statement of the application.
 * - To showcase the technology used in the system.
 * - To outline the step-by-step process of how the system works.
 * */
import Navbar from '../Navbar/Navbar'
import styles from './About.module.scss'
import { aboutData } from '../../data/AboutData'

const About = () => {

    //destruct mission and change its variable for readibility
    const { info: missionInfo, img: missionImage } = aboutData.mission[0];

    //Map aboutData to display information in "Our Technology"
    const displayTech = aboutData.technology.map((tech, index) => {
        return (
            <div key={index} className={styles.techContainer}>
                <div className={styles.imgContainer}>
                    <img src={tech.img} />
                </div>

                <div className={styles.textContainer}>
                    <h3>{tech.name}</h3>
                    <p>{tech.info}</p>
                </div>
            </div>
        )
    })

    //Map aboutData to display information in  "How it Works"
    const displayHow = aboutData.process.map((process, index) => {
        return (
            <div key={index} className={styles.processContainer}>
                <div className={styles.numContainer}>
                    <h2>{process.number}</h2>
                </div>
                <div className={styles.imgContainer}>
                    <img src={process.img} />
                </div>
                <div className={styles.infoContainer}>
                    <p>{process.info}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <Navbar />

            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>

            <div className={styles.infoWrapper}>

                {/*Display mission of the website */}
                <div className={styles.missionContainer}>
                    <div className={styles.leftSide}>
                        <h2>Our Mission</h2>
                        <p>{missionInfo}</p>
                    </div>
                    <div className={styles.rightSide}>
                        <img src={missionImage} />
                    </div>
                </div>

                {/*Display technology used in the system */}
                <div className={styles.techWrapper}>
                    <h2>Our Technology</h2>
                    {displayTech}
                </div>

                {/*Display process */}
                <div className={styles.processWrapper}>
                    <h2>How it Works</h2>
                    {displayHow}
                </div>
            </div>

        </>
    )
}

export default About
