import React from "react";
import style from "./projectList.module.css";
import arrow from "../../../Components/Assests/Flech.svg";
import { Link } from "react-router-dom";

const ProjectList = ({ onProjectClick }) => {
  return (
    <div className={style.container}>
      <div
        className={style.projectItem}
        onClick={() => onProjectClick("clothing")}
      >
        Clothing
      </div>
      <div
        className={style.projectItem}
        onClick={() => onProjectClick("tasty")}
      >
        Tasty-Menuy
      </div>
      <div className={style.projectItem} onClick={() => onProjectClick("chat")}>
        Real-Time-Chat-App
      </div>
      <Link to="/Projects" className={style.link}>
        <div className={style.projectItem}>
          See my other projects
          <img src={arrow} alt="arrow" className={style.arrowIcon} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectList;
