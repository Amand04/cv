import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="Header_card">
      {" "}
      <Link to={"/"}>
        <FaHome id="home_link" />
      </Link>
      Cette page est en cours de construction, merci de votre compréhension.
    </div>
  );
};
export default About;
