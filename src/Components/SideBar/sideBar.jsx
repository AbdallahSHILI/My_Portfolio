import React from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";
import MyPic from "../Assests/My-pic.jpg";
import HomeIcon from "../Assests/Home.svg";
import AboutIcon from "../Assests/About.svg";
import ProjectsIcon from "../Assests/Projects.svg";
import ServicesIcon from "../Assests/Services.svg";
import BlogIcon from "../Assests/Blog.svg";
import HireIcon from "../Assests/hireMe.svg";
import { SocialMedia } from "../index";
import SideBarHeader from "./SideBarHeader/sideBarHeader";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <SideBarHeader toggleSidebar={toggleSidebar} />
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
          <Link to="/Projects">
            <img src={ProjectsIcon} alt="Projects" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/Services">
            <img src={ServicesIcon} alt="Services" /> Services
          </Link>
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
      <SocialMedia className="sidebar-social" />
    </div>
  );
};

export default Sidebar;
