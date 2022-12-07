import React from "react";
import { Card } from "react-bootstrap";

export default function Header() {
  return (
    <div className="Header">
      <Card className="Header_card">
        <text>
          <text>DEVELOPPEUR Web</text>
          <text className="mb-2 text-medium">Amandine DROMARD</text>
          <text>amandinejeanjules@free.fr / 06 40 65 54 30</text>
        </text>
      </Card>
    </div>
  );
}
