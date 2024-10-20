import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Update this path with your avatar image
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about using technology to address global challenges, 
              particularly in the fields of{" "}
              <i>
                <b className="purple">Cybersecurity, AI, and Web Development.</b>
              </i>
              <br />
              <br />
              I am proficient in programming languages like
              <i>
                <b className="purple"> Python, Java, and JavaScript. </b>
              </i>
              <br />
              <br />
              My interests include building innovative &nbsp;
              <i>
                <b className="purple">Web Solutions</b> and working on 
                <b className="purple"> AI-driven Anomaly Detection Systems</b> 
                for IoT-based healthcare.
              </i>
              <br />
              <br />
              I also enjoy developing projects using modern frameworks like{" "}
              <b className="purple">React.js</b> and
              <i>
                <b className="purple"> Node.js</b>
              </i>
              &nbsp; to create seamless and impactful solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BlenWBegashaw" // Update with your GitHub link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/your_linkedin_profile/" // Update with your LinkedIn profile link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
             
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
