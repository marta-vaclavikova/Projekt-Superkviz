import React from "react";
import './style.css';
import questionMark from './img/question-mark-logo.svg';

const Intro = () => (
    <div className="intro">
        <div className="intro__column">

            <h2 className="intro__title">Vítej v superkvízu</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque, soluta ad harum, nihil cum ducimus quo ut ipsum, ab vel voluptatum laboriosam pariatur reprehenderit eligendi? Quae, nisi. Eveniet laudantium minus facilis error voluptas exercitationem suscipit fugit velit quidem magni sapiente, ducimus optio sequi beatae non ratione molestias, corporis tenetur.</p>
        </div>


        <div className="intro__column">
            <img className="intro__logo" src={questionMark} alt="logo" />
        </div>
    </div>
);

export default Intro;