//  https://openweathermap.org/api


const API_KEY = "5d7cf6594bfd574078da8d5081c3df26";
 
async function fetchWeather() {
  const output = document.getElementById("output");
  output.textContent = "Loading...";
 
  try {
    const city = document.getElementById("cityName").value.trim();
 
    if (!city) {
      throw new Error("Please enter a city name");
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
 
    // if (!response.ok) {
    //   if (response.status === 401) {
    //     throw new Error("Invalid API key - check your key is correct and active");
    //   }
    //   if (response.status === 404) {
    //     throw new Error(`City "${city}" not found`);
    //   }
    //   throw new Error(`Request failed with status ${response.status}`);
    // }
 
    const data = await response.json();

    console.log(data);
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const cityFound = data.name;
    const country = data.sys.country;
 
    output.textContent = 
      `${cityFound}, ${country}\n` +
      `Temperature: ${temp}°C\n` +
      `Conditions: ${description}`;
  } catch (error) {
    // output.textContent = "Error: " + error.message;
    // console.error(error);
  }
}