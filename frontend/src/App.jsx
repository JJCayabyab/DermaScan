/**
 * Program Title: App.jsx
 * Programmers: Jeremy Jhay B. Cayabyab
 * 
 * Where the Program Fits in the General System Design:
 * This file serves as the main entry point for the frontend application, 
 * configuring the routing for different pages of the web application. 
 * It connects key components like Home, Analyze, Skin Conditions, Disease Details, and About, 
 * and defines how users navigate between them.
 * 
 * Date Written: September 25, 2024
 * Date Revised: October 10, 2024
 * 
 * Purpose:
 * - To provide the routing functionality for the web application using React Router.
 * - To manage navigation between pages like Home, Analyze, Contact, Skin Conditions, and About.
 * - To ensure that the correct component is rendered based on the URL path.
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/Home'
import Contact from './components/ContactPage/Contact'
import './styles/globals.scss'
import Analyze from './components/AnalyzePage/Analyze';
import SkinConditions from './components/SkinConditionsPage/SkinConditions';
import DiseaseDetails from './components/DiseaseDetailsPage/DiseaseDetails';
import About from './components/AboutPage/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/" element={<Contact />} />
          <Route path="/skin-conditions" element={<SkinConditions />} />
          <Route path="/skin-conditions/:name" element={<DiseaseDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
