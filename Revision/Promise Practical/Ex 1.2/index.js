// function displayNumbers() {
//   let count = 1;

//   const intervalId = setInterval(() => {
//     console.log(count);
//     count++;
//   }, 2000);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Stopped');
//   }, 5000);
// }

// displayNumbers();


/************************************************************/

function displayNumbers(signal) {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count);
    count++;
  }, 2000);

  signal.addEventListener('abort', () => {
    clearInterval(intervalId);
    console.log('Stopped after abort.');
  });
}

const controller = new AbortController();

displayNumbers(controller.signal);

// auto-abort after 5 seconds
setTimeout(() => controller.abort(), 5000);