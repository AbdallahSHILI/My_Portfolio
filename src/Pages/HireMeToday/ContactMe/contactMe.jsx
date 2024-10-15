import React, { useState } from "react";
import "./contactMe.css";
import myPic from "../../../Components/Assests/My-pic.jpg";
import { AboutFooter, CopyRight } from "../../index";

const ContactMe = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false);

  const handleContactClick = () => {
    setContactFormVisible(true);
  };

  const handleSendClick = () => {
    // Logic to send the email (you can handle this with an API or other service)
    alert("Message sent!");
  };

  return (
    <div className="contact-page">
      <div
        className={`contact-container ${
          contactFormVisible ? "form-visible" : ""
        }`}
      >
        <div className="contact-left">
          {!contactFormVisible ? (
            <>
              <h1>Hello, Friend!</h1>
              <p>
                Welcome! I'm glad you're here. Let's connect and collaborate on
                exciting projects!
              </p>
              <button className="contact-button" onClick={handleContactClick}>
                Contact Me
              </button>
            </>
          ) : (
            <>
              <h1>Let’s get in touch!</h1>
              <input
                type="email"
                placeholder="Your email"
                className="email-input"
              />
              <textarea
                placeholder="What do you need?"
                className="message-input"
              ></textarea>
              <button className="send-button" onClick={handleSendClick}>
                Send
              </button>
            </>
          )}
        </div>
        <div className="contact-right">
          <img
            src={myPic}
            alt="Abdallah Shili"
            className="profile_pic_aboutMe"
          />
          <h2>Abdallah Shili</h2>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default ContactMe;
