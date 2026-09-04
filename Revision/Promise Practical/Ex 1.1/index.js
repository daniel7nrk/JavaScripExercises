// Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

// function fetchWithTimeout(url) {
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), 10);

//   return fetch(url, { signal: controller.signal })
//     .then(res => {
//       clearTimeout(timeoutId);
//       return res.json();
//     })
//     .catch(err => {
//       clearTimeout(timeoutId);
//       if (err.name === 'AbortError') {
//         throw new Error('Request timed out after 10ms');
//       }
//       throw err;
//     });
// }

async function fetchWithTimeout(city = 'kigali', timeoutMs = 10) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const API_KEY = "5d7cf6594bfd574078da8d5081c3df26";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url, { signal: controller.signal });
    // clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw err;
  }
}

// Test 1: 10ms — will almost certainly abort
fetchWithTimeout('kigali')
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err.message));

// Test 2: 5000ms — should succeed
fetchWithTimeout('kigali', 5000)
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err.message));