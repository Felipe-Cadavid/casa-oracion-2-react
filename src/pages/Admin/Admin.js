import React from 'react';
import Layout from '../../components/Layout';

import './styles/Admin.css'
import Logo from '../../assets/Logo.png'

import PeticionesList from '../../components/Admin/PeticionesList';
import NewsController from '../../components/Admin/NewsController';
import CursosController from '../../components/Admin/CursosController';
function Admin(){
    const [tab, setTab] = React.useState('default');

    function handleClick(e){
        setTab(`${e.target.outerText}`);
    }

    return(
    <Layout>
        <main className="main">
            <div className="admin-buttons-container">
                <button onClick={handleClick} className="admin__button">Peticiones</button>
                <button onClick={handleClick} className="admin__button">Noticias</button>
                <button onClick={handleClick} className="admin__button">Instituto</button>
            </div>
            {tab === 'default' &&
                <section className="control-panel-container">
                    <h2 className="control-panel__title">Panel de control</h2>
                    <img className="control-panel__image" src={Logo} alt="Logo" />
                </section>
            }
            {tab === 'Peticiones' &&
                <PeticionesList />
            }
            {tab === 'Noticias' &&
                <NewsController/>
            }
            {tab === 'Instituto' &&
                <CursosController />
            }
        </main>
    </Layout>
    );
}


export default Admin;