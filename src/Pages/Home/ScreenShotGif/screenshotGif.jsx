import React from "react";
import ProjectDisplay from "./ProjectDisplay/ProjectDisplay";
import gifImageMacIphone1 from "../../../Components/Assests/Portfolio_ScreenShot.gif";
import gifImageIphone1 from "../../../Components/Assests/Max-width_Portfolio_ScreenShot.gif";
import gifImageMacIphone2 from "../../../Components/Assests/Blank diagram.png";
import gifImageIphone2 from "../../../Components/Assests/Firefly 20231202140733.png";
import gifImageMacIphone3 from "../../../Components/Assests/Hello_Tasty.png";
import gifImageIphone3 from "../../../Components/Assests/Reservé.png";

const ScreenshotGif = ({ activeProject }) => {
  return (
    <>
      {activeProject === "clothing" && (
        <ProjectDisplay
          gifImageMacIphone={gifImageMacIphone1}
          gifImageIphone={gifImageIphone1}
        />
      )}
      {activeProject === "tasty" && (
        <ProjectDisplay
          gifImageMacIphone={gifImageMacIphone2}
          gifImageIphone={gifImageIphone2}
        />
      )}
      {activeProject === "chat" && (
        <ProjectDisplay
          gifImageMacIphone={gifImageMacIphone3}
          gifImageIphone={gifImageIphone3}
        />
      )}
    </>
  );
};

export default ScreenshotGif;
