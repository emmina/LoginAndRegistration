import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';

class Router extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path="/"exact component={Home} />
            </Switch>
        )
    }
}

export default Router;