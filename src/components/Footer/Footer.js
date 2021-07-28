import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container flex col-12">
        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <Link to="/rules" className="custom-link">
              <p>Rules</p>
            </Link>
            <p>Download die App</p>
          </div>
        </div>

        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <Link to="/about" className="custom-link">
              <p>About Us</p>
            </Link>
            <Link to="/contact" className="custom-link">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>

        <div className="section col-12 col-md-4">
          <div className="inner-footer-container">
            <p>
              <a
                href="https://www.linkedin.com/in/alicia-schonefeld/"
                className="custom-link"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Licceeee"
                className="custom-link"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
