import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import beer from "../../images/accueil_beer2.jpg";

const Beer = () => {
  return (
    <Link to={"/Beer"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={beer} />
        <Card.Body>
          <Card.Title>Projet API</Card.Title>
          <Card.Text></Card.Text>
          Php, Symfony, JS...
        </Card.Body>
      </Card>
    </Link>
  );
};
export default Beer;