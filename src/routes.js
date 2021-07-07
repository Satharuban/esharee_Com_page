import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import NotFound from './components/utils/NotFound/NotFound';
import ActivationEmail from './pages/ActivationEmail';
import { useSelector } from 'react-redux'; 



function ClientRoute() {
    const auth = useSelector(state => state.auth)
    const { isLogged } = auth

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={isLogged ? NotFound : Login} />
            <Route exact path="/user/activate/:activation_token" component={ActivationEmail} />
            <Route exact path="/signUp" component={SignUp} />

        </Switch>
    );
}

export default ClientRoute;
