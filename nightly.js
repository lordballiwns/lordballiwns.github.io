document.addEventListener("DOMContentLoaded", function() {
    const proxyUrl = 'https://lordballiwns-0e6cffa738e8.herokuapp.com/https://www.accuweather.com/es/hurricane';

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const hurricanes = extractHurricaneData(doc);

            displayHurricanes(hurricanes);
        })
        .catch(error => {
            console.error('Detailed Error:', error);
            const container = document.getElementById('hurricanes');
            container.innerHTML = `<p>Error al obtener la información de los huracanes: ${error.message}. Verifica la configuración del proxy.</p>`;
        });
    
    function extractHurricaneData(doc) {
        let hurricanes = [];

        // Asegúrate de ajustar los selectores según la estructura real de AccuWeather
        const hurricaneElements = doc.querySelectorAll('.hurricane-class'); // Cambia esto según la estructura real

        hurricaneElements.forEach(element => {
            const name = element.querySelector('.hurricane-name').textContent;
            const status = element.querySelector('.hurricane-status').textContent;
            const location = element.querySelector('.hurricane-location').textContent;
            const landLocation = element.querySelector('.hurricane-land-location').textContent;
            const category = element.querySelector('.hurricane-category').textContent;

            hurricanes.push({
                name,
                status,
                location,
                landLocation,
                category
            });
        });

        return hurricanes;
    }

    function displayHurricanes(hurricanes) {
        const container = document.getElementById('hurricanes');

        hurricanes.forEach(hurricane => {
            const hurricaneDiv = document.createElement('div');
            hurricaneDiv.classList.add('hurricane');

            hurricaneDiv.innerHTML = `
                <h2>${hurricane.name}</h2>
                <p>Estado: ${hurricane.status}</p>
                <p>Ubicación: ${hurricane.location}</p>
                <p>Ubicación Terrestre: ${hurricane.landLocation}</p>
                <p>Categoría: ${hurricane.category}</p>
            `;

            container.appendChild(hurricaneDiv);
        });
    }
});
