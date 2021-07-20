import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({
  id,
  name,
  description,
  iconWeb,
  questionSet,
  handleSelection,
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 router-link">
      <div className="profile-card-4 text-center">
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
            <button className="btn start-button router-link">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
