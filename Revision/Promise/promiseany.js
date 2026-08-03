// promise.any() method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1500);
});

const p2 = new Promise((resolve, reject) => reject("promise 2 rejected"));

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});

const p4 = Promise.any([p1, p2, p3]).then(value => console.log(value)).catch(err => console.log(err));
console.log(p4);