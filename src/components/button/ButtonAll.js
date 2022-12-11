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
        <div className="button_div">

        <Link to={"/"}>
          <FaHome id="home_link" />
        </Link>  
        <ButtonFitness />
        <ButtonSpy />
        <ButtonCharlesCantin />
        <ButtonBeer />
        <ButtonFirst />
        </div>
        </>
      );
    };
    
  export default ButtonAll;
  