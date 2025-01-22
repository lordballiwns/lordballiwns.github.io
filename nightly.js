document.addEventListener("DOMContentLoaded", function() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/https://www.accuweather.com/es/hurricane';

    fetch(proxyUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const hurricanes = extractHurricaneData(doc);

            displayHurricanes(hurricanes);
        })
        .catch(error => console.log('Error:', error));
    
    function extractHurricaneData(doc) {
        let hurricanes = [];

        // La lógica para extraer la información de los huracanes de 'doc'
        const hurricaneElements = doc.querySelectorAll('.hurricane-class'); // Ajustar según la estructura real

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