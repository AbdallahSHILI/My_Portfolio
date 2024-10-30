import React from "react";
import "./addBook.module.css";
import MyPic from "../../../Components/Assests/My-pic-addBook.jpg";

const AddBook = () => {
  return (
    <div className="add-book-container">
      <img src={MyPic} alt="Abdallah Shili" className="profile_pic" />
      <div className="text-content">
        <h1 className="intro-text">I'm Abdallah Shili</h1>
        <p className="description">
          I help you grow your business by building powerful, scalable web
          applications that connect your goals with your users’ needs.
        </p>
        <button className="book-call-button">Let's book a call</button>
      </div>
    </div>
  );
};

export default AddBook;
