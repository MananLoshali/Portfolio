import React from "react";
import "./intro.css";
import Me from "../../images/me2.jpg";
import styled, { css } from "styled-components";

const arr = [
  "Web Developer",
  "UI/UX Designer",
  "Teacher",
  "fullstack Developer",
  "Android developer",
  "Anchor",
  "Singer",
  "Reader",
  "Learner",
  "Student",
];

let size = arr.length;

function createCSS() {
  let styles = "";

  for (let i = 1; i < size; i++) {
    styles += `

  @keyframes move{
    
    ${(100 / (size - 1)) * i}%{
        transform: translateY(${-50 * i}px);
    }
  }
  `;
  }

  return css`
    ${styles}
  `;
}

const TitleWrapper = styled.div`
  height: 100%;
  animation: move 20s ease-in-out infinite alternate;
  ${createCSS()};
`;

const Intro = () => {
  return (
    <>
      <div className="i-outer">
        <div className="i-left">
          <div className="i-content">
            <h2>Hello, My name is </h2>
            <h1>Manan Loshali </h1>
            <div className="i-title">
              {/* <div
                className="title-wrapper"
                style={{
                  animation: "move 20s  infinite alternate",
                }}
              >
                <div className="title-item">Web Developer</div>
                <div className="title-item">UI/UX Designer</div>
                <div className="title-item">Teacher</div>
                <div className="title-item">Photographer</div>
                <div className="title-item">Content Writer</div>
                <div className="title-item">Full stack Developer</div>
                <div className="title-item">Designer</div>
                <div className="title-item">writer</div>
                <div className="title-item">anchor</div>
                <div className="title-item">singer</div>
                 {arr.map((i) => (
                  <div className="title-item">{i}</div>
                ))} 
              </div> */}

              <TitleWrapper>
                {arr.map((i) => (
                  <div className="title-item">{i}</div>
                ))}
              </TitleWrapper>
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
