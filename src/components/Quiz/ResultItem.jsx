import React from "react";
import './style.css';

import correct from './img/correct.svg';
import incorrect from './img/incorrect.svg';

const ResultItem = ({result}) => (

        <div className="result">
            <img className="result__icon" src={result.answer === result.correct ? correct:incorrect} 
            alt={result.correct === result.answer ? 'správně':'špatně'}/>

            <div className="result__content">
                <h3 className="result__title">{result.correct}</h3>
                <p className="result__answer">Tvoje odpověď: {result.answer}</p>
            </div>
        </div>
);

export default ResultItem;