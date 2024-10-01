import React from "react";
import "./navbar.css"; // We'll write CSS separately

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">abdallah</div>
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
      </ul>
    </nav>
  );
};

export default Navbar;
