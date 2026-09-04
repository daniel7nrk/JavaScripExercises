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

async function displayValues() {
  await new Promise(resolve => setTimeout(() => {
    console.log("B");
    resolve();
  }, 0));

  queueMicrotask(() => {
    console.log("A");
  });
}

displayValues();