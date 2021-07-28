import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Comollegar from '../pages/Comollegar';
import PeticionesController from './PeticionesController';
import Admin from '../pages/Admin/Admin';
import NotFound from '../pages/NotFound';
import Instituto from '../pages/Instituto';

function App(){
    return(
        <HashRouter basename="/">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/como-llegar" component={Comollegar}/>
                <Route exact path="/peticiones" component={PeticionesController}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/instituto" component={Instituto} />
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    );
}

export default App;