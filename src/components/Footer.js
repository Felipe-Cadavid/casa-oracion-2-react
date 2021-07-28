import React from 'react';

import './styles/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__title-container">
                <h4 data-testid="footer__title" className="footer__title">Casa de Oración y Puerta del Cielo</h4>
            </div>
            <div data-testid="footer__social" className="footer__social">
                <a className="footer__link" href="https://www.facebook.com/CasaDeOracionYPuertaDelCielo7/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="footer__item" icon={faFacebook} />
                </a>
                <a className="footer__link" href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="footer__item" icon={faInstagram} />
                </a>
                <a className="footer__link" href="https://www.youtube.com/c/CasaDeOraci%C3%B3nVillahermosa" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className="footer__item" icon={faYoutube} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;