import React from "react";
import ResultItem from "./ResultItem";
import './style.css';

const Result = ({ resultList }) => {

    const correctCount = resultList.filter((result) => (result.answer === result.correct)).length;
    const percentageCount = Math.round((100 / resultList.length) * correctCount);
    
    return (
        <div className="evaluation">

            <h2 className="evaluation__title">Tvoje hodnocení</h2>

            <div className="evaluation__content">

                <div className="results">
                    {resultList.map((result,index) => <ResultItem result={result} key={index}/>)}


                    <div className="results__count">
                        Správně máš {correctCount} ze {resultList.length} otázek.
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