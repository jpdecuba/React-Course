const person = {
    name: 'andrew',
    age: 26,
    location: {
        city: 'tilly',
        temp: 12
    }
};

const {name = 'anon', age} = person;

console.log(`${name} is ${age}`); 