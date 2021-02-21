import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Categories from './components/Categories';
import Card from './components/Card';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from './Api';
import Spinner from './components/Spinner';



const App = () => {

  const { loading, error, data } = useQuery(CATEGORIES);
  const [questions, setQuestions] = useState();

  const handleSelection = (questionSet) => {
    setQuestions(questionSet);
  }


  return (
    <div className="App">
        <div className="App-header">
          <h1>
              DEEPER
          </h1>
        </div>

        <div className="container">
          <Switch>

            <Route exact path="/">
              <div className="text-center">
                {loading && <Spinner />}
                {error && <p>Error :(</p>}
              </div>

              {data && <Categories {...data} handleSelection={handleSelection} />}
            </Route>

            <Route path="/question">
              <Card questions={questions} />
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
