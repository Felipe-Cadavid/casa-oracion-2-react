import React from 'react';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import PetitionSent from '../components/PetitionSent';

import WhatsappLogo from '../assets/Whatsapp.png';

import './styles/Peticiones.css';

function Peticiones(props){
    return(
        <Layout>
            {props.loading ? 
                <main className="main">
                    <section className="request--loading">
                        <Loader />
                    </section>
                </main>
                : props.petitionSent ?
                    <PetitionSent restart={props.restart} />
                :
                <main className="main">
                <section className="request">
                    <h3 tabIndex="0" className="request__title">Envíanos tu petición</h3>
                    <article className="request__verse">
                        <p tabIndex="0" className="verse">"Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho."</p>
                        <p tabIndex="0" className="verse-cite">Santiago 5:16</p>
                    </article>
                    <form className="request__form">
                        <fieldset className="form__fieldset">
                            <label className="form__label">
                                Nombre
                                <input onChange={props.handleChange} className="form__input" tabIndex="0" type="text" required placeholder="Ingresa tu nombre" />
                            </label>
                        </fieldset>
                        <fieldset className="form__fieldset">
                            <label className="form__label">
                                Petición
                                <textarea onChange={props.handleChange} className="form__textarea" tabIndex="0" type="text" placeholder="Escribe aquí tu petición..." required></textarea>
                            </label>
                        </fieldset>
                        <fieldset className="form__fieldset">
                            <button onClick={props.handleClick} className="form__button" type="submit">Enviar</button>
                        </fieldset>
                    </form>
                </section>

                <section className="whatsapp">
                    <div className="whatsapp__title">
                        <img className="whatsapp__img" src={WhatsappLogo} aria-hidden="true" alt="Whatsapp Logo" />
                        <p>También puedes hacernos tu petición a través de WhatsApp si deseas.</p>
                    </div>
                    <a className="whatsapp__button" href="https://api.whatsapp.com/send?phone=573103636920&text=Hola,%20deseo%20hacer%20una%20petici%C3%B3n%20de%20oraci%C3%B3n." rel="noreferrer" target="_blank">Haz click aquí</a>
                </section>
            </main>
            }
            
        </Layout>
    )
}

export default Peticiones;