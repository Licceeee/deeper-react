import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Contact from "./pages/Contact/Contact";
import Rules from "./pages/Rules/Rules";
import Impressum from "./pages/Impressum/Impressum";
import About from "./pages/About/About";
import Card from "./pages/Card/Card";
import Footer from "./components/Footer/Footer";
import Template from "./pages/Template/Template";

// ============================================================= >> ERROR PAGES
import NotFound from "./pages/error/404";

const App = () => {
  return (
    <div className="App">
      <div className="border-primary">
        <div className="border-white">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/categories" component={Categories} />

            <Route exact path="/question/:id" component={Card} />

            <Route exact path="/contact" component={Contact} />

            <Route exact path="/about" component={About} />

            <Route exact path="/rules" component={Rules} />

            <Route exact path="/impressum" component={Impressum} />

            <Route exact path="/template" component={Template} />

            <Route component={NotFound} />
            
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
