import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import first from "../../images/CV.jpg";

const ButtonCv = () => {
  return (
      <Card className="button">
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>Ce CV</Card.Title>
          <Card.Text></Card.Text>
          React, Javascript, JSX
        </Card.Body>
      </Card>
  );
};
export default ButtonCv;