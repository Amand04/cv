import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sound from "../../images/sound.jpg";

const ButtonProject = () => {
  return (
    <Link to={"/projects"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={sound} />
        <Card.Body>
          <Card.Title>Mes projets</Card.Title>
          <Card.Text></Card.Text>
          Php, Symfony, JS...
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonProject;
