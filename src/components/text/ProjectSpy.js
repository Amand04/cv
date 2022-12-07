import spy from "../../images/login_spy.jpg";
import spy2 from "../../images/list_spy.jpg";
import spy3 from "../../images/form_spy.jpg";
import { FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

export default function ProjectSpy() {
  return (
    <div className="icons_project_a">
      <a href="https://spy22.herokuapp.com/" className="icons_project_a">
        Application Web et mobile d'une Agence fictive d'espionnage
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
        <img src={spy} alt="project" className="img_app" />
        <img src={spy2} alt="project" className="img_app" />
        <img src={spy3} alt="project" className="img_app" />
      </a>
    </div>
  );
}
