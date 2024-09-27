import {useEffect} from "react";
import "../styles/Resume.css";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div></div>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;