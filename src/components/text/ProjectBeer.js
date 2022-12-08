import beer from "../../images/accueil_beer.jpg";
import beer2 from "../../images/list_beer.jpg";
import beer3 from "../../images/detail_beer.jpg";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function ProjectApi() {
  return (
    <div className="icons_project_a">
      <p>
        <SiJavascript className="icons_project_js" />
        <TbApi className="icons_project" />
        <FaReact className="icons_project" />
        <SiNetlify className="icons_project_php" />
        <FiGithub className="icons_project_sf" />
      </p>
      <a href="https://fake-beer.netlify.app/" className="Link">
        Application Web et Web mobile avec requêtes d'API
        <div className="img_div">
          <img src={beer} alt="project" className="img_app" />
          <img src={beer2} alt="project" className="img_app" />
          <img src={beer3} alt="project" className="img_app" />
        </div>
      </a>
    </div>
  );
}
