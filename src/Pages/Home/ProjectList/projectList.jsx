import React from "react";
import style from "./projectList.module.css";
import arrow from "../../../Components/Assests/Flech.svg";

const ProjectList = () => {
  return (
    <div className={style.container}>
      <div className={style.projectItem}>Clothing</div>
      <div className={style.projectItem}>Tasty-Menu</div>
      <div className={style.projectItem}>Real-Time-Chat-App</div>
      <div className={style.projectItem}>
        See my other projects
        <img src={arrow} alt="arrow" className={style.arrowIcon} />
      </div>
    </div>
  );
};

export default ProjectList;
