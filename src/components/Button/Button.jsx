
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ color, size, text = "Button", className }) => {
  return (
    <button className={`button ${color} ${className}`}>
      <div className="text-wrapper">{text}</div>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(["black", "white"]),
  size: PropTypes.oneOf(["large", "small"]),
  text: PropTypes.string,
};
