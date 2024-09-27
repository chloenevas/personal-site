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
        <iframe
          className="iframe"
          src="/resume.pdf"
          width="100%"
          height="800px"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;