import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import smartHospitalImg from "../../Assets/Projects/smartHospital.png";
import { BsGithub } from "react-icons/bs";

function SmartHospitalPage() {
  return (
    <Container className="project-details-page">
      <Row>
        <Col md={6}>
          <img src={smartHospitalImg} alt="Smart Hospital" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Smart Hospital IoT Network</h2>
          <p>
            This project focuses on building a secure IoT framework for smart hospitals, with an emphasis on data privacy and secure communication protocols. It integrates real-time AI anomaly detection to ensure patient safety and data integrity.
          </p>
          <h4>What I Learned</h4>
          <ul>
            <li>Developing IoT frameworks for smart healthcare environments.</li>
            <li>Implementing AI-driven anomaly detection for network security.</li>
          </ul>
          <h4>Code Snippet</h4>
          <pre>
            <code>{`
              const secureConnection = (device) => {
                const encryption = applyAES(device.data);
                return establishConnection(device, encryption);
              };
            `}</code>
          </pre>
          <a href="https://github.com/BlenWBegashaw/smart-hospital-iot" target="_blank" rel="noreferrer">
            <Button variant="dark">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SmartHospitalPage;

