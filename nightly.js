async function fetchTwitterData() {
    const url = 'https://api.twitter.com/2/tweets/search/recent?query=from:conagua_clima';
    const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAFwxvQEAAAAA4hU20rG7e9BA3Vr4lnT1ed2ujz0%3DEsvbZ0Q4syRXVmCVPKFIp4Ols3bEYs2OxrEHIE9sweFqI0U2LD';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        checkForSevereWeather(data);
    } catch (error) {
        console.error('Error al consultar los datos de X:', error);
        document.getElementById('result').textContent = 'Error al consultar los datos.';
    }
}

function checkForSevereWeather(data) {
    const severeWeatherKeywords = ['huracán', 'tormenta', 'monzón tropical', 'ciclón', 'tifón', 'depresión tropical', 'marea alta', 'inundación', 'deslave', 'tsunami', 'vientos fuertes', 'granizo'];
    const locations = ['Guerrero', 'Oaxaca', 'océano Pacífico'];
    let hasSevereWeather = false;

    data.data.forEach(tweet => {
        severeWeatherKeywords.forEach(keyword => {
            if (tweet.text.toLowerCase().includes(keyword.toLowerCase())) {
                locations.forEach(location => {
                    if (tweet.text.toLowerCase().includes(location.toLowerCase())) {
                        hasSevereWeather = true;
                        document.getElementById('result').innerHTML += `<p>Alerta: ${keyword} detectado en ${location}</p>`;
                    }
                });
            }
        });
    });

    if (!hasSevereWeather) {
        document.getElementById('result').innerHTML += '<p>No se encontraron alertas de tiempo severo en Guerrero, Oaxaca o el océano Pacífico.</p>';
    }
}

fetchTwitterData();
