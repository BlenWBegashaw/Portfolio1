import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import chatifyImg from "../../Assets/Projects/chatify.png";

function ChatifyPage() {
  return (
    <Container className="project-details-page">
      <Row>
        <Col md={6}>
          <img src={chatifyImg} alt="Chatify" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Chatify</h2>
          <p>Chatify is a real-time chat application built with React, Firebase, and Material-UI.</p>
          <h4>What I Learned</h4>
          <ul>
            <li>Real-time messaging with Firebase Firestore.</li>
            <li>Responsive UI design using Material-UI.</li>
          </ul>
          <h4>Code Snippet</h4>
          <pre>
            <code>{`
              const sendMessage = (e) => {
                e.preventDefault();
                db.collection('messages').add({
                  message: input,
                  username: username,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
                setInput('');
              };
            `}</code>
          </pre>
          <a href="https://github.com/BlenWBegashaw/chatify" target="_blank" rel="noreferrer">
            <Button variant="dark">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatifyPage;

