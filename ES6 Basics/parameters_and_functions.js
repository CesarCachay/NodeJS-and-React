function welcome(user, message) {
  alert(`Hello ${user}, ${message}`);
}
welcome("Cesar", "I hope your are understanding this!");

// In this case we can call the function because we already are definning the parameters
function newMessage(person = "User", content = "your are awesome!") {
  console.log(`Hello ${person}, ${content}!`);
}
newMessage(); //We just need to call the function to print the console.log defined in the function

// This a normal function
function greet(message) {
  return console.log(`${message} to everyone!`);
}
greet("Good morning");

// This is using an arrow function
let greeting = message2 => console.log(`${message2}! From an arrow function!`);
greeting("Good night!");

// This is an arrow function with multiple if statements
let createBook = (title, body) => {
  //This means if isn't a title specified in the parameters
  if (!title) {
    throw new Error("Hey men you need to create a title for this!");
  }
  // This means if you didn't specify a body
  if (!body) {
    throw new Error("Your body can't be empty!");
  }
  console.log(`${title} - ${body}`);
};

createBook("The Miserables", "Is a awesome drama book!");

// This is an arrow function without arguments
let sayBye = () => console.log("Good bye I hope you are learning");

sayBye();
