import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Contact from "./pages/Contact/Contact";
import Card from "./pages/Card/Card";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <div className="border-primary">
        <div className="border-white">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/categories">
              <Categories />
            </Route>

            <Route exact path="/question/:id">
              <Card />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
