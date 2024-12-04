import React from "react";
import "./screenshotGif.css";
import FirstProject from "./FirstProject/FirstProject";
import SecondProject from "./SecondProject/SecondProject";
import ThirdProject from "./ThirdProject/ThirdProject";

const ScreenshotGif = ({ activeProject }) => {
  return (
    <>
      {/* condition to render the correct gif based on the active project 
       clothing, tasty, chat are set in the projectList component*/}
      {activeProject === "clothing" && <FirstProject />}
      {activeProject === "tasty" && <SecondProject />}
      {activeProject === "chat" && <ThirdProject />}
    </>
  );
};

export default ScreenshotGif;
