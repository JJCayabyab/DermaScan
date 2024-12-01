/**
 * Program Title: DiseaseDetails.jsx
 * Programmers: Jeremy Jhay B. Cayabyab
 * 
 * Where the Program Fits in the General System Design:
 * This file defines the DiseaseDetails component, which is responsible for displaying 
 * detailed information about a specific skin disease. The component retrieves 
 * the disease name from the URL parameters, fetches the corresponding data from 
 * a predefined list, and displays the disease name, images, and its causes, symptoms, and treatment.
 * It ensures users get a comprehensive understanding of the selected skin condition.
 * 
 * Date Written: October 2, 2024
 * Date Revised: October 19, 2024
 * 
 * Purpose:
 * - To display detailed information about a selected skin disease.
 * - To format and display disease-related data, including causes, symptoms, and treatment.
 * - To dynamically render images and text based on the selected disease.
 * */
import Navbar from '../Navbar/Navbar'
import styles from './DiseaseDetails.module.scss'
import { useParams } from 'react-router-dom';
import { skinConditionData } from '../../data/SkinDiseasesData';

// Format text for tab and new line 
const formatText = (text) => {
  return text.split('\n').map((line, index) => (
    <div key={index}>
      {line.split('\t').map((segment, i) => (
        <span key={i}>
          {i > 0 && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          {segment}
        </span>
      ))}
      <br />
    </div>
  ));
};

const DiseaseDetails = () => {

  const { name } = useParams();  // Extract 'name' from the URL parameters

  const disease = skinConditionData.find((d) => d.name.toLowerCase() === name.toLowerCase());// Find the disease in the skinConditionData

  return (
    <>
      <Navbar />
      <div className={styles.detailsContainer}>
        <h1 className={styles.diseaseName}>{disease.name}</h1>
        <small>Source: <a href={disease.link} target='_blank'>{disease.source}</a></small>

        {/*Displays the skin disease image */}
        <div className={styles.imageContainer}>
          {/* Check if the image exists before displaying*/}
          {disease.img1 && (
            <img src={disease.img1} alt={`${disease.altText}, image 1`} />
          )}
          {disease.img2 && (
            <img src={disease.img2} alt={`${disease.altText}}, image 2`} />
          )}
        </div>

        {/*Display the disease information such as causes, symptoms, and treatment */}
        <div className={styles.textContainer}>
          <p>{formatText(disease.definition)}</p>
          <br />

          <h2>What leads to {disease.name} formation</h2>
          <p>{formatText(disease.causes)}</p>
          <br />

          <h2>Clinical features of {disease?.name}</h2>
          <p>{formatText(disease.symptops)}</p>
          <br />

          <h2>Treatment</h2>
          <p>{formatText(disease?.treatment)}</p>
        </div>
      </div>
    </>
  )
}

export default DiseaseDetails
