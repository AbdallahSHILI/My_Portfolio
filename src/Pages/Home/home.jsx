import React, { useState } from "react";
import "./home.css";
import {
  AboutFooter,
  CopyRight,
  LevelUp,
  MainHome,
  LetsAddBook,
  ScreenshotGif,
  HomeServices,
  ProjectList,
} from "../index";

const Home = () => {
  //for the maage of project so the first project is active when the page is loaded
  const [activeProject, setActiveProject] = useState("clothing");

  //function to handle the project click so the gif will change when the project is clicked
  const handleProjectClick = (projectName) => {
    setActiveProject(projectName);
  };

  return (
    <div className="home_container">
      <MainHome />
      <ScreenshotGif activeProject={activeProject} />
      <ProjectList onProjectClick={handleProjectClick} />
      <HomeServices />
      <LetsAddBook />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default Home;
