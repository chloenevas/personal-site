import React from "react";
import "../styles/Portfolio.css";
import BrownFit from "./BrownFit";
import { useState, useEffect, useRef } from "react";

import weensyGif from "../assets/weensyTeaser.gif";
import pacmanGif from "../assets/pacman.gif";
import websiteGif from "../assets/website.gif";
import { colors } from "react-select/dist/declarations/src/theme";
import home from "../assets/brownFit.jpg";
import generate from "../assets/brownFitGenerate.jpg";
import progress from "../assets/brownFitProgress.jpg";
import additional from "../assets/brownFitAdditional.jpg";
import info from "../assets/brownFitInfo.jpg";

function Slide1() {
  return (
    <div className="please-work">
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

function Slide2() {
  return (
    <div className="project-content">
      <img className="project-photo" src={generate} alt="Photo of BrownFit" />
      <div className="project-description">This is the second slide</div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="project-content">
      <img className="project-photo" src={progress} alt="Photo of BrownFit" />
      <div className="project-description">This is the third slide</div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="project-content">
      <img className="project-photo" src={additional} alt="Photo of BrownFit" />
      <div className="project-description">This is the fourth slide</div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="project-content">
      <img className="project-photo" src={info} alt="Photo of BrownFit" />
      <div className="project-description">This is the fourth slide</div>
    </div>
  );
}

  const accessSlide = (slideNum: Number) => {
    switch (slideNum) {
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide3 />;
      case 4:
        return <Slide4 />;
      case 5:
        return <Slide5 />;
    }
  };
function Portfolio() {
  // const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const slides = [1, 2, 3, 4, 5];

  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const autoSlideInterval = 7000;

  useEffect(() => {
    resetTimeout();
        timeoutRef.current = setTimeout(

      () => setCurrentSlide((prevSlide) => prevSlide === slides.length - 1 ? 0 : prevSlide + 1), autoSlideInterval);
    return () => { };
  }, [currentSlide])

  return (
    <div>
      <div className="header">
        <div id="portfolio-title"> Portfolio </div>
        <div className="underline-portfolio"> </div>
      </div>

      <div className="all-projects"></div>
      <div className="project">
        <div className="inner-project-container">
          <div
            className="slider"
            style={{ transform: `translate3d(${-currentSlide * 100}%, 0, 0)` }}
          >
            {slides.map((slideNum) => (
              <div className="project-content"> {accessSlide(slideNum)} </div>
            ))}
          </div>
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
    </div>
  );
}

export default Portfolio;
