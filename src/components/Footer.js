import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://www.linkedin.com/in/amandine-dromard-8a8442245/"
        className="icons_footer"
      >
        <FiLinkedin />
      </a>
      <a href="https://github.com/Amand04" className="icons_footer">
        <FiGithub />
      </a>
      <p>Tous droits reservés | 2022</p>
    </div>
  );
}
