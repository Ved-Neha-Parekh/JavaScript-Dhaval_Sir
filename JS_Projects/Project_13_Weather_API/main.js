const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const currentCard = document.getElementById("currentCard");
const forecastRow = document.getElementById("forecastRow");
const currentLocation = document.getElementById("currentLocation");
const currentDate = document.getElementById("currentDate");
const currentTemp = document.getElementById("currentTemp");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");

let city = "Delhi";

async function getWeather(city) {
    const API_KEY = "d6a744c201e3c509b71b11a74fb9a62b";

    const UNIT = "metric"; // metric = celsius

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${UNIT}`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${UNIT}`;

    try {
        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
            throw new Error(`City not found: ${weatherResponse.statusText}`);
        }

        const weatherData = await weatherResponse.json();

        console.log("Current weather data: ", weatherData);

        displayCurrentWeather(weatherData);

        const forecastResponse = await fetch(forecastUrl);

        if (!forecastResponse.ok) {
            throw new Error(`Forecast data not found.`);
        }

        const forecastData = await forecastResponse.json();

        console.log("5-Day Forecast data:", forecastData);

        displayForecast(forecastData);
    } catch (error) {
        console.error("Error:", error.message);

        alert("Error: " + error.message);
    }
}

function displayForecast(data) {
    forecastRow.innerHTML = "";

    const dailyForecasts = data.list.filter((entry) => {
        return entry.dt_txt.includes("12:00:00");
    });

    if (dailyForecasts.length === 0) {
        for (let i = 0; i < 5; i++) {
            const shimmerDiv = document.createElement("div");

            shimmerDiv.classList.add("forecast-card", "shimmer");

            forecastRow.appendChild(shimmerDiv);
        }

        return;
    }

    dailyForecasts.forEach((forecast) => {
        const card = document.createElement("div");
        card.classList.add("forecast-card");
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDteString("en-US", { weekday: "short" });
        const temp = Math.round(forecast.main.temp);
        const iconCode = forecast.weather[0].icon;
        card.innerHTML = `

 <div class="mini opacity-75">${day}</div>

<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="Weather Icon" width="60" />

 <div class="fw-bold">${temp}°</div>

 `;
        forecastRow.appendChild(card);
    });
}

function displayCurrentWeather(data) {
    currentCard.classList.remove("shimmer");
    currentCard.classList.remove("d-none");
    const locationName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const feelsLikeTemp = Math.round(data.main.feels_like);
    const humidityData = data.main.humidity;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    currentLocation.textContent = `${locationName}, ${country}`;
    currentTemp.textContent = temp;
    feelsLike.textContent = `Feels like: ${feelsLikeTemp}°`;
    humidity.textContent = `Humidity: ${humidityData}%`;
    weatherDescription.textContent = description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const date = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    currentDate.textContent = date.toLocaleDateString("en-US", options);
}

// getWeather(city);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOm Loaded");
});

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        alert("plz enter city name");
        return;
    }

    console.log(`Searching city ${city}`);

    getWeather(city);
});
