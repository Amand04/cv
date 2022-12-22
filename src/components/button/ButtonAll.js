import React from "react";
import ButtonFitness from "./ButtonFitness";
import ButtonSpy from "./ButtonSpy";
import ButtonCharlesCantin from "./ButtonCharlesCantin";
import ButtonBeer from "./ButtonBeer";
import ButtonFirst from "./ButtonFirst";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ButtonAll = () => {
  return (
    <>
      <div>
        <Link to={"/"}>
          <FaHome id="home_link" />
        </Link>
      </div>
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
        <div>
        <ButtonFirst />
        </div>
      </div>
    </>
  );
};

export default ButtonAll;
