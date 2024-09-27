import React from "react";
import { useState } from "react";

import "../../styles/Portfolio.css";
import home from "../../assets/weensyTeaser.gif";
import fork from "../../assets/weensyFork.gif";
import exit from "../../assets/weensyExit.gif";

import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="WeensyOS gif" />
      <div className="project-description">
        Given the framework for a mini operating system, I implemented privilege separation
        between the kernel and the user processes, and additionally handled separation between the user processes.
        I also implemented virtual memory so that each process could could have its own block of memory within a virtual
        address space. I added the ability to create new processes, as well as the ability to fork processes from existing
        processes. Finally, I added an exit() method so that processes could free memory and exit.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={fork} alt="WeensyOS gif" />
      <div className="project-description">
        When the user inputs "f", a call to fork() is made. A new
        child process is then created from the currently running process, which can be 
        seen on the left in the virtual address space. Read-only pages are shared between 
        the parent and child processes, which is denoted by the pages marked with S at the 
        beginning of each process's virtual address space.
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
        called, memory across the running processes gets freed, and the processes exit.
        The freed memory can be seen on the left with the sudden randomness in both
        physical and virtual memory
      </div>
    </div>
  );
}


function WeensyOS() {
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
        <div className="project-title header-item">WeensyOS</div>
        <div className="header-info header-item">Co-creator</div>
        <div className="header-info header-item">C++</div>
        <div className="header-info header-item">March-April 2024</div>
        <div className="header-info header-item">Code available upon request</div>
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
