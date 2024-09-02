import React from "react";
import Product from "../Product/Product";
import "./projects.css";
import Se from "../../images/df.png";
import Chat from "../../images/chat.png";
import Expense from "../../images/tracker.png";
import Todo from "../../images/todo.png";
import Translator from "../../images/translator.png";
import Editor from "../../images/text_editor.png";
import Weather from "../../images/weather.png";
import Words from "../../images/words.png";
import Landing from "../../images/landingPage.png";

const Projects = () => {
  return (
    <>
      <div className="p_container">
        <div className="p_title">
          <h5>HELLO</h5>
          <p className="pi_title">It's Manan :- Go and see my Projects</p>
        </div>
        <div className="p_projects">
          <Product image={Se} link={"https://dholakpur-1257c.web.app/"} />
          <Product image={Chat} link={"https://samvadhub.vercel.app/"} />
          <Product image={Expense} link={"https://github.com/MananLoshali"} />
          <Product image={Todo} link={"https://github.com/MananLoshali"} />
          <Product image={Words} link={"https://github.com/MananLoshali"} />
          <Product image={Weather} link={"https://github.com/MananLoshali"} />
          <Product
            image={Translator}
            link={"https://github.com/MananLoshali"}
          />
          <Product image={Editor} link={"https://github.com/MananLoshali"} />
          <Product image={Landing} link={"https://github.com/MananLoshali"} />
        </div>
      </div>
    </>
  );
};

export default Projects;
