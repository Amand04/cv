import React from "react";
import fitness from "../../images/login_fitness3.jpg";
import fitness2 from "../../images/accueil_fitness.jpg";
import fitness3 from "../../images/users_fitness.jpg";
import { FaArrowLeft, FaSymfony } from "react-icons/fa";
import { SiJquery, SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectFitness() {
  return (
    <>
      <Link to={"/projects"}>
        <FaArrowLeft id="home_link" />
      </Link>

      <div className="project_a">
        <div className="icons_div">
          <FaSymfony className="icons_project_sf" />
          <SiPhp className="icons_project_php" />
          <SiJquery className="icons_project_jquery" />
          <DiHeroku className="icons_project_heroku" />
          <FiGithub className="icons_project_sf" />
        </div>
        <p className="p_seeAplication">
          Application Web et mobile permettant de gérer les droits des
          partenaires franchisés, salles de sport
        </p>
        <div className="img_div">
          <img src={fitness} alt="project" className="img_app" />
          <img src={fitness2} alt="project" className="img_app" />
          <img src={fitness3} alt="project" className="img_app" />
        </div>
      </div>
    </>
  );
}
