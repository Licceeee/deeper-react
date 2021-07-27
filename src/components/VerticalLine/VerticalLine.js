import React, { Fragment } from "react";
import "./VerticalLine.css";
import Triangle from "../Triangle/Triangle";

const VerticalLine = () => {
  return (
    <Fragment>
      <div className="line-container">
        <div className="vertical-line"></div>
        <div className="circle"></div>
        <Triangle cssClass="triangle-base triangle-top" />
        <Triangle cssClass="triangle-base triangle-bottom" />
      </div>
    </Fragment>
  );
};

export default VerticalLine;
