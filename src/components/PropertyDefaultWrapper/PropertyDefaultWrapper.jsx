
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
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
    <div className={`property-default-wrapper ${className}`}>
      <div
        className={`component-4 property-1-4-${state.property1} ${componentClassName}`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        <div className="text-wrapper-81">The Company</div>
      </div>
      <div
        className={`component-5 property-1-4-${state.property1} ${componentClassNameOverride}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_1270");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1270");
        }}
      >
        <div className="text-wrapper-82">Our Services</div>
        <img
          className="dropdown-2"
          alt="Dropdown"
          src={
            state.property1 === "selected-services"
              ? "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/dropdown-5.svg"
              : dropdown
          }
        />
      </div>
      <div
        className={`component-6 property-1-4-${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_1273");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1273");
        }}
      >
        <div className="text-wrapper-83">Our Expertise</div>
      </div>
      <div
        className={`component-7 property-1-4-${state.property1}`}
        onMouseLeave={() => {
          dispatch("mouse_leave_1276");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter_1276");
        }}
      >
        <div className="text-wrapper-84">Client Work</div>
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

      case "mouse_enter_1270":
        return {
          property1: "hover-services",
        };

      case "mouse_enter_1273":
        return {
          property1: "hover-selected-expertise",
        };

      case "mouse_enter_1276":
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
      case "mouse_leave_1270":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-expertise") {
    switch (action) {
      case "mouse_leave_1273":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "hover-selected-client-work") {
    switch (action) {
      case "mouse_leave_1276":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
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
