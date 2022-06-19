import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row col-12">
        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <Link to="#">Download die App (Coming soon...)</Link>
            <Link to="#">Rules (Coming soon...) </Link>
          </div>
        </div>

        <div className="section border-right col-12 col-md-4">
          <div className="inner-footer-container">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="section col-12 col-md-4">
          <div className="inner-footer-container">
            <a
              href="https://www.linkedin.com/in/alicia-schonefeld/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Licceeee"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
