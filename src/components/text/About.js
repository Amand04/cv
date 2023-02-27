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
        propose mes services pour la création de:
      </p>
      <p className="about_text">
        Sites internet - Sites e-commerce (boutiques) - Sites WordPress -
        Maintenance - Applications web et web mobile.
      </p>
      <p className="about_text">
        Pour plus de renseignements, je vous invite à me contacter au
      </p>
      <p className="about_text">06 40 65 54 30.</p>
    </div>
  );
};
export default About;
