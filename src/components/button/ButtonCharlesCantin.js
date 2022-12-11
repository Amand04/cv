import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import charles from "../../images/accueil_charles2.jpg";

const ButtonCharlesCantin = () => {
  return (
    <Link to={"/CharlesCantin"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={charles} />
        <Card.Body>
          <Card.Title>Projet Charles Cantin</Card.Title>
          <Card.Text></Card.Text>
          Javascript, NJK, CMS Forestry
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonCharlesCantin;