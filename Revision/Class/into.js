//A class is a blueprint for creating objects — bundling data and behavior together.
//Before ES6: developers faked classes with the constructor/prototype pattern.
//With ES6: the class keyword provides cleaner syntax — but it's still syntactic sugar over prototypal inheritance under the hood.






class Person {

  constructor(name) {
    this.name = name;
  }
  
  display() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let p = new Person("Alice");

p.display();
