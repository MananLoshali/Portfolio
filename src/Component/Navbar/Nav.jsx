import React from "react";
import "./nav.css";
import Logo from "../../images/logo.jpeg";
const Nav = ({ aboutRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    // Check if ref exists before using it
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="n-container">
      <div className="n-left">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="n-right">
        <div className="n-items" onClick={() => scrollToSection(aboutRef)}>
          About
        </div>
        <div className="n-items" onClick={() => scrollToSection(projectsRef)}>
          Projects
        </div>
        <div className="n-items" onClick={() => scrollToSection(contactRef)}>
          Contact
        </div>
      </div>
    </div>
  );
};

export default Nav;
