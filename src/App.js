import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import ChatifyPage from "./components/project-pages/ChatifyPage";
import AnomalyDetectionPage from "./components/project-pages/AnomalyDetectionPage";
import SalesforceChatbotPage from "./components/project-pages/SalesforceChatbotPage";
import SmartHospitalPage from "./components/project-pages/SmartHospitalPage";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Pre";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          
          {/* Add individual project routes */}
          <Route path="/chatify" element={<ChatifyPage />} />
          <Route path="/anomaly-detection" element={<AnomalyDetectionPage />} />
          <Route path="/salesforce-chatbot" element={<SalesforceChatbotPage />} />
          <Route path="/smart-hospital" element={<SmartHospitalPage />} />

          {/* Redirect unknown routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
