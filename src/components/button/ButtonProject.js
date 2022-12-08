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

      {/* 👇️ show component on click */}
      {isShown && <SeeProject />}
    </div>
  );
}
