import Projects from "./Component/Projects/Projects";
import Navbar from "./Component/Navbar/Nav";
import Intro from "./Component/Introduction/Intro";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Toggle from "./Component/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import Links from "./Component/Links/Links";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        overflow: "hidden",
      }}
    >
      <Toggle />
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Links />
    </div>
  );
}

export default App;
