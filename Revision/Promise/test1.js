// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("I'm an error!");
//     resolve("I'm a Promise!");
//   }, 5000);
// });

// promise
//   .then(value => console.log(value)) // Logs after 5 seconds: "I'm a Promise!"
//   .catch(error => console.error(error))  // Handles any rejection
//   .finally(() => console.log("Done"));     // Runs regardless of success or failure



  
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

/**************************     3     ***************************************/


// const API_KEY = "5d7cf6594bfd574078da8d5081c3df26";
// const city = `kigali`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// new Promise(function(resolve,reject){
//   resolve(fetch(url)
//           .then(res => res.json())
//           // .then(res=>console.log(res))
//         )
// }).then(data=>console.log(data))



/**************************     4     ***************************************/


function fetchData(fn) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => fn(json));
}

const asyncThunk = function () {
  return fetchData(function getData(data) {
    console.log(data);
  });
};

asyncThunk();