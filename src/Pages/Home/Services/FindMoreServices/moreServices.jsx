import React from "react";
import { Link } from "react-router-dom";
import "./moreServices.css";

const MoreServices = () => {
  return (
    <div className="more-services-container">
      <Link to="/services" className="more-services-link">
        Find out more about my services
        <img  alt="Right Arrow" className="right-arrow" />
      </Link>
    </div>
  );
};

export default MoreServices;
