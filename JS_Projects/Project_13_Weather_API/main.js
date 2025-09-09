const API_KEY = "d6a744c201e3c509b71b11a74fb9a62b";
const UNIT = "metric";

const $ = (s) => document.querySelector(s);

async function getWeather(city) {
    if (!API_KEY || API_KEY.includes("d6a744c201e3c509b71b11a74fb9a62b")) {
        alert("Please add your OpenWeatherMap API key...");
        return;
    }

    const url = ;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("API data:", data);

    } catch (error) {
        console.error('Error:', error.message);
        alert('Error: ' + error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hell0");
    const form = document.querySelector("#searchForm");
    const cityInput = document.querySelector("#cityInput");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const city = cityInput.value;
        if (!city) {
            alert("Enter a city name");
            return;
        }
        console.log("SEARCHING:", city);
    });
});

// getWeather();

