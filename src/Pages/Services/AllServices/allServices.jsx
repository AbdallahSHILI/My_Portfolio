import React from "react";
import "./allServices.css";
import BusinessLogo from "../../../Components/Assests/Business.svg";
import SearchLogo from "../../../Components/Assests/Search.svg";
import DevelopmentLogo from "../../../Components/Assests/Tailored_Development.svg";
import TestingLogo from "../../../Components/Assests/Testing.svg";
import SupportLogo from "../../../Components/Assests/Support.svg";

const allServices = () => {
  return (
    <div className="services-container">
      <div className="services-list">
        <div className="service-item">
          <div className="logo-container">
            <img src={SearchLogo} alt="Search Logo" className="service-logo" />
          </div>
          <h2>Application Review</h2>
          <p>
            I ensure that the applications I build are performing at their best
            by thoroughly reviewing and optimizing them before and after each
            update.
          </p>
        </div>
        <div className="service-item">
          <div className="logo-container">
            <img
              src={BusinessLogo}
              alt="Business Logo"
              className="service-logo"
            />
          </div>
          <h2>Business Strategy</h2>
          <p>
            We collaborate closely to understand your app's goals, and I develop
            the application to meet those objectives efficiently.
          </p>
        </div>
        <div className="service-item">
          <div className="logo-container">
            <img
              src={DevelopmentLogo}
              alt="Development Logo"
              className="service-logo"
            />
          </div>
          <h2>Custom Web App Development</h2>
          <p>
            I build custom web applications with your goals in mind, using
            modern technologies like React, Node.js, and Next.js to deliver
            flexible, high-performing solutions.
          </p>
        </div>
        <div className="service-item">
          <div className="logo-container">
            <img
              src={TestingLogo}
              alt="Testing Logo"
              className="service-logo"
            />
          </div>
          <h2>Rigorous Testing</h2>
          <p>
            I ensure the web applications I build are of excellent quality by
            thoroughly testing them using various approaches, focusing on
            performance, functionality, and responsiveness.
          </p>
        </div>
        <div className="service-item">
          <div className="logo-container">
            <img
              src={SupportLogo}
              alt="Support Logo"
              className="service-logo"
            />
          </div>
          <h2>Ongoing Support</h2>
          <p>
            Your application is always growing. Whether you’re adding new
            features or making improvements, I’m here to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default allServices;
