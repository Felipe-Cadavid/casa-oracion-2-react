import React from 'react';
import Layout from '../../components/Layout';

import './styles/Admin.css'

import PeticionesList from '../../components/Admin/PeticionesList';

function Admin(){
     return(
        <Layout>
            <main className="main">
                <PeticionesList />
            </main>
        </Layout>
     );
}

export default Admin;