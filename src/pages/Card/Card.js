import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Card.css";
import Button from "../../components/Button/Button";
import { useQuery } from "@apollo/client";
import { CATEGORY } from "../../utils/api";
import HeaderSM from "../../components/HeaderSM/HeaderSM";

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
      <Fragment>
        <HeaderSM />
        <div className="custom-card">
          <h2>{data.categoryById.name}</h2>
          <i className="fas fa-heart card-icons"></i>

          <div className="card-border rounded card-content">
            <p className="question">{question && question.content}</p>
          </div>

          <div className="row col-12 d-flex justify-content-center mt-2 pt-5">

            <div className="col-12 col-sm-3 home">
              <Link to="/categories">
                <Button text="Change category" cssClass="btn home-button" />
              </Link>
            </div>

            <div className="col-12 col-sm-3 next">
              <Button
                text="Next"
                cssClass="btn next-button block"
                action={setNextQuestion}
              />
            </div>
          </div>

          <hr />
        </div>
      </Fragment>
    );
  }
};

export default Card;
