import React from "react";
import "./mainHome.css"; // Create and link a CSS file for styling
import { PrimaryButton } from "../../../Components/index";

const mainHome = () => {
  return (
    <div className="main_home_container">
      <h3>Transform Ideas into Reality</h3>
      <h1>I create beautiful applications your users will love</h1>
      <PrimaryButton text="Make it happen" />
    </div>
  );
};

export default mainHome;
