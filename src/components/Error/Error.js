import React from "react";
import "./Error.css";

const Error = ({ message }) => {
  return (
    <div className="text-center push-down">
      <div className="spinner-error-content">
        <div className="row d-flex justify-content-center">
          <h4 className="center mb-3">Error ... </h4>
          <p className="center mb-3">{message} </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
