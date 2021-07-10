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
                    <Link to="/">
                        <div className="button-inicio">Inicio</div>
                    </Link>
                    <div onClick={handleClick} className="button-request">Hacer otra petición</div>
                </div>
            </section>
        </main>
    )
}

export default PetitionSent;