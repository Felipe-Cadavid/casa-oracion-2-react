import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from '../pages/Home';
import Comollegar from '../pages/Comollegar';
import Instituto from '../pages/Instituto';
import PeticionesController from './PeticionesController';
import Admin from '../pages/Admin/Admin';

function App(){
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/como-llegar" component={Comollegar}/>
                <Route exact path="/cursos" component={Instituto}/>
                <Route exact path="/peticiones" component={PeticionesController}/>
                <Route exact path="/admin" component={Admin}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;