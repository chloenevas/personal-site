import React from "react";
import { useState, useEffect } from "react";

import Home from "./Home";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import logo from "../assets/logo.png";

import "../styles/App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const switchPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Portfolio":
        return <Portfolio />;
      // case "Resume":
      //   return <Resume />;
      case "About Me":
        return <AboutMe />;
    }
  };

    // useEffect(() => {
    //   if (
    //     currentPage === "Portfolio" ||
    //     currentPage === "Home" ||
    //     currentPage === "About Me" ||
    //      currentPage === "Resume"
    //   ) {
    //     document.body.classList.add("scroll");
    //   } else {
    //     document.body.classList.remove("scroll");
    //   }
    // }, [currentPage]);
  
  return (
    <div className={`App`}>
      <div
        className={`${
          currentPage === "Resume" || currentPage === "Portfolio"
            ? "top-opaque"
            : ""
        } top-constants `}
      >
        <div onClick={() => setCurrentPage("Home")}>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="nav-bar">
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
          {/* <div
            className={`${
              currentPage === "Resume" ? "Focus" : ""
            } Nav-bar-item `}
            // onClick={() => setCurrentPage("Resume")}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Resume
            </a>
          </div> */}
        </div>
      </div>
      <div>{switchPage()}</div>
    </div>
  );
}

export default App;
