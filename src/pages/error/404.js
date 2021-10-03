import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderSM from "../../components/HeaderSM/HeaderSM";
import "./styles.css";

const NotFound = () => (
  <Fragment>
    <HeaderSM />
    <div className="page-size">
      <div className="contain">
        <h2>404 - Not Found!</h2>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  </Fragment>
);

export default NotFound;
