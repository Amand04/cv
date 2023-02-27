import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_global">
        <a
          href="https://www.linkedin.com/in/amandine-dromard-8a8442245/"
          className="icons_footer"
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/Amand04" className="icons_footer">
          <FiGithub />
        </a>
        <p className="Footer_text_AD">Amandine Dromard</p>
        <p className="Footer_text">
          Entreprise Individuelle - NAF: 62.01Z - SIRET 921 158 861 00010
        </p>
        <p className="Footer_text">amandinejeanjules@free.fr | 2023</p>
        <p className="Footer_text">06 40 65 54 30</p>
      </div>
    </div>
  );
}
