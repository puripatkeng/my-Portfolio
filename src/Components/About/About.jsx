import React from "react";
import "./about.css";
import myPic from "../../assets/myPic.jpg";
const About = () => {
  return (
    <div id="about" name="AboutMe">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={myPic} alt="AboutMe" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <h2>
              I am a former Network engineer, I have 5-year experience in IT
              Network, excellent team work and would like to explore new
              challenge in software developer path.
            </h2>
            <h1 className="sub-title">Education</h1>
            <h2>
              <span>JUNE 2022 – AUGUST 2022 (12WEEK)</span>
              <br />
              BOOTCAMP JUNIOR SOFTWARE DEVELOPER #2
            </h2><br />
            <h2>
              <span>MAY 2010 – JUNE 2014</span>
              <br />
              BACHELOR’S DEGREE IN ELECTRONIC AND TELECOMMUNICATION ENGINEERING
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
