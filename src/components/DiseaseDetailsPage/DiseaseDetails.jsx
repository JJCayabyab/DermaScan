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

  const { name } = useParams();
  const disease = skinConditionData.find((d) => d.name.toLowerCase() === name.toLowerCase());
  return (
    <>
      <Navbar />
      <div className={styles.detailsContainer}>
        <h1 className={styles.diseaseName}>{disease.name}</h1>
        <a href={disease.link} target='_blank'><small>Source:{disease.source}</small></a>

        <div className={styles.imageContainer}>
          <img src={disease.img1} />
          <img src={disease.img2} />
        </div>
        
        <p>{formatText(disease.definition)}</p>
        <br/>
        <h2> What leads to {disease.name} formation </h2>
        <p>{formatText(disease.causes)}</p>
        <br/>
        <h2>Clinical features of {disease.name}</h2>
        <p>{formatText(disease.symptops)}</p>

        <h2>Treatment</h2>
        <p>{formatText(disease.treatment)}</p>
        <h2></h2>


      </div>
    </>
  )
}

export default DiseaseDetails
