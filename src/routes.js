import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Erro from './pages/Erro';
import Painel from './pages/Painel';

import { autenticado } from './auth';

const PrivateRoute = ({ component : Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathName: '/', state: {from: props.location}}} />
        )
    )} />
);

const Routes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <PrivateRoute exact path="/painel" component={Painel} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );    
}

export default Routes;