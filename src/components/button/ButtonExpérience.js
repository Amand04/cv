import React, { useState } from "react";
import SeeExperience from "../text/SeeExperience";

export default function ButtonExperience() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="button_items">
      <button className="button" onClick={handleClick}>
        Mon expérience
      </button>

      {/* 👇️ show component on click */}
      {isShown && <SeeExperience />}
    </div>
  );
}
