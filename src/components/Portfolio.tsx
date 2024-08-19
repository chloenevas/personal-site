import React from "react";
import "../styles/Portfolio.css"

import brownFit from "../assets/brownFit.jpg"
import weensyGif from "../assets/weensyTeaser.gif"
import pacmanGif from "../assets/pacman.gif";
import websiteGif from "../assets/website.gif";

function Portfolio() {
  return (
    <div>
      <div className="header">
        <div id="portfolio-title"> Portfolio </div>
        {/* <div className="underline-portfolio"> </div> */}
      </div>

      <div className="projects-container">
        <div className="project">
          <div className="project-title">BrownFit</div>
          <div className="project-content">
            <img
              className="project-photo"
              src={brownFit}
              alt="Photo of BrownFit"
            />
            <div className="project-description">
              Co-created a web app that allows users to generate customized
              workouts by entering preferred workout duration, targeted muscle
              groups, and fitness goals.
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-title">WeensyOS</div>
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
          <div className="project-title">Pac-Man</div>
          <div className="project-content">
            <img
              src={pacmanGif}
              alt="Pac-Man Gif"
              className="pacman" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about pacman and how it uses bfs for the ghosts 
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
          <div className="project-title">My Personal Website!</div>
          <div className="project-content">
            <img
              src={websiteGif}
              alt="Personal Website Gif"
              className="project-photo" // Optional styling to fit the container
            />
            <div className="project-description">
              Talk about my little website that i made!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;