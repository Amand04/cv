import beer from "../../images/accueil_beer.jpg";
import beer2 from "../../images/list_beer.jpg";
import beer3 from "../../images/detail_beer.jpg";
import { FaArrowLeft, FaArrowRight, FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiJavascript, SiNetlify } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectBeer() {
  return (
    <div className="project_a">
      <Link to={"/projects"}>
      <FaArrowLeft id="home_link" />
      </Link>
      <div className="icons_div">
        <SiJavascript className="icons_project_js" />
        <TbApi className="icons_project" />
        <FaReact className="icons_project" />
        <SiNetlify className="icons_project_php" />
        <FiGithub className="icons_project_sf" />
      </div>
      <p className="p_seeAplication">
      Application Web et Web mobile avec requêtes d'API
      </p>
      <div className="img_div">
        <img src={beer} alt="project" className="img_app" />
        <img src={beer2} alt="project" className="img_app" />
        <img src={beer3} alt="project" className="img_app" />
      </div>
      <p className="p_seeAplication">Voir l'application</p>
      <a href="https://fake-beer.netlify.app/" className="Link">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
