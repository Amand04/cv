import beer from "../../images/accueil_beer.jpg";
import beer2 from "../../images/list_beer.jpg";
import beer3 from "../../images/detail_beer.jpg";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

export default function ProjectApi() {
  return (
    <div className="icons_project_a">
      <a href="https://fake-beer.netlify.app/" className="icons_project_a">
        Application Web et Web mobile avec requêtes d'API
        <SiJavascript className="icons_project_js" />
        <TbApi className="icons_project" />
        <FaReact className="icons_project" />
        <FiGithub className="icons_project_sf" />
        <img src={beer} alt="project" className="img_app" />
        <img src={beer2} alt="project" className="img_app" />
        <img src={beer3} alt="project" className="img_app" />
      </a>
    </div>
  );
}