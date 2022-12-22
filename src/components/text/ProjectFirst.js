import first from "../../images/ecran_first.jpg";

import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectFirst() {
  return (
    <div className="project_a">
      <Link to={"/projects"}>
      <FaArrowLeft id="home_link" />
      </Link>
      <div className="icons_div">
        <SiJavascript className="icons_project_js" />
        <SiNetlify className="icons_project" />
        <FiGithub className="icons_project_sf" />
      </div>
      <p className="p_seeAplication">
      Ma première application Web mobile jeu de dés version enfant
      </p>
      <div className="img_div">
        <img src={first} alt="project" className="img_app" />
      </div>
      <p className="p_seeAplication">Voir l'application</p>
      <a href="https://elegant-jeu-de-des.netlify.app/" className="Link">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
