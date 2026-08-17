// The get and set keywords let a class expose properties that run code on read or write — without the caller knowing it's a method call.


// get
// Defines a property that computes a value when read: person.age



// Set
// Defines a property that runs logic when assigned: person.age = 30












class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  display() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let p = new Person('Jane');

p.display();

p.name = 'Amy';

p.display();