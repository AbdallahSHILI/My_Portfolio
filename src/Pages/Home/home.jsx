import React from "react";
import "./home.css";
import {
  AboutFooter,
  CopyRight,
  LevelUp,
  MainHome,
  ScreenshotGif,
  Services,
} from "../index";
const Home = () => {
  return (
    <div className="home_container">
      <MainHome />
      <ScreenshotGif />
      <Services/>
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default Home;
