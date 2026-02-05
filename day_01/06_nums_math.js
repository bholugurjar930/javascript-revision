const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);// it will convert number to string and then give length of string
// console.log(balance.toFixed(2));// it will give number upto 2 decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// it will give number upto total 4 digits including before and after decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// it will convert number to string with commas according to locale (here en-IN is for India)
// console.log(typeof (hundreds.toLocaleString('en-IN')));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);// Math is a built-in object that has properties and methods for mathematical constants and functions.
console.log(Math.abs(-4));// it will give absolute value
console.log(Math.sqrt(16));// it will give square root
console.log(Math.pow(2, 3));// it is power function , it will give 2 to the power 3
console.log(Math.round(4.6));// it will round the number to nearest integer
console.log(Math.ceil(4.2));// it will round the number to next integer
console.log(Math.floor(4.9));// it will round the number to previous integer
console.log(Math.min(4, 3, 6, 8));// it will give minimum number
console.log(Math.max(4, 3, 6, 8));// it will give maximum number



console.log(Math.random());// it will give random number between 0 to 1 (1 not included)
console.log((Math.random()*10) + 1);// it will give random number between 1 to 10 (10 not included)
console.log(Math.floor(Math.random()*100) + 1);// it will give random **integer** number between 1 to 10 (10 included)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)// it is formula to generate random integer
//  between any two numbers (here between 10 to 20 inclusive)