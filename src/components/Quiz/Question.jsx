import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Question = ({ question: { title, image, answers }, count, number, onSelect }) => {

    return (
        <div className="question">

            <p className="question__number">Otázka {number} / {count}</p>

            <h2 className="question__title">{title}</h2>

            <div className="question__content">
                <img className="question__image" src={image} alt="Ilustrační obrázek" />

                <div className="question__answers">
                    {answers.map((answer,index) => (<button key={index} className="question__answer" onClick={() => onSelect(index)}>{answer}</button>))}
                </div>
            </div>

        </div>
    );
};

export default Question;