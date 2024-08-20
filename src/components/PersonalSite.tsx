import React from "react";
import { useState } from "react";

import "../styles/Portfolio.css";
import home from "../assets/websiteHome.gif";
import about from "../assets/about.gif";
import figma from "../assets/figma.jpg";


import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="Photo of BrownFit" />
      <div className="project-description">
              This is my personal website that I made to document my work and have a
              landing page for any information about me! I added a little animation with some 
              dancing dots across the home page for a bit of flair! 
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={about} alt="Photo of BrownFit" />
      <div className="project-description">
              My about page has some info about me, including where I'm from, what I'm interested in, 
              and what I'm working on in and outside of school. Some more fun animation with 
              the text bubbles on this slide as well!
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={figma} alt="Photo of BrownFit" />
      <div className="project-description">
              I used Figma to plan out and design each page of my website so that I had a clear
              idea of things such as spacing, colors, and any other visual elements before I jumped
              into coding.
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
        <div className="project-title header-item">My Personal Website!</div>
        <div className="header-info header-item">Creator</div>
        <div className="header-info header-item">Typescript, CSS, React</div>
        <div className="header-info header-item">August 2024</div>
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
