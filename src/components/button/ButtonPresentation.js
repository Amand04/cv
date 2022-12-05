import React, { useState } from "react";
import SeePresentation from "../text/SeePresentation";

export default function ButtonPresentation() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Mon profil
      </button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Mon profil</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <SeePresentation />}
    </div>
  );
}
