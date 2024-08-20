import React from "react";
import "../styles/Portfolio.css"
import BrownFit from "./BrownFit";


import weensyGif from "../assets/weensyTeaser.gif"
import pacmanGif from "../assets/pacman.gif";
import websiteGif from "../assets/website.gif";

function Portfolio() {
  return (
    <div>
      <div className="header">
        <div id="portfolio-title"> Portfolio </div>
        <div className="underline-portfolio"> </div>
      </div>

      <div className="all-projects">
        <div><BrownFit /></div>
        <div className="project">
          <div className="project-header">
            <div className="project-title header-item">WeensyOS</div>
            <div className="header-info header-item">Creator</div>
            <div className="header-info header-item">C++</div>
            <div className="header-info header-item">March 2024</div>
          </div>{" "}
          <div className="project-content">
            <img
              src={weensyGif}
              alt="WeensyOS Gif"
              className="project-photo" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about weensy and how it's a mini operating system that can
              fork and exec
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-header">
            <div className="project-title header-item">Pac-Man</div>
            <div className="header-info header-item">Creator</div>
            <div className="header-info header-item">Java</div>
            <div className="header-info header-item">
              November-December 2022
            </div>
          </div>{" "}
          <div className="project-content">
            <img
              src={pacmanGif}
              alt="Pac-Man Gif"
              className="pacman" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about pacman and how it uses bfs for the ghosts and talk
              about it a little more too some more spaaaaace
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-title">Broadband Access Info System</div>
          <div className="project-content">
            <img
              src={weensyGif}
              alt="Broadband Access Info System Image"
              className="project-photo" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about weensy and how it's a mini operating system that can
              fork and exec
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-header">
            <div className="project-title header-item">My Personal Website!</div>
            <div className="header-info header-item">Crreator</div>
            <div className="header-info header-item">Typescript, CSS</div>
            <div className="header-info header-item">December 2023</div>
          </div>{" "}
          <div className="project-content">
            <img
              src={websiteGif}
              alt="Personal Website Gif"
              className="project-photo" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about my little website that i made! and i'll taalk some
              moreeee and some more and blah blah
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;