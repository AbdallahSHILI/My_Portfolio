import React from "react";
import "./home.css";
import { AboutFooter, CopyRight, LevelUp, MainHome } from "../index";

const Home = () => {
  return (
    <div className="home_container">
      <MainHome />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default Home;
