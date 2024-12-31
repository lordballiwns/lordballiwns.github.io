fetch('https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=17.55&lon=-99.50&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric')
    .then(response => response.json())
    .then(data => {
        const climaDiv = document.getElementById('clima');
        const clima0 = data.list[0];
        const clima6 = data.list[1];
        const clima12 = data.list[3];
        const fecha = new Date(clima0.dt * 1000);
        const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };

        // Obtener la hora actual y redondearla hacia abajo al múltiplo de 3 más cercano
        const horaActual = new Date();
        const horas = horaActual.getHours();

        // Redondeo hacia abajo al múltiplo de 3 más cercano
        const horaRedondeada = Math.floor(horas / 3) * 3;

        horaActual.setHours(horaRedondeada, 0, 0, 0);
        
        // Calcular horas de pronóstico
        const horaConsulta6 = new Date(horaActual);
        horaConsulta6.setHours(horaConsulta6.getHours() + 6);

        const horaConsulta12 = new Date(horaActual);
        horaConsulta12.setHours(horaConsulta12.getHours() + 12);

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
            <h2>Pronóstico 6 Horas: ${horaConsulta6.toLocaleTimeString('es-ES', opcionesHora)}</h2>
            <ul>
                <li>Temperatura: ${clima6.main.temp}°C</li>
                <li>Sensación térmica: ${clima6.main.feels_like}°C</li>
                <li>Humedad: ${clima6.main.humidity}%</li>
                <li>Nubes: ${clima6.clouds.all}%</li>
                <li>Descripción: ${clima6.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima6.pop * 100}%</li>
                <li>Velocidad del viento: ${clima6.wind.speed} m/s</li>
                <li>Presión atmosférica: ${clima6.main.pressure} hPa</li>
            </ul>
            <hr>
            <h2>Pronóstico 12 Horas: ${horaConsulta12.toLocaleTimeString('es-ES', opcionesHora)}</h2>
            <ul>
                <li>Temperatura: ${clima12.main.temp}°C</li>
                <li>Sensación térmica: ${clima12.main.feels_like}°C</li>
                <li>Humedad: ${clima12.main.humidity}%</li>
                <li>Nubes: ${clima12.clouds.all}%</li>
                <li>Descripción: ${clima12.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima12.pop * 100}%</li>
                <li>Velocidad del viento: ${clima12.wind.speed} m/s</li>
                <li>Presión atmosférica: ${clima12.main.pressure} hPa</li>
            </ul>
        `;
    });