import React from 'react';
import Layout from '../components/Layout';
import './styles/Comollegar.css';

import Mapa from '../assets/MapaIglesia.png';

function Comollegar(){
    return(
        <Layout>
            <main className="main">
                <article className="instructions">
                    <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.5766722453923!2d-75.54846333654832!3d6.238923444932091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442866357dd023%3A0x4e989f2bd150983a!2sCentro%20Comercial%20La%20Central!5e0!3m2!1sen!2sco!4v1624058966845!5m2!1sen!2sco" allowFullScreen="" loading="lazy"></iframe>
                    <p className="instructions__description">Nuestra iglesia se encuentra ubicada dentro del centro comercial La Central, es posible llegar utilizando el metro, a través del tranvía de Ayacucho, deberás bajarte en la estación Miraflores, de ahí, subir las escaleras que llevan a la cancha de miraflores y de ahí, subir las escaleras que salen a la carrera 25, caminar derecho por esa calle y hallarás el centro comercial.</p>
                    <p className="instructions__description">Estamos ubicados dentro del centro comercial en el piso 6, salón de Ayacucho.</p>
                    <p className="instructions__description">A continuación te mostramos una imagen donde se puede ver la ruta a tomar para llegar al bajarse de la estación Miraflores del tranvía.</p>
                    <img className="instructions__map" src={Mapa} alt="Mapa de guía" />
                </article>
            </main>
        </Layout>
    )
}

export default Comollegar;