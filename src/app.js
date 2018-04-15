import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Projects from './Projects';
import Navbar from './navbar';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
        <Navbar></Navbar>
            <Switch>
                <Route path="/" exact={true} component={Main} />
                <Route path="/projects" component={Projects} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

render(routes, document.getElementById('app'));