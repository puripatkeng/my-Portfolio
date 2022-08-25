import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <div id="Skill" name="Skill">
      <div className="container">
        
        <h1 className="sub-title">My Skill </h1>
        
        <div className="container skill__container">
          <div className="skill_frontend">
            <h1>Skill Development</h1>
            <div className="skill__content">

              <div className="skill_box">
                
              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;CSS/HTML</h2>
              </div>

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;JavaScript</h2>
              </div>

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;React</h2>
              </div>

              </div>

              <div className="skill_box">

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;Node.js</h2>
              </div>

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;MongoDB</h2>
              </div>

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;SQL</h2>
              </div>

              </div>
             

            </div>
          </div>
          {/* <div className="skill_frontend">
            <h1>Backend Development</h1>
            <div className="skill__content">

              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;Node.js</h2>
              </div>
              
              <div className="skill__detail">
                <h2><BsPatchCheckFill />&emsp;React</h2>
              </div>

            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Skill;
