import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Blen Begashaw </span>
            from <span className="purple">Addis Ababa, Ethiopia.</span>
            <br />
            I am currently a senior computer science student passionate about software development, AI, and cybersecurity.
            <br />
            I have experience as a software engineer at Audacy and an intern at the Catholic Diocese of Arlington, focusing on network security and AI solutions.
            <br />
            <br />
            Apart from coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Volunteering
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading History and Technology Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Korean Dramas
            </li>
            <li className="about-activity">
              <ImPointRight /> Knitting
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on Nature Walks
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in using technology to create meaningful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Blen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
