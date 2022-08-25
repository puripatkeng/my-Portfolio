import React from "react";
import "./header.css";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <Navbar />
        <div className="header-text">
          <h1>Hi There!, </h1>
          <h1><span>I'm </span>Puripat Laiprasert</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
