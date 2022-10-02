import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="n-container">
        <div className="n-left"></div>
        <div className="n-right">
          <div className="n-items">Home</div>
          <div className="n-items">About</div>
          <div className="n-items">Projects</div>
          <div className="n-items">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
