import React from "react";
import { Switch, Route } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { CATEGORIES } from "./utils/api";

import "./App.css";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Card from "./pages/Card/Card";
import Spinner from "./components/Spinner/Spinner";
import Footer from "./components/Footer/Footer";
import HeaderLG from "./components/HeaderLG/HeaderLG";
import HeaderSM from "./components/HeaderSM/HeaderSM";

import VerticalLine from "./components/VerticalLine/VerticalLine";

const App = () => {
  const { loading, error, data } = useQuery(CATEGORIES);

  return (
    <div className="App">
      <div className="border-primary">
        <div className="border-white">
          <Switch>
            <Route exact path="/">
              <VerticalLine />
              <HeaderLG />
              <Home />
            </Route>
            <Route exact path="/categories">
              <HeaderLG />
              <div className="container">
                <div className="text-center push-down">
                  {loading && <Spinner />}
                  {error && <p>Error: {error.message}</p>}
                </div>

                {data && <Categories {...data} />}
              </div>
            </Route>

            <Route exact path="/question/:id">
              <HeaderSM />
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
