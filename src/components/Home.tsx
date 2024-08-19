import React from "react";
import "../styles/Home.css";
import linkedin from "../assets/linkedin.png"
import mail from "../assets/mail.png";

function Home() {
  return (
    <div className="home-container">
      <div className="dark-rectangle-home"></div>
      <div className="light-rectangle-home"></div>

      <div id="hi-text">Hi,</div>
      <div id="name-text">I'm Chloe!</div>
      <div id="description">programmer, student, teacher</div>
      <div className="contact-container">
        <a
          className="contact"
          href="https://www.linkedin.com/in/chloe-nevas/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img className="photo" src={linkedin} alt="Linkedin logo" />
          <div className="contact-item">Chloe Nevas</div>
        </a>

        <a
          className="contact"
          href="mailto:chloe_nevas@brown.edu"
          style={{ textDecoration: "none" }}
        >
          <img className="photo" src={mail} alt="Linkedin logo" />
          <div className="contact-item">chloe_nevas@brown.edu</div>
        </a>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
    </div>
  );
}

export default Home;