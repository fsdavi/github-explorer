import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index';

const Routes: React.FC = () => (
    <Switch>
        <Route exact component={Dashboard} path="/" />
        <Route exact component={Repository} path="/repositories/:repository+" />
    </Switch>
);


export default Routes;