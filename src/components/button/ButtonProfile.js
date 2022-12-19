import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import office from "../../images/office.jpg";

const ButtonProfile = () => {
  return (
    <div className="button_div">
      <Link to={"/profil"} className="Link">
        <Card className="button">
          <Card.Img variant="top" src={office} />
          <Card.Body>
            <Card.Title>Ce que je peux vous apporter</Card.Title>
            <Card.Text>
              Ma bonne humeur, mon professionnalisme, ma rigueur
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
export default ButtonProfile;