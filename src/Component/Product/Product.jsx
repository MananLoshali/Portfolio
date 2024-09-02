import React from "react";
import "./product.css";

const Product = (props) => {
  const { image, link } = props;
  return (
    <>
      <a href={link} target="_blank" className="card">
        <div className="upper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="lower">
          <img className="pr_image" src={image} alt="" />
        </div>
      </a>
    </>
  );
};

export default Product;
