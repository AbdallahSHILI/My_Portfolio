import React from "react";
import {
  AboutFooter,
  AllServices,
  CopyRight,
  LevelUp,
  MainServices,
} from "../index";

const services = () => {
  return (
    <div className="services_container">
      <MainServices />
      <AllServices />
      <LevelUp />
      <AboutFooter />
      <CopyRight />
    </div>
  );
};

export default services;
