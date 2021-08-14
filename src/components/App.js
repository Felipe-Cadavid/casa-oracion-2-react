import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Comollegar from '../pages/Comollegar';
import PeticionesController from './PeticionesController';
import Admin from '../pages/Admin/Admin';
import NotFound from '../pages/NotFound';
import InstitutoMain from '../pages/InstitutoMain';
import Layout from './Layout';
import Course from '../pages/Course';

function App(){
    return(
            <HashRouter basename="/">
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/como-llegar" component={Comollegar}/>
                        <Route exact path="/peticiones" component={PeticionesController}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path="/instituto" component={InstitutoMain} />
                        <Route path="/instituto/:course" component={Course}/>
                        <Route path="/instituto/:course/recursos" component={Course}/>
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </HashRouter>

    );
}

export default App;