import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/Home'
import Contact from './components/ContactPage/Contact'
import './index.css'
import Analyze from './components/AnalyzePage/Analyze';
import SkinConditions from './components/SkinConditionsPage/SkinConditions';
import DiseaseDetails from './components/DiseaseDetailsPage/DiseaseDetails';
function App() {
  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/analyze" element={<Analyze/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skin-conditions" element={<SkinConditions/>} />
          <Route path="/skin-conditions/:name" element={<DiseaseDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
