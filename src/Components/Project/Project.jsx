import React from "react";
import jammming from "../../assets/jammming.jpg";
import ActiviyTracker from "../../assets/ActiviyTracker.jpg";
import FindYourHat from "../../assets/FindYourHat.png";
import { BsGithub } from "react-icons/bs";
import { RiCodeBoxFill } from "react-icons/ri";
const Project = () => {
  return (
    <div id="portfolio" name="Project">
      <div className="container">
        <h1 className="sub-title">My Project</h1>
        <div className="project-list">
          <div className="project">
            <img src={jammming} />
            <div className="layer">
              <h2>jammming</h2>
              <a href="https://puripat-jammming.surge.sh" target="_blank">
                <RiCodeBoxFill className="svg_icons" />
              </a>
              <a href="https://github.com/puripatkeng/jammming" target="_blank">
                <BsGithub className="svg_icons" />
              </a>
            </div>
          </div>


          <div className="project">
            <img src={ActiviyTracker} />
            <div className="layer">
              <h2>Activiy-Tracker</h2>
              <a href="https://project-front-end-kappa.vercel.app/" target="_blank">
                <RiCodeBoxFill className="svg_icons" />
              </a>
              <a href="https://github.com/puripatkeng/Project-FrontEnd" target="_blank">
                <BsGithub className="svg_icons" />
              </a>
            </div>
          </div>


          <div className="project">
            <img src={FindYourHat} />
            <div className="layer">
              <h2>FindYourHat</h2>
              <a href="https://replit.com/@PuripatLaiprase/findYourHat#index.js" target="_blank">
                <RiCodeBoxFill className="svg_icons" />
              </a>
              {/* <a href="https://github.com/puripatkeng/jammming" target="_blank">
                <BsGithub className="svg_icons" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
