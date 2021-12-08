import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const Menu = () => {
    const menuClass = ({isActive}) => `menu__link ${isActive ? 'menu__link--active' : ''}`;
    return (
        <nav className="menu">
            <NavLink to="/" className={isActive => menuClass(isActive)}>Úvod</NavLink>
            <NavLink to="/kvizy" className={isActive => menuClass(isActive)}>Kvízy</NavLink>
            <NavLink to="/zebricek" className={isActive => menuClass(isActive)}>Žebříček</NavLink>
        </nav>
    );
};

export default Menu;