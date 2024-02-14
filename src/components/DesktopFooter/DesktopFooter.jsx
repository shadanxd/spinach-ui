/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DesktopFooter = ({
  className,
  LOGO = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/logo.svg",
  line = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-55.svg",
  img = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-55.svg",
  line1 = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/line-74.svg",
}) => {
  return (
    <div className={`desktop-footer ${className}`}>
      <div className="group">
        <div className="overlap">
          <div className="element-floor-corporate-wrapper">
            <p className="element-floor-corporate">
              7th floor, Corporate Park ||, <br />
              Sion-Trombay Road, Chembur, Mumbai- 400071 , India.
            </p>
          </div>
          <img className="LOGO" alt="Logo" src={LOGO} />
        </div>
        <p className="text-wrapper">© 2024 Spinach Experience Design</p>
        <div className="div">View on Google maps</div>
        <div className="group-2">
          <div className="text-wrapper-2">Business enquiries:</div>
          <div className="text-wrapper-3">eshani@spinachexperience.design</div>
          <div className="text-wrapper-4">+91 9821297209</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-2">Career enquiries:</div>
          <div className="text-wrapper-5">fedora@spinachexperience.design</div>
          <div className="text-wrapper-4">+91 8097260369</div>
        </div>
        <img className="line" alt="Line" src={line} />
        <img className="img" alt="Line" src={img} />
        <img className="line-2" alt="Line" src={line1} />
        <div className="overlap-group">
          <div className="group-4">
            <div className="text-wrapper-6">The Company</div>
            <div className="text-wrapper-7">Our Services</div>
            <div className="text-wrapper-8">Our Expertise</div>
            <div className="text-wrapper-9">Client Work</div>
            <div className="text-wrapper-10">Careers</div>
          </div>
          <div className="group-5">
            <div className="text-wrapper-6">Privacy Policy</div>
            <div className="text-wrapper-7">Terms &amp; Conditions</div>
          </div>
        </div>
        <div className="group-6">
          <div className="ellipse" />
          <div className="text-wrapper-11">LinkedIn</div>
          <div className="text-wrapper-12">Instagram</div>
          <div className="text-wrapper-13">Dribbble</div>
          <div className="text-wrapper-14">Behance</div>
          <div className="text-wrapper-15">Twitter</div>
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="ellipse-4" />
          <div className="ellipse-5" />
        </div>
      </div>
    </div>
  );
};

DesktopFooter.propTypes = {
  LOGO: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
};
