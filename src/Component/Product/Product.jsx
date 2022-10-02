import React from "react";
import "./product.css";
import Se from "../../images/df.png";

const Product = () => {
  return (
    <>
      <div className="card">
        <div className="upper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="lower">
          <img className="pr_image" src={Se} alt="" />
        </div>
      </div>
    </>
  );
};

export default Product;
