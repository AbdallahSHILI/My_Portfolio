import React from "react";
import styles from "../MainStyleProject.module.css";
import gifImageMacIphone from "../../../../Components/Assests/Hello_Tasty.png";
import gifImageIphone from "../../../../Components/Assests/Reservé.png";

const ThirdProject = () => {
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

export default ThirdProject;
