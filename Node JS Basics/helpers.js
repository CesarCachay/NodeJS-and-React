// Normal function
// function sum(a, b) {
//   return a + b;
// }

// Arrow function and this is the normal way
const sum = (x, y) => {
  return x + y;
};

// When u want to write just 1 line it means just the "return"
multiply = (w, p) => w * p;

module.exports = {
  sum,
  multiply
};

// Creating simple server with Node JS

const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from Node JS again!");
});

// This is the port we are going to specify
server.listen(3000);
