import React from "react";
import fitness from "../../images/login_fitness.jpg";
import fitness2 from "../../images/accueil_fitness.jpg";
import fitness3 from "../../images/users_fitness.jpg";
import video from "../../images/demo_fitness1.mp4";
import video2 from "../../images/demo_fitness2.mp4";
import { FaArrowRight, FaHome, FaSymfony } from "react-icons/fa";
import { SiJquery, SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { Player } from "video-react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ProjectFitness() {
  return (
    <div className="icons_project_a">
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      <p>
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <SiJquery className="icons_project_jquery" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
      </p>
      Application Web et mobile de gestion de droits des franchisés pour une
      marque de salles de sport
      <div className="img_div">
        <img src={fitness} alt="project" className="img_app" />
        <img src={fitness2} alt="project" className="img_app" />
        <img src={fitness3} alt="project" className="img_app" />
      </div>
      <div className="img_div">
        <div className="img_app">
          <Player
            playsInline
            fluid={false}
            width={300}
            height={150}
            className="video"
          >
            <source src={video} className="video_item" type="video/mp4" />
          </Player>
          <Player
            playsInline
            fluid={false}
            width={300}
            height={150}
            className="video"
          >
            <source src={video2} className="video_item" type="video/mp4" />
          </Player>
        </div>
      </div>
      <p>Voir l'application</p>
      <a href="https://fitnesscl.herokuapp.com/">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
