import React from "react";
import './style.css';

import correct from './img/correct.svg';
import incorrect from './img/incorrect.svg';

const ResultItem = ({question, index, answers}) => (

        <div className="result">
            <img className="result__icon" src={answers[index] === question.correctAnswer ? correct:incorrect} 
            alt={answers[index] === question.correctAnswer ? 'správně':'špatně'}/>

            <div className="result__content">
                <h3 className="result__title">{index + 1}. {question.title}</h3>
                <p className="result__answer">Tvoje odpověď: {question.answers[answers[index]]}</p>
                {answers[index] != question.correctAnswer &&
                <p className="result__answer result__answer--correct">Správná odpověď: {question.answers[question.correctAnswer]}</p>
                }
            </div>
        </div>
);

export default ResultItem;