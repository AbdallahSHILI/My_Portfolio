import React from "react";
import "./levelUp.css";

const levelUp = () => {
  return (
    <div className="level-up-container">
      {/* Left Content */}
      <div className="left-content">
        <h2>Where do we start?</h2>
        <p>
          Schedule a call so I can learn about your product and we can discuss
          the best way to help you meet your goals. I only work with two people
          each month so book a call now to avoid missing out.
        </p>
        <button className="level-up-btn">Level up your business</button>
      </div>

      {/* Right Image */}
      <div className="right-image">
        <img src="your-image-url.jpg" alt="Level Up" />
      </div>
    </div>
  );
};

export default levelUp;
