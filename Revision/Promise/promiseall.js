const p1 = new Promise((resolve, reject) => resolve("Promise 1 resolved"));
const p2 = new Promise((resolve, reject) => resolve("Promise 2 resolved"));
const p3 = new Promise((resolve, reject) => resolve("Promise 3 resolved"));

const p4 = Promise.all([p1, p2, p3]).then(value => console.log(value)).catch(err => console.error(err));

// when you have a promise that is rejected, the Promise.all() method will reject immediately with that error, and it will not wait for the other promises to complete. In contrast, Promise.allSettled() will wait for all promises to settle (either fulfilled or rejected) and return an array of objects describing the outcome of each promise.

// const p1 = new Promise((resolve, reject) => resolve("Promise 1 resolved"));
// const p2 = new Promise((resolve, reject) => reject("Promise 2 rejected"));
// const p3 = new Promise((resolve, reject) => resolve("Promise 3 resolved"));

// const p4 = Promise.all([p1, p2, p3]).then(value => console.log(value)).catch(err => console.error(err));
// console.log(p4);