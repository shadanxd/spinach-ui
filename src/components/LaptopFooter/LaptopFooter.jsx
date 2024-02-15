/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LaptopFooter = ({
  className,
  LOGO = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/logo-10.svg",
}) => {
  return (
    <div className={`laptop-footer ${className}`}>
      <div className="group-31">
        <div className="overlap-group-2">
          <div className="element-floor-corporate-wrapper">
            <p className="element-floor-corporate-3">
              7th floor, Corporate Park ||, <br />
              Sion-Trombay Road, Chembur, Mumbai- 400071 , India.
            </p>
          </div>
          <img className="LOGO-2" alt="Logo" src={LOGO} />
        </div>
        <p className="text-wrapper-48">© 2024 Spinach Experience Design</p>
        <a href="https://maps.app.goo.gl/dGWAeMKDsSgosZTWA" className="text-wrapper-49">View on Google maps</a>
        <div className="group-32">
          <div className="text-wrapper-50">Business enquiries:</div>
          <div className="text-wrapper-51">eshani@spinachexperience.design</div>
          <div className="text-wrapper-52">+91 9821297209</div>
        </div>
        <div className="group-33">
          <div className="text-wrapper-53">Career enquiries:</div>
          <div className="text-wrapper-51">fedora@spinachexperience.design</div>
          <div className="text-wrapper-54">+91 8097260369</div>
        </div>
        <img
          className="line-8"
          alt="Line"
          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-55-6.svg"
        />
        <img
          className="line-9"
          alt="Line"
          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-55-6.svg"
        />
        <img
          className="line-10"
          alt="Line"
          src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-74.svg"
        />
        <div className="group-34">
          <div className="text-wrapper-55">The Company</div>
          <div className="text-wrapper-56">Our Services</div>
          <div className="text-wrapper-57">Our Expertise</div>
          <div className="text-wrapper-58">Client Work</div>
        </div>
        <div className="group-35">
          <div className="text-wrapper-55">Careers</div>
          <div className="text-wrapper-59">Privacy Policy</div>
          <div className="terms-conditions-4">Terms &amp; Conditions</div>
        </div>
        <div className="group-36">
          <div className="group-37">
            <div className="ellipse-6" />
            <a href="https://www.linkedin.com" className="text-wrapper-60">LinkedIn</a>
          </div>
          <div className="group-38">
            <a href="https://instagram.com" className="text-wrapper-60">Instagram</a>
            <div className="ellipse-6" />
          </div>
          <div className="group-39">
            <a href="https://www.dribbble.com" className="text-wrapper-60">Dribbble</a>
            <div className="ellipse-6" />
          </div>
          <div className="group-40">
            <a href="https://www.behance.com" className="text-wrapper-60">Behance</a>
            <div className="ellipse-6" />
          </div>
          <div className="group-41">
            <a href="https://www.twitter.com" className="text-wrapper-60">Twitter</a>
            <div className="ellipse-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

LaptopFooter.propTypes = {
  LOGO: PropTypes.string,
};
