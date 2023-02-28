import React from "react";
import ButtonFitness from "./ButtonFitness";
import ButtonSpy from "./ButtonSpy";
import ButtonCharlesCantin from "./ButtonCharlesCantin";
import ButtonBeer from "./ButtonBeer";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ButtonAll = () => {
  return (
    <div className="div_scroll">
      <Link to={"/"} reloadDocument>
        <FaHome id="home_link" />
      </Link>

      <div className="button_div">
        <div>
          <ButtonFitness />
        </div>
        <div>
          <ButtonSpy />
        </div>
        <div>
          <ButtonCharlesCantin />
        </div>
        <div>
          <ButtonBeer />
        </div>
      </div>
    </div>
  );
};

export default ButtonAll;
