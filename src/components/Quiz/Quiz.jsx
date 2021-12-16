import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Question from "./Question";
import Result from "./Result";
import './style.css';

const Quiz = () => {

    const [questionList, setQuestionList] = useState(null);
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const handleAnswer = (answer) => {
        //uloz odpoved
        setAnswers([...answers, answer]);
        //setAnswers(answers.concat(answer));
        setActiveQuestion(activeQuestion + 1);
    }

    useEffect(
        () => {
            fetch(`https://raw.githubusercontent.com/marta-vaclavikova/superkviz-api/main/quiz/${id}.json`)
                .then(response => response.json())
                .then(json => {
                    setQuestionList(json.questions);
                    setActiveQuestion(0);
                    setLoading(false);
                })
        }, []
    );

    if (loading) {
        return <p>Načítám data...</p>
    }

    if (activeQuestion === questionList.length) {
        return  <Result answers={answers} questions={questionList} />
    }

    return (
        <>
        <Question question={questionList[activeQuestion]} number={activeQuestion + 1}
        count={questionList.length} onSelect={handleAnswer}/>
        </>
    );
};

export default Quiz;