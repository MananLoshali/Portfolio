import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./links.css";
const Links = () => {
  return (
    <>
      <div className="l-main">
        <a href="https://in.linkedin.com/in/manan-loshali-5941bb232?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww.google.com%2F">
          {" "}
          <LinkedIn className="icon" />
        </a>
        <a href="https://github.com/MananLoshali">
          {" "}
          <GitHub className="icon" />{" "}
        </a>
      </div>
      <div className="copyright">© All Rights Reserved @Manan Loshali</div>
    </>
  );
};

export default Links;
