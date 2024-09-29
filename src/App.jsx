import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/Home'
import Contact from './components/ContactPage/Contact'
import './index.css'
import Analyze from './components/AnalyzePage/Analyze';
function App() {
  return (
    <>
  
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/analyze" element={<Analyze/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
