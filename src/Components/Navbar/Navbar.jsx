import React from "react";
import logo2 from "../../assets/logo2.png";
const Navbar = () => {
  return (
    
      <nav>
        <img className="logo" src={logo2} />
        <div className="ul">
          <div className="li"><a href="#about">About Me</a></div>
          <div className="li"><a href="#experience">Experience</a></div>
          <div className="li"><a href="#Skill">Skill</a></div>
          <div className="li"><a href="#portfolio">Project</a></div>
          <div className="li"><a href="#contact">Contact</a></div>
        </div>
      </nav>

  );
};

export default Navbar;
