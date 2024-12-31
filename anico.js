fetch('https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=17.55&lon=-99.50&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric')
    .then(response => response.json())
    .then(data => {
        const climaDiv = document.getElementById('clima');
        const clima0 = data.list[0];
        const clima9 = data.list[3];
        const clima18 = data.list[6];
        const fecha = new Date(clima0.dt * 1000);
        const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };

        // Obtener la hora actual y sumarle 6 horas redondeando los minutos a 00
        const horaConsulta = new Date();
        horaConsulta.setHours(horaConsulta.getHours() + 6);
        horaConsulta.setMinutes(0, 0, 0);
        const opcionesHora = { hour: 'numeric', minute: 'numeric', hour12: true };

        climaDiv.innerHTML = `
            <h2>${fecha.toLocaleDateString('es-ES', opcionesFecha)}:</h2>
            <ul>
                <li>Temperatura: ${clima0.main.temp}°C</li>
                <li>Sensación térmica: ${clima0.main.feels_like}°C</li>
                <li>Humedad: ${clima0.main.humidity}%</li>
                <li>Nubes: ${clima0.clouds.all}%</li>
                <li>Descripción: ${clima0.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima0.pop * 100}%</li>
                <li>Precipitación anterior (3 horas): ${clima0.rain ? clima0.rain["3h"] : 0} mm</li>
                <li>Población: ${data.city.population}</li>
                <li>Visibilidad: ${clima0.visibility / 1000} km</li>
                <li>Velocidad del viento: ${clima0.wind.speed} m/s</li>
                <li>Presión atmosférica: ${clima0.main.pressure} hPa</li>
            </ul>
            <hr>
            <ul>
                <li>Temperatura: ${clima9.main.temp}°C</li>
                <li>Sensación térmica: ${clima9.main.feels_like}°C</li>
                <li>Humedad: ${clima9.main.humidity}%</li>
                <li>Nubes: ${clima9.clouds.all}%</li>
                <li>Descripción: ${clima9.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima9.pop * 100}%</li>
                <li>Velocidad del viento: ${clima9.wind.speed} m/s</li>
                <li>Presión atmosférica: ${clima9.main.pressure} hPa</li>
            </ul>
            <p>Hora de consulta: ${horaConsulta.toLocaleTimeString('es-ES', opcionesHora)}</p>
        `;
    });