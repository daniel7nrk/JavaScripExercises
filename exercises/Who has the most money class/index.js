class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

function mostMoney(students) {
  if (students.length === 1) {
    return students[0].name;
  }

  const totals = students.map(student => {
    return (
      student.fives * 5 +
      student.tens * 10 +
      student.twenties * 20
    );
  });
  
  console.log(totals);
  

  const maxMoney = Math.max(...totals);

  const allSame = totals.every(total => total === maxMoney);

  if (allSame) {
    return "all";
  }
  const winnerIndex = totals.indexOf(maxMoney);

  return students[winnerIndex].name;
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

console.log(mostMoney([andy, stephen, eric, david, phil]))                   // "Eric"
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil]))       // "Eric"
console.log(mostMoney([stephen]))                                            // "Stephen"
console.log(mostMoney([cam, geoff]))                                         // "all"
console.log(mostMoney([david, cam, geoff]))                                  // "all"
