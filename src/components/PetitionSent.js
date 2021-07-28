import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PetitionSent.css';

function PetitionSent(props){

    const handleClick = e => {
        props.restart();
    }

    return(
        <main className="main">
            <section className="request-sent">
                <h3 className="request-sent__title">¡Tu petición fue enviada!</h3>
                <p className="request-sent__p">Estaremos orando por tu petición</p>
                <p className="request-sent__p">Dios te bendiga</p>
                <div className="buttons-container">
                    <Link tabIndex="-1" to="/">
                        <button tabIndex="0" className="button-inicio">Inicio</button>
                    </Link>
                    <button onClick={handleClick} tabIndex="0" className="button-request">Hacer otra petición</button>
                </div>
            </section>
        </main>
    )
}

export default PetitionSent;