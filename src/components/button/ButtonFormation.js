import React, { useState } from "react";
import SeeFormation from "../text/SeeFormation";

export default function ButtonFormation() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="button_items">
      <button className="button" onClick={handleClick}>
        Ce que je peux vous apporter
      </button>

      {/* 👇️ show component on click */}
      {isShown && <SeeFormation />}
    </div>
  );
}
