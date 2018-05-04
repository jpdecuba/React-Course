



store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate(999));
// store.dispatch(setEndDate(1250));

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

const user = {
    name: 'Jen',
    age: 24
}

// console.log({
//     age: 27,
//     ...user,
//     location: 'Phili'
// });