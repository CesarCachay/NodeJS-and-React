const helpers = require("./helpers");
const help2 = require("./exports");

const total = helpers.sum(150, 45);

console.log("TOTAL: " + total);

const mult = helpers.multiply(20, 10);

console.log("The total is: " + mult);

const division = help2.operation(300, 40);

console.log("The result is: " + division);
