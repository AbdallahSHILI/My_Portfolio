import React from "react";
import myPic from "../../../Components/Assests/My-pic.jpg"; // Update with the correct path to your image
import "./aboutFooter.css"; // Link to your CSS file
import GitHubIcon from "../../../Components/Assests/github.svg";
import LinkedInIcon from "../../../Components/Assests/linkedIn.svg";
import TwitterIcon from "../../../Components/Assests/twitter.svg";
import InstagramIcon from "../../../Components/Assests/instagram.svg";

const AboutFooter = () => {
  return (
    <footer className="footer-container">
      {/* Left side: Photo, name, description, social media logos */}
      <div className="footer-left">
        <img src={myPic} alt="Abdallah Shili" className="profile-pic" />
        <h3>Abdallah Shili</h3>
        <p>
          I create beautiful websites your users will love. I work with you from
          start to finish to make sure your goals are reached and your users are
          happy.
        </p>
        <div className="social_icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Right side: Quick Links */}
      <div className="footer-right">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default AboutFooter;
