import React, { useRef, useState } from "react";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qiznoss",
        "template_044664g",
        formRef.current,
        "FeVrmWryHXmDy_Jjz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log("error.text");

          setTimeout(() => {
            document.querySelector(".c-para").textContent =
              "Something went wrong!!! try again";
          }, 1000);
          setTimeout(() => {
            document.querySelector(".c-para").textContent = "";
          }, 6000);
        }
      );
    document.querySelector(".c-text").value = "";
    document.querySelector(".c-name").value = "";
    document.querySelector(".c-subject").value = "";
    document.querySelector(".c-email").value = "";
  };

  return (
    <div className="c-main">
      <div className="c-left">
        <h1 className="c-heading">Let's discuss your project</h1>

        <div className="c-address">
          <div className="c-wrapper">
            <img className="cc-image" src={Phone} alt="" />
            <span>+91 7409189936</span>
          </div>
          <div className="c-wrapper">
            <img className="cc-image" src={Email} alt="" />
            <span>loshalimanan@gmail.com</span>
          </div>
          <div className="c-wrapper">
            <img className="cc-image" src={Address} alt="" />
            <span>Haldwani, Uttarakhand, India</span>
          </div>
        </div>
      </div>
      <div className="c-right">
        <div className="c-ques">
          <h1 className="bold">What's your story?</h1>Get in touch. Looking for
          an opportunity to join a company as software developer. Also available
          for freelancing if right project comes along me.
        </div>
        <div className="c-input">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="c-name"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
            <input
              className="c-subject"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="c-email"
              type="text"
              name="user_email"
              placeholder="Your Email"
            />
            <textarea
              className="c-text"
              name="message"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button type="submit">Submit</button>
            {done && "Thank You"}
          </form>
        </div>
        <p className="c-para"></p>
      </div>
    </div>
  );
};

export default Contact;
