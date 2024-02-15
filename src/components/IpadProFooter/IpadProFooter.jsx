/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IpadProFooter = ({
  className,
  LOGO = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-10.svg",
}) => {
  return (
    <div className={`ipad-pro-footer ${className}`}>
      <div className="overlap-group">
        <p className="element-floor-corporate-2">
          7th floor, Corporate Park ||, <br />
          Sion-Trombay Road, Chembur, Mumbai- 400071 , India.
        </p>
        <img className="LOGO" alt="Logo" src={LOGO} />
      </div>
      <p className="text-wrapper-35">© 2024 Spinach Experience Design</p>
      <a href="https://maps.app.goo.gl/dGWAeMKDsSgosZTWA" className="text-wrapper-36">View on Google maps</a>
      <img
        className="line-6"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-55-4.svg"
      />
      <img
        className="line-7"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-75-4.svg"
      />
      <div className="group-21">
        <div className="text-wrapper-37">The Company</div>
        <div className="text-wrapper-38">Our Services</div>
        <div className="text-wrapper-39">Our Expertise</div>
        <div className="text-wrapper-40">Client Work</div>
      </div>
      <div className="group-22">
        <div className="text-wrapper-37">Careers</div>
        <div className="text-wrapper-41">Privacy Policy</div>
        <div className="terms-conditions-3">Terms &amp; Conditions</div>
      </div>
      <div className="group-23">
        <div className="group-24">
          <div className="ellipse-5" />
          <a href="https://www.linkedin.com" className="text-wrapper-42">LinkedIn</a>
        </div>
        <div className="group-25">
          <a href="https://www.instagram.com" className="text-wrapper-42">Instagram</a>
          <div className="ellipse-5" />
        </div>
        <div className="group-26">
          <a href="https://www.dribbble.com" className="text-wrapper-42">Dribbble</a>
          <div className="ellipse-5" />
        </div>
        <div className="group-27">
          <a href="https://www.behance.com" className="text-wrapper-42">Behance</a>
          <div className="ellipse-5" />
        </div>
        <div className="group-28">
          <a href= "https://wwww.twitter.com" className="text-wrapper-42">Twitter</a>
          <div className="ellipse-5" />
        </div>
      </div>
      <div className="group-29">
        <div className="text-wrapper-43">Business enquiries:</div>
        <div className="text-wrapper-44">eshani@spinachexperience.design</div>
        <div className="text-wrapper-45">+91 9821297209</div>
      </div>
      <div className="group-30">
        <div className="text-wrapper-46">Career enquiries:</div>
        <div className="text-wrapper-44">fedora@spinachexperience.design</div>
        <div className="text-wrapper-47">+91 8097260369</div>
      </div>
    </div>
  );
};

IpadProFooter.propTypes = {
  LOGO: PropTypes.string,
};
