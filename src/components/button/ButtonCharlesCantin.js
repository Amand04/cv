import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import charles from "../../images/accueil_charles2.jpg";

const ButtonCharlesCantin = () => {
  return (
    <Link to={"/CharlesCantin"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={charles} className="img_card" />
        <Card.Body>
          <Card.Title className="card_profil_text">
            Site internet Web et mobile d'un photographe professionnel, Charles
            Cantin
          </Card.Title>
          <Card.Text></Card.Text>
          Présentation de ses prestations
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonCharlesCantin;
