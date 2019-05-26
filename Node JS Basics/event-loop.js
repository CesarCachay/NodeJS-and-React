const fs = require("fs");
const fileName = "target.txt";
fs.readFile(fileName, (error, data) => {
  if (error) {
    // The only way to throw an error is file system or "fs" couldn't find a file called "target.txt"
    console.log(new Error("This is an error!"));
  }
  // This will give us the content of the file if fs could find it
  console.log(data.toString());
});
console.log("Node is async with promises!");

// Sync programming
const fs2 = require("fs");
const anotherFile = "example.txt";
const data = fs2.readFileSync(anotherFile);
console.log(data.toString());

console.log(
  "This is a sync function, and it was necesary to get 'data' first and then, this console.log was printed!"
);
