import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const TopScoreItem = ({ scoreItem }) => (
    <li className="topscore__item">
        <span className="topscore__name">{scoreItem.name}</span>
        <span className="topscore__score">{scoreItem.score}</span>
    </li>
);

export default TopScoreItem;