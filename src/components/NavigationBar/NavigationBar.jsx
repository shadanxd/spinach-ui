/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const NavigationBar = ({
  property1,
  className,
  componentClassName,
  componentClassNameOverride,
  dropdown = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/dropdown-2.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`navigation-bar ${className}`}>
      <div
        className={`component ${state.property1} ${componentClassName}`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        <div className="text-wrapper-17">The Company</div>
      </div>
      <div
        className={`component-2 ${state.property1} ${componentClassNameOverride}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_341");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_341");
        }}
      >
        <div className="text-wrapper-18">Our Services</div>
        <img
          className="dropdown"
          alt="Dropdown"
          src={
            state.property1 === "selected-services"
              ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/dropdown-5.svg"
              : dropdown
          }
        />
      </div>
      <div
        className={`div-wrapper ${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_344");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_344");
        }}
      >
        <div className="text-wrapper-19">Our Expertise</div>
      </div>
      <div
        className={`component-3 ${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_347");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_347");
        }}
      >
        <div className="text-wrapper-20">Client Work</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover-selected-about-us",
        };

      case "mouse_enter_341":
        return {
          property1: "hover-services",
        };

      case "mouse_enter_344":
        return {
          property1: "hover-selected-expertise",
        };

      case "mouse_enter_347":
        return {
          property1: "hover-selected-client-work",
        };
    }
  }

  if (state.property1 === "hover-selected-about-us") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-services") {
    switch (action) {
      case "mouse_leave_341":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-expertise") {
    switch (action) {
      case "mouse_leave_344":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-client-work") {
    switch (action) {
      case "mouse_leave_347":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

NavigationBar.propTypes = {
  property1: PropTypes.oneOf([
    "hover-selected-about-us",
    "hover-selected-client-work",
    "hover-selected-expertise",
    "default",
    "hover-services",
    "selected-services",
  ]),
  dropdown: PropTypes.string,
};
