import React, { useState } from "react";
import "./navbar.css";
import MyPic from "../Assests/My-pic.jpg";
import darkLogo from "../Assests/dark mode.jpg";
import Home from "../Assests/Home.svg";
import Menu from "../Assests/Menu.svg";
import CloseIcon from "../Assests/close.svg";
import Projects from "../Assests/Projects.svg";
import About from "../Assests/About.svg";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/sideBar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="top_navbar">
        <Link to="/">
          <div className="logo">
            <img src={MyPic} className="my_pic" alt="Abdallah Shili" />
            <h1 className="my_name">abdallah</h1>
          </div>
        </Link>
        <div className="nav_links">
          <Link to="/About"> About </Link>
          <Link to="/Projects"> Projects </Link>
          <Link to="/HireMe"> Hire Me Today </Link>
          <a href="#cv">My_CV</a>
          <Link to="/Services">Services</Link>
          <a href="#blog">Blog</a>

          <img src={darkLogo} className="darkLogo" alt="dark Logo" />
        </div>
      </nav>

      <nav className="bottom_navbar">
        <Link to="/">
          <div
            onClick={() => handleItemClick("home")}
            className={`bottom_navbar_item ${
              activeItem === "home" ? "active" : ""
            }`}
          >
            <img src={Home} className="mobile_icon" alt="Home" />
            <span className="mobile_text">Home</span>
          </div>
        </Link>
        <Link to="/About">
          <div
            onClick={() => handleItemClick("about")}
            className={`bottom_navbar_item ${
              activeItem === "about" ? "active" : ""
            }`}
          >
            <img src={About} className="mobile_icon" alt="About" />
            <span className="mobile_text">About</span>
          </div>
        </Link>
        <Link to="/Projects">
          <div
            onClick={() => handleItemClick("projects")}
            className={`bottom_navbar_item ${
              activeItem === "projects" ? "active" : ""
            }`}
          >
            <img src={Projects} className="mobile_icon" alt="Projects" />
            <span className="mobile_text">Projects</span>
          </div>
        </Link>
        <div onClick={toggleSidebar}>
          <img
            src={isSidebarOpen ? CloseIcon : Menu}
            className="mobile_icon"
            alt={isSidebarOpen ? "Close" : "Menu"}
          />
          <span className="mobile_text">
            {isSidebarOpen ? "Close" : "Menu"}
          </span>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
