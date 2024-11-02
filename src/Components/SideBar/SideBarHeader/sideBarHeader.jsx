import React from "react";
import { Link } from "react-router-dom";
import Style from "./sideBarHeader.module.css";
import MyPic from "../../Assests/My-pic.jpg";

const SideBarHeader = ({ toggleSidebar }) => {
  return (
    <div className={Style.sidebar_header}>
      <button className={Style.close_btn} onClick={toggleSidebar}>
        X Close Menu
      </button>
      <Link to="/About" className={Style.link_style}>
        <div className={Style.sidebar_profile}>
          <img src={MyPic} className={Style.sidebar_pic} alt="Abdallah Shili" />
          <h2 className={Style.sidebar_name}>Abdallah Shili</h2>
        </div>
      </Link>
    </div>
  );
};

export default SideBarHeader;
