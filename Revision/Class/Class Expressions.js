
// Just like functions, classes can be declared or written as expressions — a value assigned to a variable, optionally with no name at all.


// Named vs. Unnamed
// An unnamed (anonymous) expression omits the class identifier. A named expression keeps a name, but that name is only visible inside the class body itself.

// Class expressions aren't hoisted either — the variable must exist before you can instantiate from it.




// Class declaration

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const p = new Person("Jane");
// p.greet();




// Class expression

const Person = class {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const p = new Person("Jane");

p.greet();