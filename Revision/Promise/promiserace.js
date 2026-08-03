// Promise.race() method returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 resolve")
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise 2 reject")
    },500)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 resolve")
    },3000)
})

const p4 = Promise.race([p1,p2,p3]).then(value=>console.log(value)).catch(value=>console.log(value))
console.log(p4);

