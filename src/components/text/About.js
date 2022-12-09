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
      lorem ipsum
    </div>
  );
};
export default About;
