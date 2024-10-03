import Navbar from '../Navbar/Navbar'
import styles from './DiseaseDetails.module.scss'
import { useParams } from 'react-router-dom';
import { skinConditionData } from '../../data/SkinDiseasesData';


// format text for tab and new line
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
  // Extract 'name' from the URL parameters
  const { name } = useParams();

  // Find the disease in the skinConditionData
  const disease = skinConditionData.find((d) => d.name.toLowerCase() === name.toLowerCase());
  return (
    <>
      <Navbar />
      <div className={styles.detailsContainer}>
        <h1 className={styles.diseaseName}>{disease.name}</h1>
        <small>Source: <a href={disease.link} target='_blank'>{disease.source}</a></small>

        <div className={styles.imageContainer}>
          {/* Check if the definition exists before displaying */}
          {disease.img1 && (
            <img src={disease.img1} alt={`${disease.name} image 1`} />
          )}
          {disease.img2 && (
            <img src={disease.img2} alt={`${disease.name} image 2`} />
          )}
        </div>

        <div className={styles.textContainer}>
          {/* Check if the definition exists before displaying */}
          {disease.definition && (
            <>
              <p>{formatText(disease.definition)}</p>
              <br />
            </>
          )}

          {/* Check if causes exist before displaying */}
          {disease.causes && (
            <>
              <h2>What leads to {disease.name} formation</h2>
              <p>{formatText(disease.causes)}</p>
              <br />
            </>
          )}

          {/* Check if symptoms exist before displaying */}
          {disease.symptops && (
            <>
              <h2>Clinical features of {disease.name}</h2>
              <p>{formatText(disease.symptops)}</p>
              <br />
            </>
          )}

          {/* Check if treatment exists before displaying */}
          {disease.treatment && (
            <>
              <h2>Treatment</h2>
              <p>{formatText(disease.treatment)}</p>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default DiseaseDetails
