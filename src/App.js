import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ChatifyPage from "./components/project-pages/ChatifyPage";
import AnomalyDetectionPage from "./components/project-pages/AnomalyDetectionPage";
import SalesforceChatbotPage from "./components/project-pages/SalesforceChatbotPage";
import SmartHospitalPage from "./components/project-pages/SmartHospitalPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/chatify" element={<ChatifyPage />} />
        <Route path="/anomaly-detection" element={<AnomalyDetectionPage />} />
        <Route path="/salesforce-chatbot" element={<SalesforceChatbotPage />} />
        <Route path="/smart-hospital" element={<SmartHospitalPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
