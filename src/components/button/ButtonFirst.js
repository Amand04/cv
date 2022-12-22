import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from "../../images/ecran_first2.jpg";

const ButtonFirst = () => {
  return (
    <Link to={"/First"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>Projet Dice</Card.Title>
          <Card.Text></Card.Text>
          Javascript vanillia
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonFirst;