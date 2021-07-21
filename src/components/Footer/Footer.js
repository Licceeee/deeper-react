import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container flex col-12">
        <div className="section border-right col-12 col-md-4">
          <div className="inner-container">
            <p>Rules</p>
            <p>Test 22</p>
          </div>
        </div>
        <div className="section border-right col-12 col-md-4">
        <div className="inner-container">
            <p>About us</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className="section col-12 col-md-4 last">
        <div className="inner-container">
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
