import React, { useState } from "react";
import SeeFormation from "../text/SeeFormation";

export default function ButtonFormation() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Ma formation
      </button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Ma formation</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <SeeFormation />}
    </div>
  );
}
