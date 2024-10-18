import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import anomalyDetection from "../../Assets/Projects/anomalyDetection.png";
import smartHospital from "../../Assets/Projects/smartHospital.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import dataScience from "../../Assets/Projects/dataScience.png";
import securityResearch from "../../Assets/Projects/securityResearch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anomalyDetection}
              isBlog={false}
              title="AI-Driven Anomaly Detection"
              description="Developed an AI-based system to detect anomalies in IoT networks for healthcare environments. The model improves network security by identifying abnormal network traffic patterns."
              ghLink="https://github.com/BlenWBegashaw/anomaly-detection"
              demoLink="https://anomaly-detection-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartHospital}
              isBlog={false}
              title="Smart Hospital IoT Network"
              description="Built a secure IoT framework for smart hospitals, focusing on enhancing data privacy and secure communication protocols. Integrated real-time AI anomaly detection to ensure patient safety and data integrity."
              ghLink="https://github.com/BlenWBegashaw/smart-hospital-iot"
              demoLink="https://smart-hospital-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Salesforce AI Chatbot"
              description="Developed a Salesforce-integrated AI chatbot that matches historical cases with new ones for quicker resolution. Improved customer service response time using AI-powered solutions."
              ghLink="https://github.com/BlenWBegashaw/salesforce-chatbot"
              demoLink="https://salesforce-chatbot-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="Created a personal portfolio using React.js to showcase projects, skills, and achievements. Features include animated components, interactive UI, and a seamless user experience."
              ghLink="https://github.com/BlenWBegashaw/portfolio"
              demoLink="https://blen-portfolio.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataScience}
              isBlog={false}
              title="Data Science Analytics"
              description="Conducted data analysis on cybersecurity incidents using Python and Pandas. Extracted insights and visualized trends to improve threat detection capabilities."
              ghLink="https://github.com/BlenWBegashaw/data-science-analytics"
              demoLink="https://data-science-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={securityResearch}
              isBlog={false}
              title="Cybersecurity Research"
              description="Research project on data breaches and vulnerability management, focusing on incident response and the mitigation of cyber threats using AI techniques."
              ghLink="https://github.com/BlenWBegashaw/cybersecurity-research"
              demoLink="https://cybersecurity-research-demo.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
