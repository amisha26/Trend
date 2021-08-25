import React from "react";
import logo from "../images/logo2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={logo} alt="#" />
      </div>
      <div className="footer-text">
        <h2>© Developed by Amitej Singh & Amisha Tiwari</h2>
      </div>
    </div>
  );
};

export default Footer;
