import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Link to={props.projectLink}>
          <Button variant="primary" className="project-button">
            Learn More
          </Button>
        </Link>

        <Button 
          variant="dark" 
          href={props.ghLink} 
          target="_blank"
          className="project-button"
          style={{ marginLeft: "10px" }}
        >
          <BsGithub /> &nbsp; GitHub
        </Button>

        {/* Demo button */}
        {props.demoLink && (
          <Button
            variant="outline-info"
            href={props.demoLink}
            target="_blank"
            className="project-button"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
