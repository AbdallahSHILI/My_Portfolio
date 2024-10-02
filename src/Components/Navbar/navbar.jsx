import React from "react";
import "./navbar.css";
import MyPic from "../Assests/My-pic.jpg";
import darkLogo from "../Assests/dark mode.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={MyPic} alt="Abdallah Shili" />
        <h1>abdallah</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#cv">My CV</a>
        </li>
        <li>
          <img src={darkLogo} alt="dark mode logo" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;