import spy from "../../images/login_spy.jpg";
import spy2 from "../../images/list_spy.jpg";
import spy3 from "../../images/form_spy.jpg";
import { FaArrowRight, FaHome, FaSymfony } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProjectSpy() {
  return (
    <div className="icons_project_a">
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      <p>
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
      </p>
      Application Web et mobile d'une Agence fictive d'espionnage
      <div className="img_div">
        <img src={spy} alt="project" className="img_app" />
        <img src={spy2} alt="project" className="img_app" />
        <img src={spy3} alt="project" className="img_app" />
      </div>
      <p>Voir l'application</p>
      <a href="https://spy22.herokuapp.com/" className="Link">
        <FaArrowRight id="site_link" />
      </a>
    </div>
  );
}
