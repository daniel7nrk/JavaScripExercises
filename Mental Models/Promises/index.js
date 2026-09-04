function runGraph(graph, concurrency) {
  return new Promise((resolve, reject) => {
    const ids = Object.keys(graph);

    // STEP 1: counters — how many deps each task is still waiting on
    const waitingOn = {};
    ids.forEach(id => { waitingOn[id] = graph[id].deps.length; });

    // results collected so far
    const results = {};

    // how many tasks are running RIGHT NOW
    let running = 0;

    // tasks that are ready (waitingOn === 0) but maybe no free slot yet
    const readyQueue = ids.filter(id => waitingOn[id] === 0);

    // how many tasks have fully finished
    let completedCount = 0;

    function runTask(id) {
      running++; // took a slot

      // build the inputs object with only this task's own deps
      const inputs = {};
      graph[id].deps.forEach(depId => { inputs[depId] = results[depId]; });

      graph[id].run(inputs).then((value) => {
        running--;            // free the slot
        completedCount++;
        results[id] = value;

        // tell everyone who depends on "id" that it's done
        ids.forEach(otherId => {
          if (graph[otherId].deps.includes(id)) {
            waitingOn[otherId]--;
            if (waitingOn[otherId] === 0) {
              readyQueue.push(otherId); // ready, but wait for pump() to give it a slot
            }
          }
        });

        pump();
      });
    }

    // fills free slots with ready tasks; called every time something finishes
    function pump() {
      while (running < concurrency && readyQueue.length > 0) {
        const id = readyQueue.shift();
        runTask(id);
      }
      if (completedCount === ids.length) {
        resolve(results);
      }
    }

    pump(); // kick off the first available tasks
  });
}

// ---------------- your task functions ----------------

function runNodeOne() {
  return new Promise(resolve => {
    setTimeout(() => { console.log('running node one'); resolve('A'); }, 1000);
  });
}
function runNodeTwo() {
  return new Promise(resolve => {
    setTimeout(() => { console.log('running node two'); resolve('B'); }, 2000);
  });
}
function runNodeThree() {
  return new Promise(resolve => {
    setTimeout(() => { console.log('running node three'); resolve('C'); }, 3000);
  });
}
function runNodeFour() {
  return new Promise(resolve => {
    setTimeout(() => { console.log('running node four'); resolve('D'); }, 4000);
  });
}
function runNodeFive() {
  return new Promise(resolve => {
    setTimeout(() => { console.log('running node five'); resolve('E'); }, 5000);
  });
}

const graph = {
  a: { deps: [],         run: runNodeOne },
  b: { deps: ['a'],      run: runNodeTwo },
  c: { deps: ['a'],      run: runNodeThree },
  d: { deps: ['b','c'],  run: runNodeFour },
  e: { deps: ['d'],      run: runNodeFive }
};

console.log('--- running with concurrency = 2 ---');


runGraph(graph, 2).then(result => {
  console.log('ALL DONE:', result);
});





// 18723645