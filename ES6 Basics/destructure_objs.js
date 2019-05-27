let thingsToDo = {
  morning: "Take breakfast",
  afternoon: "Take lunch",
  evening: "Workout",
  night: ["Sleep", "Dream"]
};

let { morning, afternoon } = thingsToDo;

// Doing this you change the value of the object that was specified in the beginning
morning = "Code";

console.log(morning, " - ", afternoon); //Code - Take lunch

// Normal Way
let uniStudent = student => {
  console.log(`${student.name} from ${student.university}`);
};

uniStudent({
  name: "Cesar",
  university: "Ricardo Palma University"
});

// Efficient Way
let secondStudent = student => {
  let { name, university } = student;
  console.log(`This our second student, ${name} from ${university}`);
};

secondStudent({
  name: "Vangelis",
  university: "Harvard University"
});

// Refactored Way
let thirdStudent = ({ name, university }) => {
  console.log(`Last student, ${name} from ${university}`);
};

thirdStudent({
  name: "Shiffu",
  university: "MIT"
});

// DESTRUCTURING ARRAYS!
let [firstMountain] = ["Huascarán", "Misti", "Colca"];
console.log(firstMountain);

let [, secondBeach] = ["Punta Sal", "Mancora", "Huanchaco"];
console.log(secondBeach);

let [, , thirdPlace] = ["Huacachina", "La Merced", "Tarapoto"];
console.log(thirdPlace);
