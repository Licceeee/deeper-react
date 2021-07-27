import React from "react";
import "./HeaderLG.css";
import { Link } from "react-router-dom";

const HeaderLG = () => {
  return (
    <div className="shape">
      <Link to="/" className="custom-link">
        <h1 className="page-title">DEEPER</h1>
      </Link>
    </div>
  );
};

export default HeaderLG;
