// when you have a promise that is rejected, the Promise.all() method will reject immediately with that error, and it will not wait for the other promises to complete. In contrast, Promise.allSettled() will wait for all promises to settle (either fulfilled or rejected) and return an array of objects describing the outcome of each promise.

const p1 = new Promise((resolve, reject) => resolve("Promise 1 resolved"));
const p2 = new Promise((resolve, reject) => reject("Promise 2 rejected"));
const p3 = new Promise((resolve, reject) => resolve("Promise 3 resolved"));

const p4 = Promise.allSettled([p1, p2, p3])
    .then(value => console.log(value[1]))
    .catch(err => console.error(err));
