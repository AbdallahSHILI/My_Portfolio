import React from "react";
import "./navbar.css";
import MyPic from "../Assests/My-pic.jpg";
import darkLogo from "../Assests/dark mode.jpg";
import Home from "../Assests/Home.svg";
import Menu from "../Assests/Menu.svg";
import Projects from "../Assests/Projects.svg";
import About from "../Assests/About.svg";

const Navbar = () => {
  return (
    <>
      <nav class="top_navbar">
        <div class="logo">
          <img src={MyPic} className="my_pic" alt="Abdallah Shili" />
          <h1 className="my_name">abdallah</h1>
        </div>
        <div class="nav_links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#cv">My_CV</a>
          <img src={darkLogo} className="darkLogo" alt="dark Logo" />
        </div>
      </nav>

      <nav class="bottom_navbar">
        <div>
          <img src={Home} className="mobile_icon" alt="Home" />
          <span className="mobile_text">Home</span>
        </div>
        <div>
          <img src={About} className="mobile_icon" alt="About" />
          <span className="mobile_text">About</span>
        </div>
        <div>
          <img src={Projects} className="mobile_icon" alt="Projects" />
          <span className="mobile_text">Projects</span>
        </div>
        <div>
          <img src={Menu} className="mobile_icon" alt="Menu" />
          <span className="mobile_text">Menu</span>
        </div>
      </nav>

      {/* <nav className="navbar">
        <div className="logo"></div>
        <div>
          <a href="#about">About</a>
         
        </div>
        <div>
          <a href="#projects">Projects</a>
          <img src={Projects} className="mobile-icon" alt="Projects" />
        </div>
        <div>
          <a href="#services">Services</a>
        </div>
        <ul className="nav-links">
          <div>
            <li></li>
          </div>
          <div>
            <li></li>
          </div>
          <div>
            <li></li>
          </div>
          <li>
            <a href="#blog">Blog</a>
            <img src={Menu} className="mobile-icon" alt="Menu" />
          </li>
          <li>
            <a href="#cv">My CV</a>
          </li>
          <li>
            <img src={darkLogo} className="darkMode" alt="dark mode logo" />
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default Navbar;
