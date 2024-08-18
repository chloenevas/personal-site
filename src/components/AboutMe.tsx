import React from "react";
import "../styles/AboutMe.css";

import photo from "../assets/photo.jpg"

function AboutMe() {
  return (
    <div>
      <div id="title"> Cutesy Little Title </div>
      <div className="container">
            <div className="text upper-left">
              Here I'll write about where I grew up and ill say a few things
              about it not too much just a little like prob this much
            </div>
            <div className="text lower-left">
              Here I'll talk about school and what im doing there and how it's
              all going. Ill prob talk about TAing and how much I love teaching.
              will prob talk about GWC as well
            </div>
          <img id="photo" src={photo} alt="Photo of Chloe" />
            <div className=" text upper-right">
              Here I'll talk about my hobbies and interests! Things such as...
              violin, music, baking, reading, pottery!, running
            </div>
            <div className="text lower-right">
              guess i gotta figure out something else to talk about in this
              section here
            </div>
        </div>
      </div>
  );
}

export default AboutMe;
