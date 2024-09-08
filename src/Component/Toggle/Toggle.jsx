import React, { useContext, useEffect, useState } from "react";
import "./toggle.css";
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Moon} alt="" className="t-icon" />
      <img src={Sun} alt="" className="t-icon" />

      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? (isSmallScreen ? 4 : 0) : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
