import React from 'react';
import Logo from '../assets/Logo.png'

function Service({ title = "Prueba", image = Logo, text = "Texto" }){
    return(
        <article className="services__service">
            <h3 tabIndex="0" className="service__title">{title}</h3>
            <img tabIndex="0" className="service__img" src={image} alt="Culto Presencial" />
            <p tabIndex="0" className="service__desc">{text}</p>
        </article>
    )
}

export default Service;