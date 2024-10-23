import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Everything you need for a perfect website</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Application Review</h2>
          <p>
            Application Review: I ensure that the applications I build are
            performing at their best by thoroughly reviewing and optimizing them
            before and after each update.
          </p>
        </div>
        <div className="service-item">
          <h2>Business Strategy</h2>
          <p>
            We collaborate closely to understand your app's goals, and I develop
            the application to meet those objectives efficiently.
          </p>
        </div>
        <div className="service-item">
          <h2>Custom Web App Development</h2>
          <p>
            I build custom web applications with your goals in mind, using
            modern technologies like React, Node.js, and Next.js to deliver
            flexible, high-performing solutions.
          </p>
        </div>
        <div className="service-item">
          <h2>Rigorous Testing</h2>
          <p>
            I ensure the web applications I build are of excellent quality by
            thoroughly testing them using various approaches, focusing on
            performance, functionality, and responsiveness.
          </p>
        </div>
        <div className="service-item">
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

export default Services;
