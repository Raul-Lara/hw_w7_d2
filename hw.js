//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

function print_all() {
  for (let i = 0; i < Object.values(person3).length; i++) {
    console.log(Object.values(person3)[i]);
  }
}
print_all();
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
  constructor(name, age) {
    this.name = name;
    this.agae = age;
  }
  printInfo = () => {
    console.log(`name: ${this.name} Age: ${this.age}`);
  };
}
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

let person = {
  name: "Mike",
  age: 22,
};
for (let i = 0; i < Object.keys(person).length; i++) {
  if (Array.isArray(Object.values(person)[i])) {
    console.log(Object.values(person)[i]);
  }
}
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let arr = "testing";
function the_str(string_) {
  if (arr.length > 10) console.log("Big word");
  else {
    console.log("Small Number");
  }
}

the_str(arr);
