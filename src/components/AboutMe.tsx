import {useEffect} from "react";

import "../styles/AboutMe.css";

import photo from "../assets/photo.jpg"

function AboutMe() {

 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
  
  return (
    <div>
      <div id="about-title"> About Me </div>
      <div className="dark-rectangle-about"></div>
      <div className="light-rectangle-about"></div>

      <div className="about-container">
        <img id="photo" src={photo} alt="Photo of Chloe" />

        <div className="circles">
          <div className="text" id="blurb-1">
            I'm from Westport, CT <br />
            and I'm currently a junior at Brown University studying Applied
            Math-Computer Science.
          </div>
          <div className="text" id="blurb-2">
            In my free time, I love <br />
            baking, playing the violin, reading, running, and I recently just
            started <br />
            learning how to make pottery!
          </div>
          <div className=" text" id="blurb-3">
            <br /> <br />
            I absolutely love teaching
            <br /> and helping others learn. At Brown, <br />
            I've been an undergraduate teaching <br />
            assistant for multiple introductory <br />
            CS classes, and I'm currently a head <br />
            teaching assistant for Object Oriented Programming. I was also lucky
            enough to <br />
            spend this past summer as a lead teaching assistant for Girls Who
            Code.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
