import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const QuizListItem = ({ quiz: {id, title, image, questions}}) => (
    <div className="quiz-item">
        <img className="quiz-item__image" src={image} alt="Mončičák" />
        <div className="quiz-item__content">
            <h2 className="quiz-item__title">{title}</h2>
            <p className="quiz-item__questions">{questions} otázek</p>
            <Link className="quiz-item__link" to={`/kviz/${id}`}>Spustit kvíz</Link>
        </div>
    </div>
);

export default QuizListItem;