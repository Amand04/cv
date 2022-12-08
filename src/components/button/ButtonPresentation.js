import React, { useState } from "react";
import SeePresentation from "../text/SeePresentation";

export default function ButtonPresentation() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="button_items">
      <button className="button" onClick={handleClick}>
        Mon profil
      </button>

      {/* 👇️ show component on click */}
      {isShown && <SeePresentation />}
    </div>
  );
}
