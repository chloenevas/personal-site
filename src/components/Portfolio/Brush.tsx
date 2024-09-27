import React from "react";
import { useState } from "react";

import "../../styles/Portfolio.css";
import brushes from "../../assets/basic-brushes.gif";
import spray from "../../assets/spray.gif";
import smudge from "../../assets/smudge.gif";


function Slide0() {
  return (
    <div className="slide-content">
      <img className="brush" src={brushes} alt="Gif of brushes" />
      <div className="project-description">
        Given a GUI framework, I used masks to create different brush styles such as a constant brush, a linear brush, and 
        a quadratic brush. Each brush has a different amount of color at varying distances from the center based 
        on its type of brush (ex. linear has a linearly decreasing amount of color from the center of the brush). 
        The opacity of the brushes can also be changed with the alpha value.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="brush" src={smudge} alt="Gif of smudge brush" />
      <div className="project-description">
        When using the smudge brush, the colors on the canvas are picked up and stored in a separate mask 
        and then placed down again as the brush moves to create a smudging effect on the canvas. 
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="brush" src={spray} alt="Gif of spray brush" />
      <div className="project-description">
        The spray brush calculates how many pixels should be colored based on the mask size and the inputted
        density, and then places color down at that many random pixels within the mask. At a density of 1 it 
        will be a constant brush.
      </div>
    </div>
  );
}

function Brush() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2, 3];

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
        <div className="project-title header-item">Brush</div>
        <div className="header-info header-item">Co-Creator</div>
        <div className="header-info header-item">C++</div>
        <div className="header-info header-item">September 2024</div>
        <div className="header-info header-item">
          Code available upon request
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

export default Brush;
