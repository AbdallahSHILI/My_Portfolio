import React from "react";
import { AllServices, MainServices } from "../index";

const services = () => {
  return (
    <div className="services_container">
      <MainServices />
      <AllServices />
    </div>
  );
};

export default services;
