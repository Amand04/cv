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
          <Card.Title className="card_profil_text">
            Site internet Web et mobile d'une Brasserie
          </Card.Title>
          <Card.Text className="card_profil_text_explain">
            Présentation de la collection
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default Beer;
