const helpers = require("./helpers");
const help2 = require("./exports");

const total = helpers.sum(150, 45);

console.log("TOTAL: " + total);

const mult = helpers.multiply(20, 10);

console.log("The total is: " + mult);

const division = help2.operation(300, 40);

console.log("The result is: " + division);

// Importing 2 arrow functions and using estructuring!
const { multipleAddition, exponential } = require("./exports");
const tripleAdd = multipleAddition(100, 50, 20);
const atPowerOf = exponential(2, 5);
console.log("The solution of this multiple addition is: " + tripleAdd);
console.log("The number 2 at the power of 5 is: " + atPowerOf);
