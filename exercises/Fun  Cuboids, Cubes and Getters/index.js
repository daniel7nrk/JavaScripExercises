class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get volume() {
    return(this.length * this.width * this.height);
  }

  get surfaceArea() {
    return 2 * ( this.length * this.width + this.length * this.height +  this.width * this.height );
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

let cube1 = new Cuboid(3,5,7)
console.log(cube1.volume);
console.log(cube1.surfaceArea);
console.log("---------------------");

let cube2 = new Cuboid(1, 2, 3);
console.log(cube2.volume);
console.log(cube2.surfaceArea);
console.log("---------------------");

let cube3 = new Cube(1);
console.log(cube3.volume);
console.log(cube3.surfaceArea);
console.log("---------------------");
