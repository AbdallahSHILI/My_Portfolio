import React from "react";
import styles from "../MainStyleProject.module.css";
import gifImageMacIphone from "../../../../Components/Assests/Portfolio_ScreenShot.gif";
import gifImageIphone from "../../../../Components/Assests/Max-width_Portfolio_ScreenShot.gif";

const FirstProject = () => {
  return (
    <div className={styles.gif_container}>
      <img
        src={gifImageMacIphone}
        alt="Screenshot GIF"
        className={styles.full_page_gif}
      />
      <img
        src={gifImageIphone}
        alt="Screenshot GIF"
        className={styles.full_page_gif_max_width}
      />
    </div>
  );
};

export default FirstProject;
