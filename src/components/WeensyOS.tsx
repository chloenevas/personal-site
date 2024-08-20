import React from "react";
import { useState } from "react";

import "../styles/Portfolio.css";
import home from "../assets/weensyTeaser.gif";
import fork from "../assets/weensyFork.gif";
import exit from "../assets/weensyExit.gif";

import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="WeensyOS gif" />
      <div className="project-description">
              Given the framework for a mini operating system, I implemented the physical
              and virtual memory handling, as well as calls to fork.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={fork} alt="WeensyOS gif" />
      <div className="project-description">
        When the user inputs "f", a call to the fork() function is made. A new
        child process is then created
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={exit} alt="WeensyOS gif" />
      <div className="project-description">
        When the user inputs "e", a call to exit() is made. When exit() is
        called, memory across the running processes gets freed, as can be seen
        with the sudden randomness in both physical and virtual memory
      </div>
    </div>
  );
}


function WeensyOS() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2, 3];
  var slideNum = 1;

  const accessSlide = (slideNum: Number) => {
    switch (slideNum) {
      case 0:
        return <Slide0 />;
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
    }
  };
  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title header-item">WeensyOS</div>
        <div className="header-info header-item">Co-creator</div>
        <div className="header-info header-item">C++</div>
        <div className="header-info header-item">March-April 2024</div>
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

export default WeensyOS;
