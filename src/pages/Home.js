import React from 'react';
import Layout from '../components/Layout';
import VerseOfDay from '../components/VerseOfDay';
import Service from '../components/Service';
import NoticiasSection from '../components/NoticiasSection';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Logo from '../assets/Logo.png';
import './styles/Home.css';

function Home(){
    return(
            <main className="main">
                
                <VerseOfDay />

                <section className="welcome">
                    <h1 className="welcome__title">Bienvenido a Casa de Oración y Puerta del Cielo</h1>
                    <p className="welcome__description">Nuestro propósito es exaltar el nombre de Dios, Disfrutar de su presencia y compartir con otros el gozo de su salvación.</p>
                </section>

                <section className="news">
                    <NoticiasSection />
                </section>

                <section className="services">
                    <h2 tabIndex="0" className="services__title">Nuestros servicios</h2>
                    <div className="services__container">
                        <Service 
                            title="Culto Dominical"
                            image={Logo}
                            text={<>Te invitamos a nuestro culto dominical, donde nos deleitaremos en la palabra del Señor todos los <span className="red">Domingos</span> a las 10:00 AM en el sexto piso del Centro Comercial La Central, encuentra cómo llegar <Link to="/como-llegar">aquí</Link>.</>}
                            verse={<>"Yo me alegré con los que me decían: A la casa de Jehová iremos."<span>Salmos 122:1</span></>}
                        />
                        <hr />
                        <Service 
                            title="Noches de Clamor"
                            image={Logo}
                            text={<>Todos los días en la noche, te invitamos a que clamemos por tus peticiones a través de meet.</>}
                            verse={<>"Claman los justos, y Jehová oye, Y los libra de todas sus angustias."<span>Salmos 34:17</span></>}
                        />
                        <hr />
                        <Service
                            title="Matutino"
                            image={Logo}
                            text={<>En nuestro matutino todas las mañanas a las 5:00 AM de Lunes a Viernes estaremos orando por tus peticiones, no olvides dejarnos tu petición <Link to="/peticiones">aquí</Link>.</>}
                            verse={<>"Dios, Dios mío eres tú; De madrugada te buscaré; Mi alma tiene sed de ti, mi carne te anhela, En tierra seca y árida donde no hay aguas,"<span>Salmos 63:1</span></>}
                        />
                    </div>
                    
                </section>

                

                <section className="pageitems-container">
                    <article className="peticiones-article">
                        <div className="peticiones-image"></div>
                        <Link to="/peticiones">
                            <div className="peticiones-button">Peticiones</div>
                        </Link>
                    </article>
                    <article className="programacion-article">
                        <div className="programacion-image"></div>
                        <div className="programacion-button">Nuestra Programacion</div>
                    </article>
                    <article className="comollegar-article">
                        <div className="comollegar-image">
                        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.5766722453923!2d-75.54846333654832!3d6.238923444932091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442866357dd023%3A0x4e989f2bd150983a!2sCentro%20Comercial%20La%20Central!5e0!3m2!1sen!2sco!4v1624058966845!5m2!1sen!2sco" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <Link to="/como-llegar">
                            <div className="comollegar-button">Cómo llegar</div>
                        </Link>
                    </article>
                </section>

                <section className="social">
                    <h2 className="social__title">Nuestras redes</h2>
                    <p className="social__desc">Siguenos en nuestras redes sociales para estar al día con la información de nuestra iglesia</p>
                    <div className="social__items-container">
                        <a className="social__link" href="https://www.facebook.com/CasaDeOracionYPuertaDelCielo7/" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon className="social__item" icon={faFacebook} />
                        </a>
                        <a className="social__link" href="https://www.instagram.com/" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon className="social__item" icon={faInstagram} />
                        </a>
                        <a className="social__link" href="https://www.youtube.com/c/CasaDeOraci%C3%B3nVillahermosa" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon className="social__item" icon={faYoutube} />
                        </a>
                    </div>
                </section>
            </main>
    )
}

export default Home;