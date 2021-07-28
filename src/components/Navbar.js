import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const [ isCollapsed, setIsCollapsed ] = React.useState(false);

    function determineCollapse(width = window.innerWidth){
        if(width > 800) setIsCollapsed(true);
    }
    React.useEffect(() => {
        determineCollapse();
    }, []);

    const menu = (
        <>
            <Link to='/'>
                <li data-testid="navbar__item" tabIndex="0" className="navbar--item">Inicio</li>
            </Link>
            <span className="navbar__division-row">|</span>

            <li tabIndex="0" className="navbar--item">Quiénes somos</li>
            <span className="navbar__division-row">|</span>
            
            <a href="https://www.bible.com/es/bible/149/GEN.1.RVR1960" rel="noreferrer" target="_blank">
                <li tabIndex="0" className="navbar--item">Biblia</li>
            </a>
            <span className="navbar__division-row">|</span>
            
            <Link to='/peticiones'>
                <li tabIndex="0" className="navbar--item">Peticiones</li>
            </Link>
            <span className="navbar__division-row">|</span>
            
            <li tabIndex="0" className="navbar--item">Apóyanos</li>
            <span className="navbar__division-row">|</span>
            
            <Link to='/como-llegar'>
                <li tabIndex="0" className="navbar--item">Cómo llegar</li>
            </Link>
            <span className="navbar__division-row">|</span>
            
            <li tabIndex="0" className="navbar--item">Nuestra programación</li>
            <span className="navbar__division-row">|</span>

            <Link to='/instituto'>
                <li tabIndex="0" className="navbar--item">Instituto Bíblico</li>
            </Link>
            <span className="navbar__division-row">|</span>
            
            <li tabIndex="0" className="navbar--item">Contáctanos</li>
        </>
    )

    const handleClick = () => {
        (isCollapsed) ? setIsCollapsed(false) : setIsCollapsed(true);
    }
    
    return(
        <nav className="navbar">
            <button data-testid="navbar__button" onClick={handleClick} aria-label="Botón de menú" className="navbar__button" type="button"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
            <ul className="navbar__list">
                {isCollapsed && menu}
            </ul>
        </nav> 
    );
}

export default Navbar;