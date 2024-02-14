/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ color, size, className, text = "Button" }) => {
  return (
    <button className={`button ${color} ${className}`}>
      <div className="text-wrapper-16">{text}</div>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  size: PropTypes.oneOf(["large", "small"]),
  text: PropTypes.string,
};
