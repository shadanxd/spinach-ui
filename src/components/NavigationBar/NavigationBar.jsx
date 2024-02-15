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
        <div className="text-wrapper-61">The Company</div>
      </div>
      <div
        className={`component-2 ${state.property1} ${componentClassNameOverride}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_1504");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1504");
        }}
      >
        <div className="text-wrapper-62">Our Services</div>
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
          dispatch("mouse_leave_1507");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1507");
        }}
      >
        <div className="text-wrapper-63">Our Expertise</div>
      </div>
      <div
        className={`component-3 ${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_1510");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1510");
        }}
      >
        <div className="text-wrapper-64">Client Work</div>
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

      case "mouse_enter_1504":
        return {
          property1: "hover-services",
        };

      case "mouse_enter_1507":
        return {
          property1: "hover-selected-expertise",
        };

      case "mouse_enter_1510":
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
      case "mouse_leave_1504":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-expertise") {
    switch (action) {
      case "mouse_leave_1507":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-client-work") {
    switch (action) {
      case "mouse_leave_1510":
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
