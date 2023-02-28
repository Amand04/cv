import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import fitness from "../../images/login_fitness.jpg";

const ButtonFitness = () => {
  return (
    <Link to={"/Fitness"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={fitness} className="img_card" />
        <Card.Body>
          <Card.Title className="card_profil_text">
            Application web et mobile d'une franchise
          </Card.Title>
          <Card.Text></Card.Text>
          Application permettant de gérer les droits des partenaires franchisés,
          salles de sport
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonFitness;
