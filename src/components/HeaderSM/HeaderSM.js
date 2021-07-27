import React from "react";
import "./HeaderSM.css";
import { Link } from "react-router-dom";


const HeaderSM = () => {
  return (
    <Link to="/" className="custom-link">
      <h1 className="page-title-small">DEEPER</h1>
    </Link>
  );
};

export default HeaderSM;
