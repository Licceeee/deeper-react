import React, { Fragment } from "react";
import "./VerticalLine.css";

const VerticalLine = () => {
  return (
    <Fragment>
      <div className="vertical-line"></div>
      <div className="circle"></div>
      <div className="triangle-base triangle-top"></div>
      <div className="triangle-base triangle-bottom"></div>
    </Fragment>
  );
};

export default VerticalLine;
