import React from "react";
import fitness from "../../images/login_fitness.jpg";
import fitness2 from "../../images/accueil_fitness.jpg";
import fitness3 from "../../images/users_fitness.jpg";
import { FaArrowLeft, FaArrowRight, FaSymfony } from "react-icons/fa";
import { SiJquery, SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectFitness() {
  return (
    <div className="icons_project_a">
      <Link to={"/projects"}>
        <FaArrowLeft id="home_link" />
      </Link>
      <p>
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <SiJquery className="icons_project_jquery" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
      </p>
      <p className="p_seeAplication">
      Application Web et mobile de gestion de droits des franchisés pour une
      marque de salles de sport
      </p>
      <div className="img_div">
        <img src={fitness} alt="project" className="img_app" />
        <img src={fitness2} alt="project" className="img_app" />
        <img src={fitness3} alt="project" className="img_app" />
      </div>
      <p className="p_seeAplication">Voir l'application</p>
      <a href="https://fitnesscl.herokuapp.com/">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
