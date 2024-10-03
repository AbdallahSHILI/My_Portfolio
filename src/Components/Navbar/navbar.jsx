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
          <div class="dark-mode-icon">Dark Mode</div>
        </div>
      </nav>
      {/* <nav class="bottom_navbar">
        <div class="icon">Home</div>
        <div class="icon">About</div>
        <div class="icon">Projects</div>
        <div class="icon">Menu</div>
      </nav> */}
      /
    </>
  );
};

export default Navbar;
