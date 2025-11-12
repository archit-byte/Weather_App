const apiKey = '911ec25d33998d85cd238928d4524feb'; // replace YOUR_API_KEY with your real key
async function fetchWeatherData(city) {const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('Weather data:', data);
    // Code to update DOM with the weather information
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}
document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  fetchWeatherData(city);
});


