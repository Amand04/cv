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

export default function ProjectCharlesCantin() {
  return (
    <div className="icons_project_a">
      <a
        href="https://charles-cantin-photograph.netlify.app/"
        className="icons_project_a"
      >
        Site internet Web et mobile d'un photographe fictif, Charles Cantin
        <SiJavascript className="icons_project_js" />
        <SiEleventy className="icons_project_sf" />
        <SiForestry className="icons_project_sf" />
        <SiNetlify className="icons_project" />
        <SiNetlify className="icons_project_sf" />
        <FiGithub className="icons_project_sf" />
        <img src={charles} alt="project" className="img_app" />
        <img src={charles2} alt="project" className="img_app" />
        <img src={charles3} alt="project" className="img_app" />
      </a>
    </div>
  );
}
