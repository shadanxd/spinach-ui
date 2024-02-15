/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileFooter = ({
  className,
  group = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/group@2x.png",
}) => {
  return (
    <div className={`mobile-footer ${className}`}>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-55.svg"
      />
      <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-128.svg"
      />
      <img
        className="line-2"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-128.svg"
      />
      <p className="div">© 2024 Spinach Experience Design</p>
      <img
        className="line-3"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc613e3dc62a0545e3653b/img/line-75.svg"
      />
      <div className="group">
      <a href="https://maps.app.goo.gl/dGWAeMKDsSgosZTWA" className="text-wrapper-2">View on Google maps</a>
        <div className="group-2">
          <p className="element-floor-corporate">
            7th floor, Corporate Park ||, <br />
            Sion-Trombay Road, Chembur, <br />
            Mumbai- 400071 , India.
          </p>
          <div className="text-wrapper-3">Address:</div>
        </div>
      </div>
      <div className="group-3">
        <div className="text-wrapper-4">Career enquiries:</div>
        <div className="text-wrapper-5">fedora@spinachexperience.design</div>
        <div className="text-wrapper-6">+91 8097260369</div>
      </div>
      <div className="group-4">
        <div className="text-wrapper-7">Business enquiries:</div>
        <div className="text-wrapper-8">eshani@spinachexperience.design</div>
        <div className="text-wrapper-9">+91 9821297209</div>
      </div>
      <div className="text-wrapper-10">Privacy Policy</div>
      <div className="terms-conditions">Terms &amp; Conditions</div>
      <img className="group-5" alt="Group" src={group} />
      <div className="text-wrapper-11">The Company</div>
      <div className="text-wrapper-12">Our Services</div>
      <div className="text-wrapper-13">Our Expertise</div>
      <div className="text-wrapper-14">Client Work</div>
      <div className="text-wrapper-15">Careers</div>
      <div className="group-6">
        <div className="group-7">
          <div className="ellipse" />
          <a href="https://www.linkedin.com" className="text-wrapper-16">LinkedIn</a>
        </div>
        <div className="group-8">
          <a href="https://www.instagram.com" className="text-wrapper-17">Instagram</a>
          <div className="ellipse" />
        </div>
        <div className="group-9">
          <a href="https://www.behance.com" className="text-wrapper-18">Behance</a>
          <div className="ellipse-2" />
        </div>
        <div className="group-10">
          <a href="https://www.twitter.com" className="text-wrapper-18">Twitter</a>
          <div className="ellipse-2" />
        </div>
        <div className="group-11">
          <a href="https://www.dribbble.com" className="text-wrapper-18">Dribbble</a>
          <div className="ellipse-2" />
        </div>
      </div>
    </div>
  );
};

MobileFooter.propTypes = {
  group: PropTypes.string,
};
