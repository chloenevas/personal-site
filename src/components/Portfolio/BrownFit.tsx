import React from "react";
import { useState } from "react";

import "../../styles/Portfolio.css";
import home from "../../assets/brownFit.jpg";
import generate from "../../assets/brownFitGenerate.jpg";
import progress from "../../assets/brownFitProgress.jpg";
import additional from "../../assets/brownFitAdditional.jpg";
import github from "../../assets/githubLogo.png";

import slideArrow from "../assets/slide-arrow.png";

function Slide0() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={home} alt="Photo of BrownFit" />
      <div className="project-description">
        BrownFit is a web app specific to the Brown University gym
        facilities and student body. BrownFit allows users to
        generate customized workouts by entering their preferred workout duration,
        targeted muscle groups, and fitness goals. We integrated Firebase
        authentication and database to allow users to securely store, monitor,
        and modify their workout data, ensuring a personalized experience for
        every user.
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={generate} alt="Photo of BrownFit" />
      <div className="project-description">
        Users are able to enter their desired workout length, the muscle groups that they'd like to work on, and their general
        workout goal. This connects to the backend which creates a custom workout for the user, utilizing both a database of machines
        at the Brown gym as well as a database of free weight exercises, which are accessed through an API call.
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={progress} alt="Photo of BrownFit" />
      <div className="project-description">
        If the user is logged in, they gain access to their progress
        tab. The user's login credentials as well as information regarding their progress is stored
        using Google Firebase. On their progress page, users will be able to see what machines have been 
        generated for them, and they'll also also have the opportunity to add machines to their progress themselves.
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="slide-content">
      <img className="project-photo" src={additional} alt="Photo of BrownFit" />
      <div className="project-description">
        On the additional info page, users can find information about Frequently Asked Questions, as well 
        as a link to a playlist that they can use while in the gym.
      </div>
    </div>
  );
}



function BrownFit() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    1, 2, 3, 4
  ];
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
        <div className="project-title header-item">BrownFit</div>
        <div className="header-info header-item">Co-creator</div>
        <div className="header-info header-item">
          Java, Typescript, React, CSS
        </div>
        <div className="header-info header-item">December 2023</div>
        <div className="header-info header-item">
          <a
            href="https://github.com/cs0320-f23/term-project-jwschwar-amahns-cnevas-ibrauns.git"
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

export default BrownFit;
