import React from "react";
import "./mainService.css"; // Create and link a CSS file for styling
import { PrimaryButton } from "../../../Components/index";

const MainService = () => {
  return (
    <div className="main_service_container">
      <h1>I provide everything you need for your perfect web application</h1>
      <PrimaryButton text="Get Started" />
    </div>
  );
};

export default MainService;
