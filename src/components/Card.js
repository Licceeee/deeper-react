import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Card.css';


const Card = ({ questions }) => {

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
            <div className="border border-dark rounded">
                <p className="p-5">{question && question.content}</p>
            </div>

            <div className="row">
                <div className="col-6">
                    <Link to='/'>
                        <button className="btn btn-dark m-5">Home</button>
                    </Link>
                    
                </div>
                <div className="col-6">
                    <button className="btn btn-action m-5" onClick={setNextQuestion}> NEXT</button>
                </div>
            </div>
            

            <hr />

           
            
        </div>
    );
}

export default Card;
