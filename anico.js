fetch('https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.41&lon=-98.51&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric')
    .then(data => {
        const climaDiv = document.getElementById('clima');
        const climaAhora = data.list[0];
        const clima6Horas = data.list[2];
        const clima12Horas = data.list[4];
        const clima18Horas = data.list[6];

        const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };

        const generarPronosticoHTML = (fecha, clima) => `
            <p>${fecha.toLocaleDateString('es-ES', opcionesFecha)}:</p>
            <ul>
                <li>Temperatura: ${clima.main.temp}°C</li>
                <li>Sensación térmica: ${clima.main.feels_like}°C</li>
                <li>Humedad: ${clima.main.humidity}%</li>
                <li>Nubes: ${clima.clouds.all}%</li>
                <li>Descripción: ${clima.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima.pop * 100}%</li>
            </ul>
        `;

        climaDiv.innerHTML = `
            <h2>Pronóstico Actual</h2>
            ${generarPronosticoHTML(new Date(climaAhora.dt * 1000), climaAhora)}
            <br><hr><br>
            <h2>Pronóstico a 6 Horas</h2>
            ${generarPronosticoHTML(new Date(clima6Horas.dt * 1000), clima6Horas)}
            <br><hr><br>
            <h2>Pronóstico a 12 Horas</h2>
            ${generarPronosticoHTML(new Date(clima12Horas.dt * 1000), clima12Horas)}
            <br><hr><br>
            <h2>Pronóstico a 18 Horas</h2>
            ${generarPronosticoHTML(new Date(clima18Horas.dt * 1000), clima18Horas)}
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('clima').innerHTML = '<p>Error al cargar los datos del clima.</p>';
    });