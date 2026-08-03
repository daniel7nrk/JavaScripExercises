function one(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Promise 1 resolved");
            resolve("Promise 1 resolved");
        }, 1000);
    });
}

let ans = await one();
console.log(ans);
