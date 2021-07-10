import React from 'react';
import './styles/Header.css';

import Logo from '../assets/Logo.png'

function Header(){
    return(
        <header className="header">
            <img tabIndex="0" aria-label="Casa de oración y puerta del cielo" className="header__logo" src={Logo} alt="Logo" />
            <div className="header__title-container">
                <h1 className="header__title">Casa de Oración y Puerta del Cielo</h1>
                <h2 tabIndex="0" className="header__text">"Formando <span className="red">Discípulos</span> para <span className="red">Cristo</span>"</h2>
            </div>
        </header>
    );
}

export default Header;