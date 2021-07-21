import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Card.css";
import Button from "../Button/Button";
import { useQuery } from "@apollo/client";
import { CATEGORY } from "../../utils/api";

const Card = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(CATEGORY, { variables: { id } });
  const [myData, setMyData] = useState();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    data && setMyData(data.categoryById);
    data && setQuestion(data.categoryById.questionSet[0]);
  }, [data]);

  const random = () => {
    return Math.floor(Math.random() * myData.questionSet.length);
  };

  const setNextQuestion = () => {
    let newQuestion = myData.questionSet[random()];
    while (question.id === newQuestion.id) {
      newQuestion = myData.questionSet[random()];
    }
    setQuestion(newQuestion);
  };

  if (loading) {
    return <div>LOADING</div>;
  }

  if (error) {
    return (
      <Fragment>
        <div>ERROR {error.message}</div>
        <Link to="/">
          <Button text="Home" cssClass="btn home-button my-5" />
        </Link>
      </Fragment>
    );
  }

  if (data) {
    return (
      <div className="custom-card">
        <h2 className="mt-5">{data.categoryById.name}</h2>
        <i className="fas fa-heart card-icons"></i>

        <div className="card-border rounded d-flex flex-lg-column justify-content-center">
          <p className="p-5 question">{question && question.content}</p>
        </div>
        
        <div className="row col-12 d-flex justify-content-center mt-2">

          <div className="col-12 col-sm-6 col-md-3 home">
            <Link to="/">
              <Button text="Home" cssClass="btn home-button" />
            </Link>
          </div>

          <hr className="separator"/>

          <div className="col-12 col-sm-6 col-md-3 next">
            <Button
              text="Next"
              cssClass="btn next-button block"
              action={setNextQuestion}
            />
          </div>
          
        </div>

        <hr />
      </div>
    );
  }
};

export default Card;
