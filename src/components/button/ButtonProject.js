import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sound from "../../images/mobile.jpg";

const ButtonProject = () => {
  return (
    <div className="button_div">

    <Link to={"/projects"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={sound} />
        <Card.Body>
          <Card.Title>Mes réalisations</Card.Title>
          <Card.Text>Application Web en PHP, Javascript...</Card.Text>
        </Card.Body>
      </Card>
    </Link>
    </div>
  );
};
export default ButtonProject;
