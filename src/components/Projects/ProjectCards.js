import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-image" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        <Button 
          variant="dark" 
          href={props.ghLink} 
          target="_blank"
          className="project-button"
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Read Blog" : "GitHub"}
        </Button>

        {/* If there's a demo link, it will render the Demo button */}
        {!props.isBlog && props.demoLink && (
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
