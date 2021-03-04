import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './css/Card.css';


const Card = ({ questions, category }) => {

    const [question, setQuestion] = useState();

    useEffect(() => {
        questions && setQuestion(questions[0])
    }, []);

    const random = () => { return Math.floor(Math.random() * questions.length)};

    const setNextQuestion = () => {
        setQuestion(questions[random()]);
    }

    return (
        <div className="custom-card">

            <h2 className="mt-5">{category}</h2>
            <i class="fas fa-heart card-icons"></i>

            <div className="card-border rounded d-flex flex-lg-column justify-content-center">
                <p className="p-5 question">{question && question.content}</p>

               
            </div>

            <div className="row col-12 d-flex justify-content-center p-0 m-0">
                    <div className="col-3">
                        <Link to='/'>
                            <button className="btn home-button my-5">Home</button>
                        </Link>
                    </div>
                    <div className="col-3">
                        <button className="btn next-button my-5 block" onClick={setNextQuestion}>Next</button>
                        {/* <Button text="NEXT" cssClass="yellow"  action={setNextQuestion} /> */}
                    </div>
                </div>
            

            <hr />

           
            
        </div>
    );
}

export default Card;
