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
  const [category, setCategory] = useState();

  const handleSelection = (name, questionSet) => {
    setQuestions(questionSet);
    setCategory(name);
  }


  return (
    <div className="App">


        <div class="shape">

          <div className="mydiv">
            <span><hr className="myHr"/></span>
              <h1 className="m-4"> DEEPER </h1>
              <span><hr className="myHr"/></span>
        </div>
             
    
        </div>
        {/* <div className="App-header">
          <h1>
              DEEPER
          </h1>
        </div> */}

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
              <Card questions={questions} category={category}/>
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;
