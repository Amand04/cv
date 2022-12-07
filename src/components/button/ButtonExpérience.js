import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SeeExperience from "../text/SeeExperience";

export default function ButtonExperience() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="button_items">
      <Button className="button" onClick={handleClick}>
        Mon expérience
      </Button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Mon expérience</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <SeeExperience />}
    </div>
  );
}
