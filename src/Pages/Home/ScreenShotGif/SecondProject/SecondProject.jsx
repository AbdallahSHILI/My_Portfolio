import React from "react";
import styles from "../MainStyleProject.module.css";
import gifImageMacIphone from "../../../../Components/Assests/Blank diagram.png";
import gifImageIphone from "../../../../Components/Assests/Firefly 20231202140733.png";

const SecondProject = () => {
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

export default SecondProject;
