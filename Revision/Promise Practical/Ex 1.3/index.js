function fetchWithRetry(url, retries = 3) {
  return new Promise((resolve, reject) => {
    
    function attempt(remaining) {
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
          return res.json();
        })
        .then(resolve)
        .catch(err => {
          if (remaining > 0) {
            console.log(`Retrying... attempts left: ${remaining}`);
            attempt(remaining - 1);
          } else {
            reject(err);
          }
        });
    }

    attempt(retries);
  })
}

const API_KEY = "5d7cf6594bfd574078da8d5081c3df26";
const city = "kigaldi"; //change this to work and not work
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

fetchWithRetry(url, 3)
  .then(data => console.log('Success: ', data.main.temp))
  .catch(err => console.error('Failed after retries:', err.message));

  