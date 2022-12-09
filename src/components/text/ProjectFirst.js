import first from "../../images/ecran_first.jpg";

import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectFirst() {
  return (
    <div className="icons_project_a">
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      <p>
        <SiJavascript className="icons_project_js" />
        <SiNetlify className="icons_project" />
        <FiGithub className="icons_project_sf" />
      </p>
      Ma première application Web mobile jeu de dés version enfant
      <div className="img_div">
        <img src={first} alt="project" className="img_app" />
      </div>
      <p>Voir l'application</p>
      <a href="https://elegant-jeu-de-des.netlify.app/" className="Link">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
