import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import Projects from './Projects';
import Forecast from './Forecast';
import Navbar from './navbar';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

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
                <Route path='/forecast' component={Forecast} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

render(routes, document.getElementById('app'));