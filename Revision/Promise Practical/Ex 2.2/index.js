async function runSequential(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

function runParallel(tasks) {
  return Promise.all(tasks.map((task) => task()));
}


const tasks = [
  () => delay(1000).then(() => "a"),
  () => delay(1000).then(() => "b"),
  () => delay(1000).then(() => "c"),
];

runSequential(tasks); // resolves ["a","b","c"] after ~3000ms
runParallel(tasks);   // resolves ["a","b","c"] after ~1000ms