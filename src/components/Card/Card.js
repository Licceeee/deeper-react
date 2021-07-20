import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({ questions, category }) => {
  const [question, setQuestion] = useState();

  useEffect(() => {
    questions && setQuestion(questions[0]);
  }, []);

  const random = () => {
    return Math.floor(Math.random() * questions.length);
  };

  const setNextQuestion = () => {
    setQuestion(questions[random()]);
  };

  return (
    <div className="custom-card">
      <h2 className="mt-5">{category}</h2>
      <i className="fas fa-heart card-icons"></i>

      <div className="card-border rounded d-flex flex-lg-column justify-content-center">
        <p className="p-5 question">{question && question.content}</p>
      </div>

      <div className="row col-12 d-flex justify-content-center p-0 m-0">
        <div className="col-3">
          <Link to="/">
            <Button text="Home" cssClass="btn home-button my-5" />
          </Link>
        </div>
        <div className="col-3">
          <Button
            text="Next"
            cssClass="btn next-button my-5 block"
            action={setNextQuestion}
          />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Card;
