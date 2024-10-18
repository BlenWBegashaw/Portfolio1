import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import anomalyDetection from "../../Assets/Projects/anomalyDetection.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import smartHospital from "../../Assets/Projects/smartHospital.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">My Recent <strong className="purple">Works</strong></h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatify}
            title="Chatify"
            description="A real-time chat application with image sharing and message reactions."
            projectLink="/chatify"
            ghLink="https://github.com/BlenWBegashaw/chatify"
            demoLink="https://chatify-demo.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={anomalyDetection}
            title="AI-Driven Anomaly Detection"
            description="AI-based system for detecting anomalies in IoT networks."
            projectLink="/anomaly-detection"
            ghLink="https://github.com/BlenWBegashaw/anomaly-detection"
            demoLink="https://anomaly-detection-demo.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chatbot}
            title="Salesforce AI Chatbot"
            description="AI chatbot integrated into Salesforce for case management."
            projectLink="/salesforce-chatbot"
            ghLink="https://github.com/BlenWBegashaw/salesforce-chatbot"
            demoLink="https://salesforce-chatbot-demo.com"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={smartHospital}
            title="Smart Hospital IoT Network"
            description="IoT framework for smart hospitals with AI-driven security."
            projectLink="/smart-hospital"
            ghLink="https://github.com/BlenWBegashaw/smart-hospital-iot"
            demoLink="https://smart-hospital-demo.com"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
