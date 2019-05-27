let firstName = "Cesar";
let lastName = "Cachay";
let age = prompt("Guess Cesar's age ...");

// This is the old school way to concat variables!
let oldWayResult = firstName + " " + lastName + " " + age + " years old!";

// This is the ECMA Script way to insert variables in a message
let newWay = `${firstName} ${lastName} is ${age} years old!`;

// Both console.log will throw the same result!
console.log(oldWayResult);
console.log(newWay);
