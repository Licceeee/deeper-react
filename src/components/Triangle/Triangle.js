import "./Triangle.css";

import React from "react";

const Triangle = ({ cssClass }) => {
  return (
    <div className={cssClass}>
      <div class="triangle"></div>
    </div>
  );
};

export default Triangle;
