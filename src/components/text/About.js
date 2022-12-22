import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="project_a">
      {" "}
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      <p className="about_text">
      Développeuse web et web mobile (langages PHP, Javascript, Frameworks
      Symfony, React, CMS Wordpress), passionnée par l'informatique, je vous
      propose mes services pour la création de : Sites internet - Applications de
      gestion web et web mobile. Pour plus de
      renseignements, je vous invite à me contacter au 06 40 65 54 30, je vous répondrai au plus
      vite. 
      </p>
    </div>

  );
};
export default About;
