// This refers to the inclosing context and when It's inside a function you are refering whatever is between the curly braces

let nepal = {
  mountains: ["Everest", "Misti", "Fish Tail", "Annapurna"],
  printWithDash: function() {
    console.log("inside printWithDash", this); //Here is pointing the function
    setTimeout(function() {
      console.log("inside setTimeout", this); //HEre is pointing window object
      // console.log(this.mountains.join(" - "));
    }, 2000);
  }
};

alert(nepal.mountains);
nepal.printWithDash();

let turisticPlaces = {
  turism: ["Machu Picchu", "Zahara", "Amazonas", "Egipto"],
  splitWithDashes: function() {
    setTimeout(() => console.log(this.turism.join(" - ")), 2000);
  }
};

turisticPlaces.splitWithDashes();
