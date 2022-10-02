import React from "react";
import Product from "../Product/Product";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <div className="p_container">
        <div className="p_title">
          <h5>HELLO</h5>
          <p className="pi_title">It's Manan :- Go and see my Projects</p>
        </div>
        <div className="p_projects">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Projects;
