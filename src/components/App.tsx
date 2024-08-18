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

  return (
    <div className="App">
      <div className="Nav-bar">
        <div id="Name-logo" onClick={() => setCurrentPage("Home")}>
          Chloe Nevas
        </div>
        <div
          className={`Nav-bar-item ${currentPage === "Home" ? "Focus" : ""}`}
          onClick={() => setCurrentPage("Home")}
        >
          Home
        </div>
        <div
          className={`Nav-bar-item ${
            currentPage === "About Me" ? "Focus" : ""
          }`}
          onClick={() => setCurrentPage("About Me")}
        >
          About Me
        </div>
        <div
          className={`Nav-bar-item ${
            currentPage === "Portfolio" ? "Focus" : ""
          }`}
          onClick={() => setCurrentPage("Portfolio")}
        >
          Portfolio
        </div>
        <div
          className={`Nav-bar-item ${currentPage === "Resume" ? "Focus" : ""}`}
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
