import {createStore, combineReducers} from 'redux';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'data',
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

// Filters reducer

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
    }
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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