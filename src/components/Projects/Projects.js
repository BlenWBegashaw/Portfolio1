import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import anomalyDetection from "../../Assets/Projects/anomalyDetection.png";

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
            description="An AI-based system to detect anomalies in IoT networks for healthcare environments."
            projectLink="/anomaly-detection"
            ghLink="https://github.com/BlenWBegashaw/anomaly-detection"
            demoLink="https://anomaly-detection-demo.com"
          />
        </Col>
        {/* Add more project cards here */}
      </Row>
    </Container>
  );
}

export default Projects;
