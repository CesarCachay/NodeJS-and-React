// This is an example of async programming refactored!
const fs = require("fs");
const file = "target.txt";
const errorHandler = error => console.log(new Error("I can't find this file!"));
const successHanlder = success => {
  console.log(success.toString());
};

fs.readFile(file, (error, success) => {
  if (error) errorHandler(error);
  successHanlder(success);
});

console.log("This is async that's why I'm first!");
