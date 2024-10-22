import React from "react";
import "./home.css";
import {
  AboutFooter,
  CopyRight,
  LevelUp,
  MainHome,
  ScreenshotGif,
} from "../index";
const Home = () => {
  return (
    <div className="home_container">
      <MainHome />
      <ScreenshotGif />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default Home;
