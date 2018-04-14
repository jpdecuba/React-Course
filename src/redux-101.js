import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCOunt = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducer

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCOunt({decrementBy: 10}));

store.dispatch(decrementCOunt());

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));

