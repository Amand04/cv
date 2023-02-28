import charles from "../../images/accueil_charles.jpg";
import charles1 from "../../images/galerie_charles.jpg";
import charles2 from "../../images/menu_charles.jpg";
import charles3 from "../../images/contact_charles.jpg";
import { FiGithub } from "react-icons/fi";

import {
  SiEleventy,
  SiForestry,
  SiNetlify,
  SiJavascript,
} from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectCharlesCantin() {
  return (
    <div className="project_a">
      <Link to={"/projects"} reloadDocument>
        <FaArrowLeft id="home_link" />
      </Link>
      <div className="icons_div">
        <SiJavascript className="icons_project_js" />
        <SiEleventy className="icons_project_sf" />
        <SiForestry className="icons_project_sf" />
        <SiNetlify className="icons_project_php" />
        <FiGithub className="icons_project_sf" />
      </div>
      <p className="p_seeAplication">
        Site internet Web et mobile d'un photographe professionnel, Charles
        Cantin
      </p>
      <div className="img_div">
        <img src={charles} alt="project" className="img_app" />
        <img src={charles2} alt="project" className="img_app" />
        <img src={charles1} alt="project" className="img_app" />
        <img src={charles3} alt="project" className="img_app" />
      </div>
    </div>
  );
}
