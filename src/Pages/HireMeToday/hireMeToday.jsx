import React from "react";
import "./hireMeToday.css"; // Importing the CSS file
import { AboutFooter, CopyRight } from "../index";
import { Link } from "react-router-dom";

const HireMeToday = () => {
  return (
    <div className="hire-me-today-container">
      <div className="hire-container">
        <h1 className="hire-title">
          Get efficient web apps built with modern technologies and a passion
          for web development.
        </h1>
        <p className="hire-description">
          I'm Abdallah Shili, a web developer with a strong background in
          building scalable and efficient web applications using Node.js,
          MongoDB, and React.js. I take pride in delivering high-quality work,
          leveraging my time management skills and focus to meet your business
          goals. Whether you need a powerful web app or a fast, dynamic
          solution, I’m here to help you create an online presence that truly
          works for you. Let me bring my expertise to your project and help you
          grow your business with a web app designed to thrive.
        </p>
        <Link to="/HireMe/Contact">
          <button className="hire-button">Hire Abdallah Today</button>
        </Link>
      </div>
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default HireMeToday;
