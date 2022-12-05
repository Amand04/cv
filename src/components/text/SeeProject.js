import { FaSymfony, FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiPhp,
  SiEleventy,
  SiForestry,
  SiNetlify,
  SiJavascript,
} from "react-icons/si";

export default function SeeProject() {
  return (
    <div>
      <div className="icons_project_a">
        <a href="https://fitnesscl.herokuapp.com/" className="icons_project_a">
          Application Web et mobile de gestion de droits des franchisés pour une
          marque de salles de sport
          <FaSymfony className="icons_project_sf" />
          <SiPhp className="icons_project_php" />
        </a>
      </div>
      <div className="icons_project_a">
        <a href="https://spy22.herokuapp.com/" className="icons_project_a">
          Application Web et mobile d'une Agence fictive d'espionnage
          <FaSymfony className="icons_project_sf" />
          <SiPhp className="icons_project_php" />
        </a>
      </div>
      <div className="icons_project_a">
        <a
          href="https://charles-cantin-photograph.netlify.app/"
          className="icons_project_a"
        >
          Site internet Web et mobile d'un photographe fictif, Charles Cantin
          <SiEleventy className="icons_project_sf" />
          <SiForestry className="icons_project_sf" />
          <SiNetlify className="icons_project" />
        </a>
      </div>
      <div className="icons_project_a">
        <a
          href="https://elegant-jeu-de-des.netlify.app/"
          className="icons_project_a"
        >
          Ma première application Web mobile
          <SiJavascript className="icons_project_js" />
        </a>
      </div>
      <div className="icons_project_a">
        <a href="https://fake-beer.netlify.app/" className="icons_project_a">
          Application Web mobile
          <SiJavascript className="icons_project_js" />
          <TbApi className="icons_project" />
          <FaReact className="icons_project" />
        </a>
      </div>
    </div>
  );
}
