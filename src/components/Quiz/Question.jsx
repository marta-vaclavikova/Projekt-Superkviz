import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Question = ({ question: { id, title, image, answers }, count, onSelect }) => {

    const onClick = (value) => {
        onSelect(value);
    }
    return (
        <div className="question">

            <p className="question__number">Otázka {id} / {count}</p>

            <h2 className="question__title">{title}</h2>

            <div className="question__content">
                <img className="question__image" src={image} alt="Ilustrační obrázek" />

                <div className="question__answers">
                    <button className="question__answer" onClick={() => onClick(0)}>{answers[0]}</button>
                    <button className="question__answer" onClick={() =>onClick(1)}>{answers[1]}</button>
                    <button className="question__answer" onClick={() =>onClick(2)}>{answers[2]}</button>
                </div>
            </div>

        </div>
    );
};

export default Question;