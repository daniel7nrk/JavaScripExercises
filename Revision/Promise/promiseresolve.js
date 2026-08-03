const p = Promise.resolve("42");
// p.then(value => console.log("Correct: " + value));

async function run(){
  try {
    const r = await p;
    console.log("Fulfilled: ", r);
  } catch (err) {
    console.log("Error: " + err);
  }
}

run();