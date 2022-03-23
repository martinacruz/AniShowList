import React from "react";
import "../styles/About.css";
import gif from "../assets/about-gif.gif";

const About = () => {
  return (
    <div className="about-content">
      <img src={gif} />
      <div className="about-info">
        <p>
          This website was made Martin Cruz as a solo project.
          <br /> My goal was to take a team project made during my bootcamp and
          redesign the front end. You can find the original repo{" "}
          <a
            href="https://github.com/trefynwynd/AniShowList-frontend"
            target="_blank"
          >
            here
          </a>{" "}
          and credit to the team members. Some components from the original repo
          were reused.
          <br /> The design of the page was a complete attempt at cloning a
          similar website created by{" "}
          <a href="https://animedia.netlify.app/" target="_blank">
            Vitor Trimer
          </a>
          <br /> This project uses the{" "}
          <a href="https://jikan.moe/" target="_blank">
            Jikan
          </a>{" "}
          free API{" "}
        </p>
      </div>
      <div className="links">
        <h3>Lets connect:</h3>
        <p>
          <a href="https://www.linkedin.com/in/martincrz/">Linkedin </a> |
          <a href="https://martinc.dev/">Portfolio </a> |
          <a href="https://github.com/martinacruz">Github</a>
        </p>
      </div>
    </div>
  );
};

export default About;
