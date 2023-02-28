import spy from "../../images/login_spy.jpg";
import spy2 from "../../images/list_spy.jpg";
import spy3 from "../../images/form_spy.jpg";
import { FaArrowLeft, FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProjectSpy() {
  return (
    <div className="project_a">
      <Link to={"/projects"}>
        <FaArrowLeft id="home_link" />
      </Link>
      <div className="icons_div">
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
      </div>
      <p className="p_seeAplication">
        Application web et mobile permettant la gestion de l'organisation
      </p>
      <div className="img_div">
        <img src={spy} alt="project" className="img_app" />
        <img src={spy2} alt="project" className="img_app" />
        <img src={spy3} alt="project" className="img_app" />
      </div>
    </div>
  );
}
