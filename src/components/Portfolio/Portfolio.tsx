import "../../styles/Portfolio.css";
import WeensyOS from "./WeensyOS";
import Brush from "./Brush";
import PersonalSite from "./PersonalSite";
import BrownFit from "./BrownFit";
import { useEffect } from "react";



function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <div className="header">
        <div id="portfolio-title"> Portfolio </div>
        <div className="underline-portfolio"> </div>
      </div>
      <div className="all-projects">
        <div>
          <Brush />{" "}
        </div>
        <div>
          <PersonalSite />{" "}
        </div>
        <div>
          <WeensyOS />
        </div>
        <div>
          <BrownFit />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
