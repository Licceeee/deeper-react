import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import Button from "../Button/Button";

const Category = ({ id, name, description, iconWeb, questionSet }) => {
  return (
    <div className="category-card text-center">
      <div className="profile-content">
        <h3 className="category-title">{name}</h3>
        <div className="profile-description">{description}</div>

        <i className={`${iconWeb} icons`}></i>

        <div className="border">
          <div className="profile-overview">
            <p>Questions</p>
            <h6 className="number">{questionSet.length}</h6>
          </div>
        </div>
        <Link to={`/question/${id}`}>
          <Button text="Start" cssClass="btn home-button start-button" />
        </Link>
      </div>
    </div>
  );
};

export default Category;
