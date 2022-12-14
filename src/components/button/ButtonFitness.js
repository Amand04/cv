import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import fitness from "../../images/login_fitness.jpg";

const ButtonFitness = () => {
  return (
    <Link to={"/Fitness"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={fitness} className="img_card"/>
        <Card.Body>
          <Card.Title>Projet fitness</Card.Title>
          <Card.Text></Card.Text>
          Php, Symfony, JQuery
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonFitness;