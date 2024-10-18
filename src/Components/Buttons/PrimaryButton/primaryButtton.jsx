import React from "react";
import "./primaryButton.css";

const primaryButtton = (props) => {
  return <button className="primary_button">{props.text}</button>;
};

export default primaryButtton;
