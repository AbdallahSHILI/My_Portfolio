import React from "react";
import "./about.css"; // Create a CSS file for styling
import myPic from "../../Components/Assests/My-pic.jpg";
import { LevelUp } from "..";

const About = () => {
  return (
    <div className="about-page">
      <section className="full-page-section">
        <h2>Hi there!</h2>
        <br />
        <h1> I'm Abdallah Shili</h1>
      </section>

      <section className="content-section">
        <img src={myPic} alt="Abdallah Shili" className="profile-pic left" />
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

      <section className="content-section reverse">
        <div className="text-content">
          <h2>My Story</h2>
          <p>
            I've always loved technology. From a young age, technology has
            interested me. Most children play video games of some kind, from
            Tetris to Spyro, Crash Bandicoot to Final Fantasy, I loved playing
            with computers, but my interest didn't stop just at entertainment.
            <br />
            The more I played, the more I wanted to understand how things
            worked. If something broke, I would take it apart and figure out
            what had gone wrong, trying to get it back to normal.
            <br />
            I remember taking apart my computer when I was 12, an event which
            horrified my parents.
            <br />
            I still build my own computers.
            <br />
            Now I focus on people and learning how they interact with websites,
            making sure they can achieve their goals leaving them satisfied and
            more likely to return as customers.
          </p>
        </div>
        <img
          src="/path-to-your-image-2.jpg"
          alt="Abdallah Shili"
          className="profile-pic right"
        />
      </section>
      <LevelUp />
    </div>
  );
};

export default About;
