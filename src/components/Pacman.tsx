import React from "react";
import { useState } from "react";

import "../styles/Portfolio.css";
import bfs from "../assets/bfs.gif";
import gameOver from "../assets/gameOver.gif";
import frighten from "../assets/frighten.gif";


import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="pacman" src={bfs} alt="Photo of BrownFit" />
      <div className="project-description">
              The ghosts chase the pacman using a BFS algorithm to find the shortest path to 
              Pacman. They switch off between this "chase" mode with BFS and a scatter mode
              where they target separate corners of the screen. They leave and re-enter the pen in a queue. 
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="pacman" src={gameOver} alt="Photo of BrownFit" />
      <div className="project-description">
              Every time pacman runs into a ghost, they lose a life. Once they have lost all 3
              lives, the game is over and their final score can be seen at the bottom.
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="pacman" src={frighten} alt="Photo of BrownFit" />
      <div className="project-description">
              When Pac-Man eats an energizer, the ghosts switch to frightened mode, where they move randomly instead of
              chasing pacman. If pacman eats a ghost in this mode, their score increases by
              100 and the ghost goes back to the pen.
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
        <div className="project-title header-item">Pac-Man</div>
        <div className="header-info header-item">Creator</div>
        <div className="header-info header-item">Java</div>
        <div className="header-info header-item">November-December 2022</div>
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
