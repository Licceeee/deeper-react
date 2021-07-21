import React from "react";
import Category from "../Category/Category";
import "./Categories.css";

const Categories = ({ categories, handleSelection }) => {
  return (
    <div className="row col-12">
      <div className="my-5">
        <h2 className="text-center">Select a category</h2>
      </div>
      <div className="categories-container">
        {categories &&
          categories.map((category) => {
            return (
              <Category
                key={category.id}
                {...category}
                handleSelection={handleSelection}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
