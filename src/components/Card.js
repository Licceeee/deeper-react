import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './css/Card.css';
import Button from './Button';


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
                        <Button text="Home" cssClass="dark"/>
                    </Link>
                    
                </div>
                <div className="col-6">
                    <Button text="NEXT" cssClass="yellow"  action={setNextQuestion} />
                </div>
            </div>
            

            <hr />

           
            
        </div>
    );
}

export default Card;
