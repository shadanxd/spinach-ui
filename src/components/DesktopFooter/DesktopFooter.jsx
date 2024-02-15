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
      <div className="group-42">
        <div className="overlap">
          <div className="element-th-floor-corporate-wrapper">
            <p className="element-floor-corporate-4">
              7th floor, Corporate Park ||, <br />
              Sion-Trombay Road, Chembur, Mumbai- 400071 , India.
            </p>
          </div>
          <img className="LOGO-3" alt="Logo" src={LOGO} />
        </div>
        <p className="text-wrapper-65">© 2024 Spinach Experience Design</p>
        <a href="https://maps.app.goo.gl/dGWAeMKDsSgosZTWA" className="text-wrapper-66">View on Google maps</a>
        <div className="group-43">
          <div className="text-wrapper-67">Business enquiries:</div>
          <div className="text-wrapper-68">eshani@spinachexperience.design</div>
          <div className="text-wrapper-69">+91 9821297209</div>
        </div>
        <div className="group-44">
          <div className="text-wrapper-67">Career enquiries:</div>
          <div className="text-wrapper-70">fedora@spinachexperience.design</div>
          <div className="text-wrapper-69">+91 8097260369</div>
        </div>
        <img className="line-11" alt="Line" src={line} />
        <img className="line-12" alt="Line" src={img} />
        <img className="line-13" alt="Line" src={line1} />
        <div className="overlap-group-3">
          <div className="group-45">
            <div className="text-wrapper-71">The Company</div>
            <div className="text-wrapper-72">Our Services</div>
            <div className="text-wrapper-73">Our Expertise</div>
            <div className="text-wrapper-74">Client Work</div>
            <div className="text-wrapper-75">Careers</div>
          </div>
          <div className="group-46">
            <div className="text-wrapper-71">Privacy Policy</div>
            <div className="text-wrapper-72">Terms &amp; Conditions</div>
          </div>
        </div>
        <div className="group-47">
          <div className="ellipse-7" />
          <a href="https://www.linkedin.com/" className="text-wrapper-76">LinkedIn</a>
          <a href="https://www.instagram.com/" className="text-wrapper-77">Instagram</a>
          <a href="https://dribbble.com/" className="text-wrapper-78">Dribbble</a>
          <a href="https://www.behance.net/" className="text-wrapper-79">Behance</a>
          <a href="https://twitter.com/" className="text-wrapper-80">Twitter</a>
          <div className="ellipse-8" />
          <div className="ellipse-9" />
          <div className="ellipse-10" />
          <div className="ellipse-11" />
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
