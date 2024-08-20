import React from "react";
import { useState } from "react";

import "../styles/Portfolio.css";
import home from "../assets/brownFit.jpg";
import generate from "../assets/brownFitGenerate.jpg";
import progress from "../assets/brownFitProgress.jpg";
import additional from "../assets/brownFitAdditional.jpg";

import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="Photo of BrownFit" />
      <div className="project-description">
        Designed and developed a web app specific to the Brown University gym
        facilities and student body, utilizing Java for the backend and
        Typescript for the frontend. Created a platform allowing users to
        generate customized workouts by entering preferred workout duration,
        targeted muscle groups, and fitness goals.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={generate} alt="Photo of BrownFit" />
      <div className="project-description">
        This is where the user can generate a custom workout. They can enter
        their workout duration, desire muscle groups, and a workout goal. This
        will then connect to the backend which ...{" "}
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={progress} alt="Photo of BrownFit" />
      <div className="project-description">
        If the user is logged in, then they will gain access to their progress
        tab. Here they will be able to see what machines they have generated.
        They also have the opportunity to add machines in themselves.
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={additional} alt="Photo of BrownFit" />
      <div className="project-description">
        This is a page with additional info, such as resources that the user can
        look into as well as a gym playlist to use while working out
      </div>
    </div>
  );
}

function BrownFit() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2, 3, 4];
  var slideNum = 1;

  const accessSlide = (slideNum: Number) => {
    switch (slideNum) {
      case 0:
        return <Slide0 />;
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide3 />;
    }
  };
  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title header-item">
          Broadband Access Info System
        </div>
        <div className="header-info header-item">Co-creator</div>
        <div className="header-info header-item">
          Java, Typescript, React, CSS
        </div>
        <div className="header-info header-item">September-October 2023</div>
      </div>
      <div className="project-container">
        <div className="project-content">{accessSlide(currentSlide)}</div>

        <div className="dot-container">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`slide-dot ${
                currentSlide === idx ? "active-dot" : ""
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrownFit;
