import React from 'react';

import './styles/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__title-container">
                <h4 className="footer__title">Casa de Oración y Puerta del Cielo</h4>
            </div>
            <div className="footer__social">
                <a className="footer__link" href="#">
                    <FontAwesomeIcon className="footer__item" icon={faFacebook} />
                </a>
                <a className="footer__link" href="#">
                    <FontAwesomeIcon className="footer__item" icon={faInstagram} />
                </a>
                <a className="footer__link" href="#">
                    <FontAwesomeIcon className="footer__item" icon={faYoutube} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;