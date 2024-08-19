import React from "react";
import {useState } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import AboutMe from "./AboutMe";

import "../styles/App.css";


function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const switchPage = () => {
    switch (currentPage) {
    case "Home":
      return <Home />;
    case "Portfolio":
      return <Portfolio />;
    case "Resume":
      return <Resume />;
    case "About Me":
      return <AboutMe />;
    } 
  }

  // const checkScroll = () => {
  //   return currentPage === "About Me" ?  document.body.classList.add("no-scroll") : ""
  // };

  // document.body.classList.add("no-scroll");

  return (
    <div className={`App`}>
      <div className="Nav-bar">
        <div id="Name-logo" onClick={() => setCurrentPage("Home")}>
          Chloe Nevas
        </div>
        <div
          className={`${currentPage === "Home" ? "Focus" : ""} Nav-bar-item `}
          onClick={() => setCurrentPage("Home")}
        >
          Home
        </div>
        <div
          className={`  ${
            currentPage === "About Me" ? "Focus" : ""
          } Nav-bar-item`}
          onClick={() => setCurrentPage("About Me")}
        >
          About Me
        </div>
        <div
          className={`${
            currentPage === "Portfolio" ? "Focus" : ""
          } Nav-bar-item `}
          onClick={() => setCurrentPage("Portfolio")}
        >
          Portfolio
        </div>
        <div
          className={`${currentPage === "Resume" ? "Focus" : ""} Nav-bar-item `}
          onClick={() => setCurrentPage("Resume")}
        >
          Resume
        </div>
      </div>
      <div>{switchPage()}</div>
    </div>
  );
}

export default App;
