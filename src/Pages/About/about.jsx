import React from "react";
import "./about.css"; // Create a CSS file for styling
import myPic from "../../Components/Assests/My-pic.jpg";
import { AboutFooter, CopyRight, LevelUp, MyStory } from "../index";

const About = () => {
  return (
    <div className="about-page">
      <section className="full-page-section">
        <h2>Hi there!</h2>
        <br />
        <h1> I'm Abdallah Shili</h1>
      </section>

      <section className="content-section">
        <img src={myPic} alt="Abdallah Shili" className="profile_pic_aboutMe" />
        <div className="text-content">
          <p>
            As a dedicated web developer, I specialize in building robust and
            scalable applications using React and Node.js.
            <br /> With a strong foundation in web technologies like MongoDB and
            Next.js, I create solutions that are both efficient and
            user-friendly.
            <br /> My passion for web development drives me to constantly expand
            my skill set and deliver high-quality work.
            <br /> I'm committed to crafting applications that not only meet
            technical standards but also provide an exceptional user experience.
          </p>
        </div>
      </section>

      <MyStory />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default About;
