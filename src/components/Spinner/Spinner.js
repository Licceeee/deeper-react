import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h4 className="center mb-3">Loading ... </h4>
        <div className="spinner-grow" role="status"></div>
      </div>
    </div>
  );
};

export default Spinner;
