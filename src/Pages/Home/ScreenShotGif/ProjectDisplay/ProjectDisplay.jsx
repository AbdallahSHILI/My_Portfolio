import React from "react";
import styles from "./ProjectDisplay.module.css";

const ProjectDisplay = ({ gifImageMacIphone, gifImageIphone }) => {
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

export default ProjectDisplay;
