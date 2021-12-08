import React from "react";
import Menu from "../Menu";
import './style.css';

const Header = () => (
    <header className="header">

        <h1 className="header__title">Superkvíz</h1>

        <Menu/>

    </header>
);

export default Header;