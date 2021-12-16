import React, { useEffect, useState } from "react";
import './style.css';
import TopScoreItem from "./TopScoreItem";

const Topscore = () => {
    
    const [scoreList, setScoreList] = useState();

    useEffect(
        () => {
            fetch('https://raw.githubusercontent.com/marta-vaclavikova/superkviz-api/main/topscore.json')
                .then(response => response.json())
                .then(json => {
                    setScoreList(json);
                })
        }, []
    );

    return (
    <div className="topscore">

        <h2 className="topscore__title">Žebříček nejlepších</h2>

        <ul className="topscore__list">
            {scoreList &&
            scoreList.map(score => <TopScoreItem scoreItem={score} key={score.name}/>)}
        </ul>

    </div>

);
    };

export default Topscore;