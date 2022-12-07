import React, { useState } from "react";
import SeeProject from "../text/SeeProject";

export default function ButtonProject() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="button_items">
      <button className="button" onClick={handleClick}>
        Mes projets
      </button>

      {isShown && (
        <div>
          <h2>Mes Projets</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <SeeProject />}
    </div>
  );
}
