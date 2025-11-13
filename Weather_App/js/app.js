const apiKey = '911ec25d33998d85cd238928d4524feb';

async function fetchWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log('Weather data:', data);

    if (data.cod === 200) {
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temperature').textContent = data.main.temp + " °C";
      document.getElementById('weather-description').textContent = data.weather[0].description;
    } else {
      alert("City not found!");
    }

  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

document.getElementById('search-btn').addEventListener('click', function () {
  const city = document.getElementById('city-input').value.trim();
  fetchWeatherData(city);
});