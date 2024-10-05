import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import MyPic from "../Assests/My-pic.jpg";
import GitHubIcon from "../Assests/github.svg";
import LinkedInIcon from "../Assests/linkedIn.svg";
import TwitterIcon from "../Assests/twitter.svg";
import InstagramIcon from "../Assests/instagram.svg";
import HomeIcon from "../Assests/Home.svg";
import AboutIcon from "../Assests/About.svg";
import ProjectsIcon from "../Assests/Projects.svg";
import ServicesIcon from "../Assests/Services.svg";
import BlogIcon from "../Assests/Blog.svg";
import HireIcon from "../Assests/hireMe.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>
          X
        </button>
        <div className="sidebar-profile">
          <img src={MyPic} className="sidebar-pic" alt="Abdallah Shili" />
          <h2 className="sidebar-name">abdallah</h2>
        </div>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/">
            <img src={HomeIcon} alt="Home" /> Home
          </Link>
        </li>
        <li>
          <Link to="/About">
            <img src={AboutIcon} alt="About" /> About
          </Link>
        </li>
        <li>
          <a href="#projects">
            <img src={ProjectsIcon} alt="Projects" /> Projects
          </a>
        </li>
        <li>
          <a href="#services">
            <img src={ServicesIcon} alt="Services" /> Services
          </a>
        </li>
        <li>
          <a href="#blog">
            <img src={BlogIcon} alt="Blog" /> Blog
          </a>
        </li>
        <li>
          <a href="#hire">
            <img src={HireIcon} alt="Hire Me" /> Hire Me Today
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
  );
};

export default Sidebar;
