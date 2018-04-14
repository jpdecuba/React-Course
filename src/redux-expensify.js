import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'sdfsdfs',
        description: 'rent',
        note: 'final payment',
        amount: 74500,
        createdAt: 0
    }]
    ,
    filters: {
        text: 'rent',
        sortBy: 'amount', //or amount
        startDate: undefined,
        endDate: undefined
    }
};