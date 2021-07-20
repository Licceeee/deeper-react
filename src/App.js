import React from "react";
import { Switch, Route } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Card from "./components/Card/Card";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "./utils/api";
import Spinner from "./components/Spinner/Spinner";
import "./App.css";

const App = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  return (
    <div className="App">
      <div className="shape">
        <div className="mydiv">
          <span>
            <hr className="myHr" />
          </span>
          <h1 className="m-4"> DEEPER </h1>
          <span>
            <hr className="myHr" />
          </span>
        </div>
      </div>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <div className="text-center">
              {loading && <Spinner />}
              {error && <p>Error: {error.message}</p>}
            </div>

            {data && <Categories {...data} />}
          </Route>

          <Route exact path="/question/:id">
            <Card />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
