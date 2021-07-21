import React from "react";
import Category from "../../components/Category/Category";
import "./Categories.css";

const Categories = ({ categories, handleSelection }) => {
  return (
    <div className="row col-12 main-container">
      <div className="my-5">
        <h2 className="text-center">Select a category</h2>
      </div>
      <div className="categories-container pb-5">
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
