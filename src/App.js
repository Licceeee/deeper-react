import React from "react";
import { Switch, Route } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { CATEGORIES } from "./utils/api";

import "./App.css";

import Categories from "./pages/Categories/Categories";
import Card from "./pages/Card/Card";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  return (
    <div className="App">
      <div className="border-primary">
        <div className="border-white">
          <Switch>
            <Route exact path="/">
              <div className="shape">
                  <h1 className="page-title">DEEPER</h1>
              </div>

              <div className="container">
                <div className="text-center">
                  {loading && <Spinner />}
                  {error && <p>Error: {error.message}</p>}
                </div>

                {data && <Categories {...data} />}
              </div>
            </Route>

            <Route exact path="/question/:id">
              <Card />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
