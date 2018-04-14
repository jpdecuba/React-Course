import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Navbar from './navbar';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Projects = () => (
    <div>
        test
    </div>
);

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

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(routes, document.getElementById('app'));