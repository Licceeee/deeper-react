import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Categories from './components/Categories';
import Card from './components/Card';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from './Api';



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


        <Switch>

          <Route exact path="/">
            {loading && <p>Loading...</p>}
            {error && <p>Error :(</p>}
            {data && <Categories {...data} handleSelection={handleSelection} />}
          </Route>

          <Route path="/question">
            <Card questions={questions} />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
