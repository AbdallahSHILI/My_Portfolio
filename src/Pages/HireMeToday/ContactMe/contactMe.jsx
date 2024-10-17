import React, { useState } from "react";
import "./contactMe.css";
import myPic from "../../../Components/Assests/My-pic.jpg";
import { About, AboutFooter, CopyRight } from "../../index";

const ContactMe = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitch = () => {
    setIsSwitched((prev) => !prev);
  };

  return (
    <div className="contactMe-container">
      <div className={`main-container ${isSwitched ? "switch" : ""}`}>
        <div className="left-container">
          {isSwitched ? (
            <>
              <h1>You are free to write!</h1>
              <p>
                Feel free to express yourself and share your thoughts with me.
                I'm looking forward to hearing from you!
              </p>
              <button className="back-btn" onClick={handleSwitch}>
                ← Go Back
              </button>
            </>
          ) : (
            <>
              <h1>Hello, friend!</h1>
              <p>
                Welcome! I'm glad you're here. Let's connect and collaborate on
                exciting projects!
              </p>
              <button className="contact-btn" onClick={handleSwitch}>
                Contact Me
              </button>
            </>
          )}
        </div>
        <div className="right-container">
          {isSwitched ? (
            <>
              <h1>Let’s get in touch!</h1>
              <input
                type="email"
                placeholder="Your Email"
                className="input-email"
              />
              <textarea
                placeholder="Your Message"
                className="message-textarea"
              ></textarea>
              <button className="send-btn">Send</button>
            </>
          ) : (
            <>
              <img src={myPic} alt="My Picture" className="my-pic" />
              <h1>Full Stack Web Developer</h1>
            </>
          )}
        </div>
      </div>
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default ContactMe;
