import React from "react";
import ResultItem from "./ResultItem";
import './style.css';

const Result = ({ answers, questions }) => {

    const correctCount = questions.filter((question,index) => (answers[index] === question.correctAnswer)).length;
    const percentageCount = Math.round((100 / questions.length) * correctCount);
    
    return (
        <div className="evaluation">

            <h2 className="evaluation__title">Tvoje hodnocení</h2>

            <div className="evaluation__content">

                <div className="results">
                    {questions.map((question,index) => <ResultItem question={question} key={index} index={index} answers={answers}/>)}


                    <div className="results__count">
                        Správně máš {correctCount} ze {questions.length} otázek.
                    </div>

                </div>

                <div className="success-rate">
                    {percentageCount} %
                </div>

            </div>

        </div>

    );
};
export default Result;