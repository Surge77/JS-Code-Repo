const score = 400;
// console.log(score);

const balance = new Number(100) // TO explcitly define the type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); -> Precision of value after the decimal point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); -> We get the priority before the decimal point

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); -> Give the numbers standards default is the USA system here we define it as Indian

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); -> Give absolute value, give positive values if it is negative
// console.log(Math.round(4.6)); -> rounds of the value
// console.log(Math.ceil(4.2)); -> selects upper value in this case 5
// console.log(Math.floor(4.9)); -> selects lower value in this case it is 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // Give the values from 0 to 1
console.log((Math.random()*10) + 1); // -> By doing *10 we shift the digits to left
console.log(Math.floor(Math.random()*10) + 1); // For getting values strictly greater than 1

// This is a little formula for generating random numbers
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)