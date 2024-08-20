import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <div>
      <div></div>
      <div>
        <iframe
          className="iframe"
          src="/chloe-nevas-resumepdf.pdf"
          width="100%"
          height="800px"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;