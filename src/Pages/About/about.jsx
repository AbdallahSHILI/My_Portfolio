import React from "react";
import "./about.css"; // Create a CSS file for styling
import { AboutFooter, CopyRight, LevelUp, Me, MyStory } from "../index";

const About = () => {
  return (
    <div className="about-page">
      <section className="full-page-section">
        <h2>Hi there!</h2>
        <br />
        <h1> I'm Abdallah Shili</h1>
      </section>
      <Me />
      <MyStory />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default About;
