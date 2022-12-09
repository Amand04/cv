import charles from "../../images/accueil_charles.jpg";
import charles2 from "../../images/menu_charles.jpg";
import charles3 from "../../images/contact_charles.jpg";
import { FiGithub } from "react-icons/fi";

import {
  SiEleventy,
  SiForestry,
  SiNetlify,
  SiJavascript,
} from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectCharlesCantin() {
  return (
    <div className="icons_project_a">
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      <p>
        <SiJavascript className="icons_project_js" />
        <SiEleventy className="icons_project_sf" />
        <SiForestry className="icons_project_sf" />
        <SiNetlify className="icons_project_php" />
        <FiGithub className="icons_project_sf" />
      </p>
      Site internet Web et mobile d'un photographe fictif, Charles Cantin
      <div className="img_div">
        <img src={charles} alt="project" className="img_app" />
        <img src={charles2} alt="project" className="img_app" />
        <img src={charles3} alt="project" className="img_app" />
      </div>
      <p>Voir l'application</p>
      <a href="https://charles-cantin-photograph.netlify.app/" className="Link">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
