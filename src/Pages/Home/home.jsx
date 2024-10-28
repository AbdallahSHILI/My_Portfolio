import React from "react";
import "./home.css";
import {
  AboutFooter,
  CopyRight,
  LevelUp,
  MainHome,
  LetsAddBook,
  ScreenshotGif,
  HomeServices,
} from "../index";
const Home = () => {
  return (
    <div className="home_container">
      <MainHome />
      <ScreenshotGif />
      <HomeServices />
      <LetsAddBook />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default Home;
