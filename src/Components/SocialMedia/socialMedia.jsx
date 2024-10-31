import React from "react";
import Style from "./socialMedia.module.css";
import GitHubIcon from "../Assests/github.svg";
import LinkedInIcon from "../Assests/linkedIn.svg";
import TwitterIcon from "../Assests/twitter.svg";
import InstagramIcon from "../Assests/instagram.svg";

const socialMedia = () => {
  return (
    <div className={Style.social_icons}>
      <a
        href="https://github.com/AbdallahSHILI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHubIcon} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/abdallahshili/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
      <a
        href="https://x.com/NeganSH9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwitterIcon} alt="Twitter" />
      </a>
      <a
        href="https://www.instagram.com/abdallah_sh_9/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="Instagram" />
      </a>
    </div>
  );
};

export default socialMedia;
