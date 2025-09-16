const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const geoBtn = document.getElementById("geoBtn");
const unitToggle = document.getElementById("unitToggle");
const currentCard = document.getElementById("currentCard");
const forecastRow = document.getElementById("forecastRow");
const toastElement = document.getElementById("appToast");

const currentLocation = document.getElementById("currentLocation");
const currentDate = document.getElementById("currentDate");
const weatherIcon = document.getElementById("weatherIcon");
const currentTemp = document.getElementById("currentTemp");
const weatherDescription = document.getElementById("weatherDescription");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");

const API_KEY = "d6a744c201e3c509b71b11a74fb9a62b";
let currentCity = "Delhi";
let units = "metric";

async function getWeatherData(city, units) {
    try {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;

        const [weatherResponse, forecastResponse] = await Promise.all([fetch(weatherURL),
        fetch(forecastURL)
        ]);

        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error("City not found or API error.");
        }

        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();

        console.log("Current Weather Data:", weatherData);
        console.log("5-Day Forecast Data:", forecastData);

        return { weatherData, forecastData };
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

function displayCurrentWeather(data){
    currentCard.classList.remove("shimmer");

    const locationName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const feelsLikeTemp = Math.round(data.main.feels_like);
    const humidityData = data.main.humidity;
    const description = data.weather[0].description;

    currentLocation.textContent = `${locationName}, ${country}`;
    currentTemp.textContent = temp;
    feelsLike.textContent = `Feels like: ${feelsLikeTemp}°`;
    humidity.textContent = `Humidity: ${humidityData}%`;
    weatherDescription.textContent = description;
    weatherIcon.alt = description;
}