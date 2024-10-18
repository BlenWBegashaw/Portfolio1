import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import anomalyDetectionImg from "../../Assets/Projects/anomalyDetection.png";
import { BsGithub } from "react-icons/bs";

function AnomalyDetectionPage() {
  return (
    <Container className="project-details-page">
      <Row>
        <Col md={6}>
          <img src={anomalyDetectionImg} alt="Anomaly Detection" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>AI-Driven Anomaly Detection</h2>
          <p>
            This project involves developing an AI-based system to detect anomalies in IoT networks for healthcare environments. It improves network security by identifying abnormal network traffic patterns.
          </p>
          <h4>What I Learned</h4>
          <ul>
            <li>Applying AI models for real-time anomaly detection in IoT networks.</li>
            <li>Understanding network security in healthcare environments.</li>
          </ul>
          <h4>Code Snippet</h4>
          <pre>
            <code>{`
              const detectAnomaly = (data) => {
                const model = loadModel('anomaly-detection-model');
                return model.predict(data);
              };
            `}</code>
          </pre>
          <a href="https://github.com/BlenWBegashaw/anomaly-detection" target="_blank" rel="noreferrer">
            <Button variant="dark">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default AnomalyDetectionPage;

