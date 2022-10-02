import React from "react";
import "./about.css";
import Me from "../../images/me.jpg";

const About = () => {
  return (
    <>
      <div className="a_container">
        <div className="a_left">
          <div className="a-over"></div>
          <img className="a_img" src={Me} alt="" />
        </div>
        <div className="a_right">
          <p className="a_title">About Me</p>
          <p className="a_para">
            I am Manan Loshali a resident of "Devbhoomi" Uttarakhand. I am
            currently pursuing my Btech from Uttarakhand Technical University.
            My department is Computer Science Engineering. I am a self learner.
            I am currently working on Front-End Web Development but I am not
            limited to this only and I want to expand my knowledge. I want to
            become a Full Stack Web Developer. My skills and other information
            about my projects are available in my resume.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
