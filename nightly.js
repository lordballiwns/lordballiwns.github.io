async function fetchTwitterData() {
    const url = 'https://api.twitter.com/2/tweets/search/recent?query=from:conagua_clima';
    const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAFwxvQEAAAAA4hU20rG7e9BA3Vr4lnT1ed2ujz0%3DEsvbZ0Q4syRXVmCVPKFIp4Ols3bEYs2OxrEHIE9sweFqI0U2LD'; // Reemplaza esto por tu Bearer Token

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
                'Content-Type': 'application/json'
            }
        });

        const resultElement = document.getElementById('result');

        if (!response.ok) {
            resultElement.textContent = `Error HTTP! Status: ${response.status}`;
            throw new Error(`HTTP error! status: ${response.status}, text: ${response.statusText}`);
        }

        const data = await response.json();
        resultElement.textContent = JSON.stringify(data, null, 2); // Mostramos el JSON recibido
    } catch (error) {
        console.error('Error al consultar los datos de X:', error);
        document.getElementById('result').textContent = 'Error al consultar los datos.';
    }
}

fetchTwitterData();