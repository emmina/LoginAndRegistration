import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Profile from '../components/Profile';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/"exact component={Home} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        )
    }
}

export default Router;