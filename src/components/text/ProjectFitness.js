import fitness from "../../images/login_fitness.jpg";
import fitness2 from "../../images/accueil_fitness.jpg";
import fitness3 from "../../images/users_fitness.jpg";
import { FaSymfony } from "react-icons/fa";
import { SiJquery, SiPhp } from "react-icons/si";
import { DiHeroku } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

export default function ProjectFitness() {
  return (
    <div className="icons_project_a">
      <a href="https://fitnesscl.herokuapp.com/" className="icons_project_a">
        Application Web et mobile de gestion de droits des franchisés pour une
        marque de salles de sport
        <FaSymfony className="icons_project_sf" />
        <SiPhp className="icons_project_php" />
        <SiJquery className="icons_project_jquery" />
        <DiHeroku className="icons_project_heroku" />
        <FiGithub className="icons_project_sf" />
        <img src={fitness} alt="project" className="img_app" />
        <img src={fitness2} alt="project" className="img_app" />
        <img src={fitness3} alt="project" className="img_app" />
      </a>
    </div>
  );
}
