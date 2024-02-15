import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IpadMiniFooter = ({
  className,
  group = "https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/group-2@2x.png",
}) => {
  return (
    <div className={`ipad-mini-footer ${className}`}>
      <img
        className="line-4"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-55-2.svg"
      />
      <p className="element-th-floor-corporate">
        7th floor, Corporate Park ||, <br />
        Sion-Trombay Road, Chembur, <br />
        Mumbai- 400071 , India.
      </p>
      <p className="p">© 2024 Spinach Experience Design</p>
      <a href="https://maps.app.goo.gl/dGWAeMKDsSgosZTWA" className="text-wrapper-19">View on Google maps</a>
      <img
        className="line-5"
        alt="Line"
        src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cc67e196ed17ee8cf36989/img/line-55-2.svg"
      />
      <div className="group-12">
        <div className="text-wrapper-20">Career enquiries:</div>
        <div className="text-wrapper-21">fedora@spinachexperience.design</div>
        <div className="text-wrapper-22">+91 8097260369</div>
        <div className="group-13">
          <div className="text-wrapper-23">Business enquiries:</div>
          <div className="text-wrapper-24">eshani@spinachexperience.design</div>
          <div className="text-wrapper-25">+91 9821297209</div>
        </div>
      </div>
      <div className="text-wrapper-26">Privacy Policy</div>
      <div className="terms-conditions-2">Terms &amp; Conditions</div>
      <img className="group-14" alt="Group" src={group} />
      <div className="text-wrapper-27">The Company</div>
      <div className="text-wrapper-28">Our Services</div>
      <div className="text-wrapper-29">Our Expertise</div>
      <div className="text-wrapper-30">Client Work</div>
      <div className="text-wrapper-31">Careers</div>
      <div className="group-15">
        <div className="group-16">
          <div className="ellipse-3" />
          <a href="https://www.linkedin.com/" className="text-wrapper-32">LinkedIn</a>
        </div>
        <div className="group-17">
        <a href="https://www.instagram.com/" className="text-wrapper-33">Instagram</a>
          <div className="ellipse-3" />
        </div>
        <div className="group-18">
          <a href="https://dribbble.com/" className="text-wrapper-34">Behance</a>
          <div className="ellipse-4" />
        </div>
        <div className="group-19">
          <a href="https://twitter.com" className="text-wrapper-34">Twitter</a>
          <div className="ellipse-4" />
        </div>
        <div className="group-20">
          <a href="https://dribbble.com/" className="text-wrapper-34">Dribbble</a>
          <div className="ellipse-4" />
        </div>
      </div>
    </div>
  );
};

IpadMiniFooter.propTypes = {
  group: PropTypes.string,
};
