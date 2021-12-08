import React, { useEffect, useState } from "react";
import QuizListItem from "./QuizListItem";
import './style.css';

const QuizList = () => {

      
    const [quizList, setQuizList] = useState();

    useEffect(
        () => {
            fetch('https://raw.githubusercontent.com/marta-vaclavikova/superkviz-api/main/quizes.json')
                .then(response => response.json())
                .then(json => {
                    setQuizList(json);
                })
        }, []
    );

    return (
        <div className="quiz-list">
            {quizList &&
            quizList.map(quiz => <QuizListItem quiz={quiz} key={quiz.id}/>)}
        </div>
    );
};

export default QuizList;