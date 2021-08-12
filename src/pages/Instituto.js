import React from 'react';

import Layout from '../components/Layout';
import InstitutoRecursos from '../components/InstitutoRecursos';

import './styles/Instituto.css';

function Instituto(){
    const [tab, setTab] = React.useState('Instituto');

    function handleClick(e){
        setTab(e.target.outerText);
    }

    return(
        <Layout>
            <main className="main">
                <h3 className="instituto__title">Instituto Bíblico</h3>
                <nav className="instituto__nav">
                    <ul className="instituto__nav-list">
                        <li onClick={handleClick} className="instituto__nav__recursos">Recursos</li>
                    </ul>
                </nav>
                {
                tab === "Instituto" ?
                    <div>Instituto</div>
                    :
                tab === "Recursos" &&
                    <InstitutoRecursos />
                }
            </main>
        </Layout>
    )
}

export default Instituto;