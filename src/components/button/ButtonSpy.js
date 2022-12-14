import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import spy from "../../images/login_spy2.jpg";

const ButtonSpy = () => {
  return (
    <Link to={"/Spy"} className="Link">
      <Card className="button">
        <Card.Img variant="top" src={spy} className="img_card"/>
        <Card.Body>
          <Card.Title>Spy</Card.Title>
          <Card.Text></Card.Text>
          Php, Symfony
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ButtonSpy;