import React, { useRef, useContext } from "react";
import Projects from "./Component/Projects/Projects";
import Navbar from "./Component/Navbar/Nav";
import Intro from "./Component/Introduction/Intro";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Toggle from "./Component/Toggle/Toggle";
import Links from "./Component/Links/Links";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Create refs for each section
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        overflow: "hidden",
      }}
    >
      <Toggle />
      {/* Pass the refs to Navbar */}
      <Navbar
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Intro />
      {/* Attach the refs to the corresponding sections */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Links />
    </div>
  );
}

export default App;
