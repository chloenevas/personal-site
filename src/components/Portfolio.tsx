import React from "react";
import "../styles/Portfolio.css";
import BrownFit from "./BrownFit";
import WeensyOS from "./WeensyOS";
import Pacman from "./Pacman";
import BroadbandAccess from "./BroadbandAccess";
import PersonalSite from "./PersonalSite";


import weensyGif from "../assets/weensyTeaser.gif";
import websiteGif from "../assets/website.gif";

function Portfolio() {
  return (
    <div>
      <div className="header">
        <div id="portfolio-title"> Portfolio </div>
        <div className="underline-portfolio"> </div>
      </div>

      <div className="all-projects">
        <div>
          <BrownFit />
        </div>
        <div>
          <WeensyOS />
        </div>
        <div><PersonalSite /> </div>

        <div><Pacman /> </div>
        <div><BroadbandAccess /> </div>
      </div>
    </div>
  );
}

export default Portfolio;
