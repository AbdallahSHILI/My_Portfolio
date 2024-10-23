import React from "react";
import "./screenshotGif.css";
import gifImageMacIphone from "../../../Components/Assests/Portfolio_ScreenShot.gif";
import gifImageIphone from "../../../Components/Assests/Max-width_Portfolio_ScreenShot.gif";

const ScreenshotGif = () => {
  return (
    <div className="gif-container">
      <img
        src={gifImageMacIphone}
        alt="Screenshot GIF"
        className="full-page-gif"
      />
      <img
        src={gifImageIphone}
        alt="Screenshot GIF"
        className="full-page-gif_max-width"
      />
    </div>
  );
};

export default ScreenshotGif;
