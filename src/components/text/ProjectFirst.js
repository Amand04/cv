import first from "../../images/ecran_first.jpg";

import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function ProjectFirst() {
  return (
    <div className="icons_project_a">
      <a
        href="https://elegant-jeu-de-des.netlify.app/"
        className="icons_project_a"
      >
        Ma première application Web mobile jeu de dés version enfant
        <SiJavascript className="icons_project_js" />
        <SiNetlify className="icons_project" />
        <FiGithub className="icons_project_sf" />
        <img src={first} alt="project" className="img_app" />
      </a>
    </div>
  );
}
