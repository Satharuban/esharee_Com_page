import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home';



function ClientRoute() {


    return (
        <Switch>
            <Route exact path="/" component={Home} />
         
        </Switch>
    );
}

export default ClientRoute;
