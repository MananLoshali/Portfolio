import React from "react";
import "./about.css";
// import Me from "../../images/me.jpg";
import Me from "../../images/me2.jpg";

const About = () => {
  return (
    <>
      <div className="a_container">
        <div className="a_wrapper">
          <div className="a_left">
            <div className="a-over"></div>
            <img className="a_img" src={Me} alt="" />
          </div>
          <div className="a_right">
            <p className="a_title">About Me</p>
            <p className="a_para">
              I am Manan Loshali, a proud resident of "Devbhoomi" Uttarakhand,
              and I have recently completed my B.Tech in Computer Science
              Engineering from Uttarakhand Technical University. Throughout my
              academic journey, I have been a self-learner, constantly expanding
              my knowledge and skills beyond the classroom.
            </p>
            <br />
            <br />
            <p className="a_para">
              I initially focused on Front-End Web Development, but my passion
              for technology and learning has driven me to broaden my expertise.
              Today, I am a Full Stack Web Developer with hands-on experience in
              both front-end and back-end technologies.
            </p>
          </div>
        </div>
        <div className="a_wrappers">
          <p className="a_title">Internship Experience:</p>
          <h4 className="a_heading">Software Developer Intern</h4>
          <p className="a_paras">
            <p className="title_name">
              75way Technologies Pvt.Ltd. (Mohali) | Jan 2024 - Jul 2024
            </p>
            During my internship at 75way Technologies, I contributed to the
            development and maintenance of two live web applications using
            ReactJS and VueJS, ensuring high performance and responsiveness. I
            implemented robust backend solutions with Node.js and MongoDB,
            enhancing data management and server-side functionality. I also
            utilized Material UI and SCSS to create visually appealing and
            user-friendly interfaces, which significantly improved the overall
            user experience. Additionally, I integrated Next.js to optimize
            application performance and implement server-side rendering,
            resulting in faster load times and improved SEO.
          </p>
          <br />

          <h4 className="a_heading">Software Developer Intern</h4>
          <p className="a_paras">
            <p className="title_name">
              Rohini Tech Media Pvt.Ltd. (Hyderabad) | Dec 2022 – Feb 2023
            </p>
            At Rohini Tech Media, I learned software engineering process
            improvements and best practices. I developed various web pages using
            Next.js and ReactJS, closely collaborating with the UI design team
            to enhance the user interface. Working alongside Senior Engineers, I
            helped build customized software products for consumers. I also had
            the opportunity to attend meetings that delved into emerging
            technologies like Web3, blockchain, and NFTs.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
