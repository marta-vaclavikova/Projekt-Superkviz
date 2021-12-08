import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Question from "./Question";
import Result from "./Result";
import './style.css';

const Quiz = () => {

    const [questionList, setQuestionList] = useState(null);
    const [question, setQuestion] = useState(null);
    const [displayResult, setDisplayResult] = useState(false);
    const [resultList, setResultList] = useState([]);
    const {id} = useParams();

    const changeQuestion = (answerId) => {
        //uloz odpoved
        resultList.push({
            correct: question.answers[question.correctAnswer],
            answer: question.answers[answerId]});
            console.log(resultList);
        if (question.id < questionList.length) {
            console.log(question.id);
            setQuestion(questionList.find(q => q.id === question.id + 1));
        } else {
            //zobraz vysledek
            setDisplayResult(true);
        }
    }

    useEffect(
        () => {
            fetch(`https://raw.githubusercontent.com/marta-vaclavikova/superkviz-api/main/quiz/${id}.json`)
                .then(response => response.json())
                .then(json => {
                    setQuestionList(json.questions);
                    setQuestion(json.questions[0]);
                })
        }, []
    );

    return (
        <>
        {displayResult ? <Result resultList={resultList} /> : (question && <Question question={question} count={questionList.length} onSelect={changeQuestion}/>)}
        </>
    );
};

export default Quiz;