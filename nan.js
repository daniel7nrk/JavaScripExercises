// console.log("A");
// setTimeout(() => {
//     console.log("B");
//     Promise.resolve().then(() => {
//         console.log("C");
//         setTimeout(() => {
//             console.log("D");
//         }, 0);
//     });
//     queueMicrotask(() => {
//         console.log("E");
//     });
// }, 0);
// Promise.resolve().then(() => {
//     console.log("F");
//     setTimeout(() => {
//         console.log("G");
//     }, 0);
//     queueMicrotask(() => {
//         console.log("H");
//     });
// });
// queueMicrotask(() => {
//     console.log("I");
//     Promise.resolve().then(() => {
//         console.log("J");
//     });
// });
// console.log("K");



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Start small. Ship something.");


// console.log(1);

// setTimeout(() => {
//   console.log(2);
  
//   new Promise((resolve) => {
//     console.log(3);
//     setTimeout(() => {
//       console.log(4);
//       resolve(5);
//     }, 0);
//   }).then((val) => {
//     console.log(val);
//   });

//   console.log(6);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(7);
// });

// console.log(8);

// numbers = [1,2,3,4]
// // numbers.map(i =>console.log(i))
// for(number in numbers){
//     console.log(number)
// }


/************************************    4   ***************************************/

// async function displayValues() {
//   await new Promise(resolve => setTimeout(() => {
//     console.log("B");
//     resolve();
//   }, 0));

//   queueMicrotask(() => {
//     console.log("A");
//   });
// }

// displayValues();


/************************************    5   ***************************************/


async function getUserDashboard() {
  try {
    // Start all three requests at the same time (no await in between)
    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts?userId=1'),
      fetch('https://jsonplaceholder.typicode.com/todos?userId=1'),
    ]);

    // Check every response succeeded before touching the body
    if (!userRes.ok) {
      throw new Error(`Failed to fetch user: ${userRes.status}`);
    }
    if (!postsRes.ok) {
      throw new Error(`Failed to fetch posts: ${postsRes.status}`);
    }
    if (!todosRes.ok) {
      throw new Error(`Failed to fetch todos: ${todosRes.status}`);
    }

    // Parse all bodies in parallel too — no reason to await one before the next
    const [user, posts, todos] = await Promise.all([
      userRes.json(),
      postsRes.json(),
      todosRes.json(),
    ]);

    return { user, posts, todos };
  } catch (error) {
    console.error('getUserDashboard failed:', error);
    throw error; // re-throw so the caller knows it failed
  }
}