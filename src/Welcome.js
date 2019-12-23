import React from "react";
import "./Welcome.scss";
import face from "./assets/face.png";
import github from "./assets/github.svg";
import email from "./assets/email.svg";
import resumeIcon from "./assets/resume.svg";
import resume from "./assets/resume.pdf";

export default function Welcome() {
  return (
    <div className="Welcome">
      <div className="hello">Hi, I'm</div>
      <div className="name-container">
        <div className="name-main">
          <div className="name">Jonathan Munz</div>
          <div className="icons">
            <a href="https://github.com/jpmunz" title="github">
              <img src={github} alt="github" />
            </a>
            <a href="mailto:jon@jpmunz.com" title="e-mail">
              <img src={email} alt="email" />
            </a>
            <a href={resume} title="resume">
              <img src={resumeIcon} alt="resume" />
            </a>
          </div>
        </div>
        <img className="face" src={face} alt="" />
      </div>
      <div className="blurb">
        I am a full stack software developer living and working in{" "}
        <span className="canada">Ontario, Canada</span>
      </div>
      <div className="calls-to-action">
        <a
          href="mailto:jon@jpmunz.com"
          className="btn btn-primary"
          role="button"
        >
          Get in Contact
        </a>
        <a href="#projects" className="btn btn-outline-primary">
          More About Me
        </a>
      </div>
    </div>
  );
}
