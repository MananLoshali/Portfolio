import React from "react";
import "./intro.css";
import Me from "../../images/me2.jpg";
import styled, { css } from "styled-components";

const arr = [
  "Front-End Developer",
  "Back-End Developer",
  "Fullstack Developer",
  "API Developer",
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
              Hello World, I'm Manan Loshali, a Full-Stack Web Developer with a
              passion for creating interactive and dynamic web applications. I
              specialize in building robust and scalable applications using the
              MERN stack (MongoDB, Express.js, React, Node.js). I focus on
              crafting clean, efficient code and ensuring that both the
              front-end and back-end work seamlessly together. I've worked on a
              range of awesome projects, including developing APIs and user
              interfaces with React. I'm always eager to learn new technologies
              and implement them in innovative ways.
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
