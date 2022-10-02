import React from "react";
import "./intro.css";
import Me from "../../images/me2.jpg";

const Intro = () => {
  return (
    <>
      <div className="i-outer">
        <div className="i-left">
          <div className="i-content">
            <h2>Hello, My name is </h2>
            <h1>Manan Loshali </h1>
            <div className="i-title">
              <div className="title-wrapper">
                <div className="title-item">Web Developer</div>
                <div className="title-item">UI/UX Designer</div>
                <div className="title-item">Teacher</div>
                <div className="title-item">Photographer</div>
                <div className="title-item">Content Writer</div>
              </div>
            </div>
            <p className="i-para">
              Hello World, I'm Manan Loshali, a Front-End Web Developer. I am
              passonate about creating interactive web applications. I like to
              make good-looking and responsive UI's. I love to add animation on
              the web pages so that it can become more attractive. I have
              created some awseome projects also. I want to learn new
              technologies and implement it.
            </p>
          </div>
        </div>
        <div className="i-right">
          <img className="i-image" src={Me} alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
