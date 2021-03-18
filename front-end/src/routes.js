import React from "react";

import { BrowserRouter, Route, Switch, } from "react-router-dom";

import converter from './components/converter/converter';
import login from './components//pages/Login/login';
import register from './components/pages/Login/Register/register';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path ="/" component={login} exact />
            <Route path ="/register" component={register}  />
            <Route path ="/converter" component={converter} />
            <Route component ={() => <div>Page not found 404!</div>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;

