// First way of reestructuring
var name = "Everest";
var height = 8848;
var output = function() {
  console.log(`Mt. ${this.name} is ${this.height} meter tall!`);
};

var adventureClimb = { name, height, output };
adventureClimb.output();

// Another way of reestructuring an object
var theUser = {
  name: "Cesar",
  age: 22,
  output: function() {
    console.log(`Mr. ${this.name} is ${this.age} years old`);
  }
};

theUser.output();

// Spread operators in arrays
let countries = ["Peru", "China", "USA", "Alemania"];
let moreCountries = ["España", "Canada"];

// When you use this you can concat all the content inside each variables
let allCountries = [...countries, ...moreCountries];
console.log(allCountries);

// Spread operators in objects
let favorites = {
  strategy: "Dota 2",
  royal: "PUBG",
  classic: "Starcraft"
};

let shooters = {
  singleplayer: "Left 4 Dead",
  multiplayer: "CSGO"
};

let totalGames = { ...favorites, ...shooters };

// Another example
let rivers = ["Amazonas", "Titicaca", "Rimac"];
var [first, ...rest] = rivers;

console.log(rest);

// Another with objects
let student = {
  name: "Cesar",
  last: "Cachay",
  age: 22,
  gender: "male"
};

var { primary, ...theRest } = student;

console.log(theRest);
