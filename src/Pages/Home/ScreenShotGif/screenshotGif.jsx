import React from "react";
import "./screenshotGif.css";
import gifImage from "../../../Components/Assests/Portfolio_ScreenShot.gif"; // Adjust the path based on your file structure

const ScreenshotGif = () => {
  return (
    <div className="gif-container">
      <img src={gifImage} alt="Screenshot GIF" className="full-page-gif" />
    </div>
  );
};

export default ScreenshotGif;
