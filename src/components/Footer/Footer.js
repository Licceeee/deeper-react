import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container flex col-12">
        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            {/* <Link to="/rules" >
              <p>Rules</p>
            </Link> */}
            <p>Download die App (Coming soon...)</p>
            <p>Rules (Coming soon...) </p>

          </div>
        </div>

        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <Link to="/about">About Us</Link>
            <Link to="/contact">
              <p>Contact Us</p>
            </Link>
          </div>
        </div>

        <div className="section col-12 col-md-4">
          <div className="inner-footer-container">
            <p>
              <a
                href="https://www.linkedin.com/in/alicia-schonefeld/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Licceeee"
                target="_blank"
                rel="noopener noreferrer"
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
