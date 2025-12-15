const apiKey = "YOUR_API_KEY";  // replace with your Weather API key
const city = "Balaghat";        // city name

// Weather fetch function
async function loadWeather() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weatherBox").innerHTML = `
            📍 <b>${data.location.name}</b><br>
            🌡️ Temp: ${data.current.temp_c}°C<br>
            ☁️ Condition: ${data.current.condition.text}
        `;
    } catch (error) {
        document.getElementById("weatherBox").textContent = "Error: Unable to load weather!";
    }
}
loadWeather();

// Initialize Leaflet map
const latitude = 21.8129;
const longitude = 80.1838;

const map = L.map('map').setView([latitude, longitude], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("Balaghat")
    .openPopup();
