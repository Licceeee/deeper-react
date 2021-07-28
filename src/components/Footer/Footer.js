import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container flex col-12">
        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <p>Rules</p>
            <p>Download die App</p>
          </div>
        </div>

        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <p>About us</p>
            <Link to="/contact" className="custom-link">Contact Us</Link>
          </div>
        </div>

        <div className="section col-12 col-md-4">
          <div className="inner-footer-container">
            <p>LinkedIn</p>
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
