// const fs = require('node:fs');

// fs.readFile('/file.json', (err, data) => {
//   if (err) {
//     console.log(err);
//     return; // stop here, don't touch `data`
//   }
//   console.log(data); // safe to use
// });


// for (var i = 1; i <= 3; i++) {
//  setTimeout(() => {
//  console.log('var i:', i);
//  }, 100);
// }

// for (let j = 1; j <= 3; j++) {
//  setTimeout(() => {
//  console.log('let j:', j);
//  }, 100);
// }



function countdown(from) {
  let current = from;

  const id = setInterval(() => {
    if (current <= 0) {
      console.log('Liftoff!');
      clearInterval(id);
      return;
    }
    
    console.log(current);
    current--;
  }, 1000);
}

countdown(3);