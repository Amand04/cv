import React, { useState } from "react";
import SeeExperience from "../text/SeeExperience";

export default function ButtonExperience() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Mon expérience
      </button>

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
