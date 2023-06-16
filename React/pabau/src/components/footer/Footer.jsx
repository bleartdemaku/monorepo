import React from "react";
import "./Footer.css";
import pabau from "../../assets/pabau.webp";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="content">
        Powered by <img src={pabau} alt="" /> Pabau
      </h3>
    </div>
  );
};

export default Footer;
