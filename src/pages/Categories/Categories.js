import React, { Fragment } from "react";
import Category from "../../components/Category/Category";
import "./Categories.css";
import HeaderLG from "../../components/HeaderLG/HeaderLG";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../../utils/api";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

const Categories = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  return (
    <Fragment>
      <HeaderLG />
      <div className="container page-size">
        {loading && <Spinner />}
        {error && <Error message={error.message} />}

        <div className="row col-12 main-container">
          <div className="mb-5">
            <h2 className="text-center">Select a category</h2>
          </div>
          <div className="categories-container pb-5">
            {data &&
              data.categories.map((category) => {
                return <Category key={category.id} {...category} />;
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
