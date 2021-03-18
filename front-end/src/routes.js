import React from "react";

import { BrowserRouter, Route, Switch, } from "react-router-dom";

import converter from './Components/Converter/converter';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path ="/" component={converter} exact />
            <Route component ={() => <div>Page not found 404!</div>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;

