import React from "react";
import { useState, useEffect, useRef } from "react";

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

const slides = [
    1, 2, 3, 4, 5
];

const colors = ["#0088FE", "#00C49F", "#FFBB28"];


function BrownFit() {
  const [currentSlide, setCurrentSlide] = useState(1);
//   const slideInterval = useRef<number>(0); // For autoplay

//       useEffect(() => {
//         startAutoplay();
//         return () => stopAutoplay(); // Cleanup on unmount
//       }, []);

//       const startAutoplay = () => {
//         stopAutoplay(); // Clear any existing interval
//         slideInterval.current = window.setInterval(() => {
//           setCurrentSlide((prevSlide) =>
//             prevSlide === 4 ? 0 : prevSlide + 1
//           );
//         }, 7000); // Change the slide every 3 seconds
//       };
    
//     const stopAutoplay = () => {
//       if (slideInterval.current) {
//         clearInterval(slideInterval.current);
//       }
//     };
  const nextSlide = () => {
    currentSlide === 5 ? "" : setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    currentSlide === 1 ? "" : setCurrentSlide(currentSlide - 1);
  };

  const switchSlide = () => {
    switch (currentSlide) {
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
  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title header-item">BrownFit</div>
        <div className="header-info header-item">Co-creator</div>
        <div className="header-info header-item">Typescript, React</div>
        <div className="header-info header-item">December 2023</div>
      </div>
      <div className="inner-project-container">
      {colors.map((color, idx) => (
        <div
          className="project-content"
          style={{ color }}
        ></div>
      ))}
      </div>
      {/* <div className="dot-container">
        <div
          className={`${currentSlide === 1 ? "active-dot" : ""} slide-dot `}
          onClick={() => setCurrentSlide(1)}
        ></div>
        <div
          className={`${currentSlide === 2 ? "active-dot" : ""} slide-dot `}
          onClick={() => setCurrentSlide(2)}
        ></div>
        <div
          className={`${currentSlide === 3 ? "active-dot" : ""} slide-dot `}
          onClick={() => setCurrentSlide(3)}
        ></div>
        <div
          className={`${currentSlide === 4 ? "active-dot" : ""} slide-dot `}
          onClick={() => setCurrentSlide(4)}
        ></div>
        <div
          className={`${currentSlide === 5 ? "active-dot" : ""} slide-dot `}
          onClick={() => setCurrentSlide(5)}
        ></div>
      </div> */}
    </div>
  );
}

export default BrownFit;
