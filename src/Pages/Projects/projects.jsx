import React from "react";
import "./projects.css"; // Create a CSS file for styling
import { AboutFooter, CopyRight, LevelUp } from "..";

const projects = () => {
  return (
    <div className="projects-page">
      <section className="full-page-section">
        <h1> Projects</h1>
      </section>
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default projects;
