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
      <p className="Footer_text">amandinejeanjules@free.fr</p>
      <p className="Footer_text">06 40 65 54 30</p>
      <p className="Footer_text">Tous droits reservés | 2022</p>
    </div>
    </div>
  );
}
