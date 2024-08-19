import React from "react";
import "../styles/Portfolio.css"

import brownFit from "../assets/brownFit.jpg"

function Portfolio() {
  return (
    <div>
      <div id="title"> Portfolio </div>
      <div className="rectangle-portfolio"> </div>
      <div className="project-container">
        <div className="project">
          <div className="project-title">BrownFit</div>
          <img
            className="project-photo"
            src={brownFit}
            alt="Photo of BrownFit"
          />
          <div className="project-description">
            Co-created a web app that users to generate customized
            workouts by entering preferred workout duration, targeted muscle
            groups, and fitness goals.
          </div>
        </div>
        <div className="project">hi</div>
        <div className="project">hi</div>
      </div>
    </div>
  );
}

export default Portfolio;