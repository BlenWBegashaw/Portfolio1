import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import chatbotImg from "../../Assets/Projects/chatbot.png";
import { BsGithub } from "react-icons/bs";

function SalesforceChatbotPage() {
  return (
    <Container className="project-details-page">
      <Row>
        <Col md={6}>
          <img src={chatbotImg} alt="Salesforce Chatbot" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Salesforce AI Chatbot</h2>
          <p>
            This project involves creating a Salesforce-integrated AI chatbot that matches historical cases with new ones for quicker resolution. It improves customer service response time using AI-powered solutions.
          </p>
          <h4>What I Learned</h4>
          <ul>
            <li>Integrating AI models with Salesforce for customer service.</li>
            <li>Improving case management and response time using AI algorithms.</li>
          </ul>
          <h4>Code Snippet</h4>
          <pre>
            <code>{`
              const matchCases = (newCase) => {
                const similarCases = fetchSimilarCases(newCase);
                return similarCases;
              };
            `}</code>
          </pre>
          <a href="https://github.com/BlenWBegashaw/salesforce-chatbot" target="_blank" rel="noreferrer">
            <Button variant="dark">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SalesforceChatbotPage;

