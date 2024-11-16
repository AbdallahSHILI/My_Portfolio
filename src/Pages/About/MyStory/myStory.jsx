import React from "react";
import styles from "./myStory.module.css";
import myPic from "../../../Components/Assests/My_story_Pic.jpg";
import AllScreens from "../../../Components/Assests/all_Scr_Shot.jpg";

const MyStory = () => {
  return (
    <section className={`${styles.content_section}`}>
      <div className={styles.text_content}>
        <h2>My Story</h2>
        <p>
          From an early age, I was drawn to the world of technology.
          <br /> My passion for web development began during a university
          project in 2022, where I developed the backend of a web application
          for package transfers, even though it wasn’t my original field of
          study. <br />
          That experience sparked my curiosity and led me on a self-learning
          journey, immersing myself in technologies like Node.js, MongoDB, and
          React.js, which now define my work. <br />I enjoy building scalable,
          robust applications, and the dynamic nature of web development
          constantly motivates me to keep learning. Currently, I am exploring
          Next.js, a rapidly evolving framework that excites me with its
          potential. <br /> I also have a strong desire to learn other languages
          and frameworks, such as Angular and PHP, to further broaden my skill
          set and stay ahead of web development innovations. <br />
          Strong time management, focus, and passion for my work enable me to
          consistently deliver high-quality solutions efficiently.
        </p>
      </div>
      <div className={styles.image_container}>
        <img src={myPic} alt="Abdallah Shili" className={styles.profile_pic} />
        <img
          src={AllScreens}
          alt="Project Screens"
          className={styles.project_screens}
        />
      </div>
    </section>
  );
};

export default MyStory;
