import React from 'react'; // Not required for React 17+ but sometimes necessary in older setups
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/landingPage"
import ResumeBuilder from "./pages/Rb"

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/rb" element={<ResumeBuilder />} />
    </Routes>
  </Router>
  )
}

export default App
