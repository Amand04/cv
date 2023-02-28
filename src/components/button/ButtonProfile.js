import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import office from "../../images/face.jpg";

const ButtonProfile = () => {
  return (
    <div className="button_div">
      <Link to={"/profil"} className="Link" reloadDocument>
        <Card className="button">
          <Card.Img variant="top" src={office} />
          <Card.Body>
            <Card.Title className="card_profil_title">Mes services</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
export default ButtonProfile;
