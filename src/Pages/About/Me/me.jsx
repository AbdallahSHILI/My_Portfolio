import React from "react";
import styles from "./me.module.css";
import myPic from "../../../Components/Assests/My-pic.jpg"; // Make sure to import your image

const me = () => {
  return (
    <section className={styles.content_section}>
      <img src={myPic} alt="Abdallah Shili" className={styles.profile_pic} />
      <div className={styles.text_content}>
        <p>
          As a dedicated web developer, I specialize in building robust and
          scalable applications using React and Node.js.
          <br /> With a strong foundation in web technologies like MongoDB and
          Next.js, I create solutions that are both efficient and user-friendly.
          <br /> My passion for web development drives me to constantly expand
          my skill set and deliver high-quality work.
          <br /> I'm committed to crafting applications that not only meet
          technical standards but also provide an exceptional user experience.
        </p>
      </div>
    </section>
  );
};

export default me;
