import React from "react";
import { useState } from "react";

import "../styles/Portfolio.css";
import home from "../assets/brownFit.jpg";
import generate from "../assets/brownFitGenerate.jpg";
import progress from "../assets/brownFitProgress.jpg";
import additional from "../assets/brownFitAdditional.jpg";
import info from "../assets/brownFitInfo.jpg";

import slideArrow from "../assets/slide-arrow.png";


function Slide1() {
    return (
      <div className="project-content">
        <img className="project-photo" src={home} alt="Photo of BrownFit" />
        <div className="project-description">
          Designed and developed a web app specific to the Brown University gym
          facilities and student body, utilizing Java for the backend and
          Typescript for the frontend. Created a platform allowing users to
          generate customized workouts by entering preferred workout duration,
          targeted muscle groups, and fitness goals.
        </div>
        <img className="slide-arrow" src={slideArrow} alt="Slide arrow"></img>
      </div>
    );
}

function Slide2() {
 return (
   <div className="project-content">
     <img className="project-photo" src={generate} alt="Photo of BrownFit" />
     <div className="project-description">
       This is the second slide
     </div>
   </div>
 );
}

function Slide3() {
  return (
    <div className="project-content">
      <img className="project-photo" src={progress} alt="Photo of BrownFit" />
      <div className="project-description">
        This is the third slide
      </div>
      <img className="slide-arrow" src={slideArrow} alt="Slide arrow"></img>
    </div>
  );
}

function Slide4() {
  return (
    <div className="project-content">
      <img className="project-photo" src={additional} alt="Photo of BrownFit" />
      <div className="project-description">
        This is the fourth slide
      </div>
      <img className="slide-arrow" src={slideArrow} alt="Slide arrow"></img>
    </div>
  );
}

function Slide5() {
  return (
    <div className="project-content">
      <img className="project-photo" src={info} alt="Photo of BrownFit" />
      <div className="project-description">This is the fourth slide</div>
      <img
        className="slide-arrow"
        src={slideArrow}
        alt="Slide arrow"
      ></img>
    </div>
  );
}
function BrownFit() {

    const [currentSlide, setCurrentSlide] = useState("Slide 1");
    var slideNum = 1;

    const switchSlide = () => {
    switch (currentSlide) {
      case "Slide 1":
        return <Slide1 />;
      case "Slide 2":
        return <Slide2 />;
      case "Slide 3":
        return <Slide3 />;
      case "Slide 4":
        return <Slide4 />;
      case "Slide 5":
        return <Slide5 />;
    }
    };
    return (
      <div className="project">
        <div className="project-header">
          <div className="project-title header-item">BrownFit</div>
          <div className="header-info header-item">Co-creator</div>
          <div className="header-info header-item">Typescript, React</div>
          <div className="header-info header-item">December 2023</div>
        </div>
        <div className="project-container">
          <div className="blue-box">
            <div>{switchSlide()}</div>
          </div>

          <div className="dot-container">
            <div
              className={`${
                currentSlide === "Slide 1" ? "active-dot" : ""
              } slide-dot `}
              onClick={() => setCurrentSlide("Slide 1")}
            ></div>
            <div
              className={`${
                currentSlide === "Slide 2" ? "active-dot" : ""
              } slide-dot `}
              onClick={() => setCurrentSlide("Slide 2")}
            ></div>
            <div
              className={`${
                currentSlide === "Slide 3" ? "active-dot" : ""
              } slide-dot `}
              onClick={() => setCurrentSlide("Slide 3")}
            ></div>
            <div
              className={`${
                currentSlide === "Slide 4" ? "active-dot" : ""
              } slide-dot `}
              onClick={() => setCurrentSlide("Slide 4")}
            ></div>
            <div
              className={`${
                currentSlide === "Slide 5" ? "active-dot" : ""
              } slide-dot `}
              onClick={() => setCurrentSlide("Slide 5")}
            ></div>
          </div>
        </div>
      </div>
    );
}

export default BrownFit;
