import React from 'react';
import Layout from '../components/Layout';

import './styles/NotFound.css';

function NotFound(){
    return(
        <Layout>
            <main className="main">
                <h1 className="notfound-title">EROR 404, NO ENCONTRADO</h1>
            </main>
        </Layout>
    )
}

export default NotFound;