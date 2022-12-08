import first from "../../images/ecran_first.jpg";

import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function ProjectFirst() {
  return (
    <div className="icons_project_a">
      <p>
        <SiJavascript className="icons_project_js" />
        <SiNetlify className="icons_project" />
        <FiGithub className="icons_project_sf" />
      </p>
      <a href="https://elegant-jeu-de-des.netlify.app/" className="Link">
        Ma première application Web mobile jeu de dés version enfant
        <div className="img_div">
          <img src={first} alt="project" className="img_app" />
        </div>
      </a>
    </div>
  );
}
