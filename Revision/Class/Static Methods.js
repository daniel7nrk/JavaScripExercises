//Static methods are methods that belong to the class itself, rather than to objects created from that class.

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static sayHello() {
//     console.log("Hello!");
//   }
// }

// Person.sayHello();



class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }

  static info() {
    console.log("People have names.");
  }
}

const p = new Person("Daniel");

// p.greet();       
// Person.info();   

p.info();        
Person.greet();  