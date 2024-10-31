import React from "react";
import Style from "./addBook.module.css";
import MyPic from "../../../Components/Assests/My-pic-addBook.jpg";

const AddBook = () => {
  return (
    <div className={Style.add_book_container}>
      <img src={MyPic} alt="Abdallah Shili" className={Style.profile_pic} />
      <div className={Style.text_content}>
        <h1 className={Style.intro_text}>I'm Abdallah Shili</h1>
        <p className={Style.description}>
          I help you grow your business by building powerful, scalable web
          applications that connect your goals with your users’ needs.
        </p>
        <button className={Style.book_call_button}>Let's book a call</button>
      </div>
    </div>
  );
};

export default AddBook;
