import React from "react";
import { useState } from "react";

import "../../styles/Portfolio.css";
import home from "../../assets/websiteHome.gif";
import about from "../../assets/about.gif";
import figma from "../../assets/figma.jpg";
import github from "../../assets/githubLogo.png";


import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="Gif of personal site home page" />
      <div className="project-description">
        This is my personal website that I made to document myself and my work! Here you can find 
        some info about me as well as some of my past projects.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={figma} alt="Photo of Figma" />
      <div className="project-description">
        I used Figma to plan out and design each page of my website so that I
        had a clear plan regarding spacing, colors, and any other visual
        elements before I jumped into coding.
      </div>
    </div>
  );
}


function WeensyOS() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2];

  const accessSlide = (slideNum: Number) => {
    switch (slideNum) {
      case 0:
        return <Slide0 />;
      case 1:
        return <Slide1 />;
    }
  };
  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title header-item">My Personal Website!</div>
        <div className="header-info header-item">Creator</div>
        <div className="header-info header-item">Typescript, CSS, React</div>
        <div className="header-info header-item">August 2024</div>
        <div className="header-info header-item">
          <a
            href="https://github.com/chloenevas/personal-site.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img className="github" src={github} alt="Github logo" />
          </a>
        </div>
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
