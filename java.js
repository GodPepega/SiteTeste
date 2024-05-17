const countriesData = {
    "Canada": { hemisphere: "Northern", continent: "North America", temperature: "Cold", population: "Medium", coordinates: { lat: 56.1304, lon: -106.3468 } },
    "Brazil": { hemisphere: "Southern", continent: "South America", temperature: "Hot", population: "High", coordinates: { lat: -14.2350, lon: -51.9253 } },
    "Australia": { hemisphere: "Southern", continent: "Oceania", temperature: "Hot", population: "Medium", coordinates: { lat: -25.2744, lon: 133.7751 } },
    "China": { hemisphere: "Northern", continent: "Asia", temperature: "Varies", population: "Very High", coordinates: { lat: 35.8617, lon: 104.1954 } },
    "France": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 46.6034, lon: 1.8883 } },
    "South Africa": { hemisphere: "Southern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: -30.5595, lon: 22.9375 } },
    "Germany": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "High", coordinates: { lat: 51.1657, lon: 10.4515 } },
    "Portugal": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 39.3999, lon: -8.2245 } },
    "Spain": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "High", coordinates: { lat: 40.4637, lon: -3.7492 } },
    "Italy": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "High", coordinates: { lat: 41.8719, lon: 12.5674 } },
    "Netherlands": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 52.1326, lon: 5.2913 } },
    "Mozambique": { hemisphere: "Southern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: -18.6657, lon: 35.5296 } },
    "Nigeria": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "Very High", coordinates: { lat: 9.0820, lon: 8.6753 } },
    "Kenya": { hemisphere: "Southern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: -1.2921, lon: 36.8219 } },
    "Egypt": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "High", coordinates: { lat: 26.8206, lon: 30.8025 } },
    "Ghana": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: 7.9465, lon: -1.0232 } },
    "Japan": { hemisphere: "Northern", continent: "Asia", temperature: "Varies", population: "High", coordinates: { lat: 36.2048, lon: 138.2529 } },
    "India": { hemisphere: "Northern", continent: "Asia", temperature: "Hot", population: "Very High", coordinates: { lat: 20.5937, lon: 78.9629 } },
    "Thailand": { hemisphere: "Northern", continent: "Asia", temperature: "Hot", population: "Medium", coordinates: { lat: 15.8700, lon: 100.9925 } },
    "Indonesia": { hemisphere: "Southern", continent: "Asia", temperature: "Hot", population: "Very High", coordinates: { lat: -0.7893, lon: 113.9213 } },
    "South Korea": { hemisphere: "Northern", continent: "Asia", temperature: "Varies", population: "High", coordinates: { lat: 35.9078, lon: 127.7669 } },
    "New Zealand": { hemisphere: "Southern", continent: "Oceania", temperature: "Mild", population: "Low", coordinates: { lat: -40.9006, lon: 174.8860 } },
    "Mexico": { hemisphere: "Northern", continent: "North America", temperature: "Hot", population: "High", coordinates: { lat: 23.6345, lon: -102.5528 } },
    "Argentina": { hemisphere: "Southern", continent: "South America", temperature: "Varies", population: "Medium", coordinates: { lat: -38.4161, lon: -63.6167 } },
    "United States": { hemisphere: "Northern", continent: "North America", temperature: "Varies", population: "Very High", coordinates: { lat: 37.0902, lon: -95.7129 } },
    "Russia": { hemisphere: "Northern", continent: "Europe/Asia", temperature: "Cold", population: "High", coordinates: { lat: 61.5240, lon: 105.3188 } },
    "United Kingdom": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "High", coordinates: { lat: 55.3781, lon: -3.4360 } },
    "Ireland": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 53.4129, lon: -8.2439 } },
    "Sweden": { hemisphere: "Northern", continent: "Europe", temperature: "Cold", population: "Medium", coordinates: { lat: 60.1282, lon: 18.6435 } },
    "Norway": { hemisphere: "Northern", continent: "Europe", temperature: "Cold", population: "Low", coordinates: { lat: 60.4720, lon: 8.4689 } },
    "Poland": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 51.9194, lon: 19.1451 } },
    "Austria": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 47.5162, lon: 14.5501 } },
    "Denmark": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Low", coordinates: { lat: 56.2639, lon: 9.5018 } },
    "Switzerland": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Low", coordinates: { lat: 46.8182, lon: 8.2275 } },
    "Belgium": { hemisphere: "Northern", continent: "Europe", temperature: "Mild", population: "Medium", coordinates: { lat: 50.8503, lon: 4.3517 } },
    "Angola": { hemisphere: "Southern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: -11.2027, lon: 17.8739 } },
    "Tanzania": { hemisphere: "Southern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: -6.3690, lon: 34.8888 } },
    "Uganda": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: 1.3733, lon: 32.2903 } },
    "Morocco": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "Medium", coordinates: { lat: 31.7917, lon: -7.0926 } },
    "Ethiopia": { hemisphere: "Northern", continent: "Africa", temperature: "Hot", population: "High", coordinates: { lat: 9.1450, lon: 40.4897 } },
    "Pakistan": { hemisphere: "Northern", continent: "Asia", temperature: "Hot", population: "Very High", coordinates: { lat: 30.3753, lon: 69.3451 } },
    "Vietnam": { hemisphere: "Northern", continent: "Asia", temperature: "Hot", population: "High", coordinates: { lat: 14.0583, lon: 108.2772 } },
    "Malaysia": { hemisphere: "Northern", continent: "Asia", temperature: "Hot", population: "High", coordinates: { lat: 4.2105, lon: 101.9758 } },
};

const countryKeys = Object.keys(countriesData);
const randomIndex = Math.floor(Math.random() * countryKeys.length);
const mysteryCountry = countriesData[countryKeys[randomIndex]];

document.getElementById('countryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    checkGuess();
});

function checkGuess() {
    const userGuess = document.getElementById("countryInput").value.trim();
    let feedback = "";
    
    if (countriesData[userGuess]) { 
        const guessedCountry = countriesData[userGuess];
        
        feedback += `<p>Hemisphere: ${compareAttribute(guessedCountry.hemisphere, mysteryCountry.hemisphere)}</p>`;
        feedback += `<p>Continent: ${compareAttribute(guessedCountry.continent, mysteryCountry.continent)}</p>`;
        feedback += `<p>Temperature: ${compareAttribute(guessedCountry.temperature, mysteryCountry.temperature)}</p>`;
        feedback += `<p>Population: ${compareAttribute(guessedCountry.population, mysteryCountry.population)}</p>`;
        feedback += `<p>Coordinates: ${compareCoordinates(guessedCountry.coordinates, mysteryCountry.coordinates)}</p>`;
    } else {
        feedback = "<p>Country not found!</p>";
    }

    document.getElementById("feedback").innerHTML = feedback;
}

function compareAttribute(guess, actual) {
    return guess === actual ? `<span style="color: green;">${guess}</span>` : `<span style="color: red;">${guess}</span>`;
}

function compareCoordinates(guessCoords, actualCoords) {
    const latDiff = guessCoords.lat - actualCoords.lat;
    const lonDiff = guessCoords.lon - actualCoords.lon;

    let direction = "";
    if (latDiff > 0) direction += "South ";
    else if (latDiff < 0) direction += "North ";
    if (lonDiff > 0) direction += "West";
    else if (lonDiff < 0) direction += "East";

    return direction ? `<span style="color: yellow;">${direction}</span>` : `<span style="color: green;">Correct</span>`;
}
