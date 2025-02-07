// Version 8.0 Zephyr Rising
fetch('https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.84&lon=-99.90&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric')
    .then(response => response.json())
    .then(data => {
        const climaDiv = document.getElementById('clima');
        const clima0 = data.list[0];
        const clima6 = data.list[1];
        const clima12 = data.list[3];
        
        // Obtener la hora actual redondeada al múltiplo de 3 más cercano inferior
        const horaActual = new Date();
        const horas = horaActual.getHours();
        const minutos = horaActual.getMinutes();
        
        // Redondeo hacia abajo al múltiplo de 3 más cercano
        const horasRedondeadas = Math.floor(horas / 3) * 3;
        horaActual.setHours(horasRedondeadas, 0, 0, 0);
        
        const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
        const fechaFormateada = horaActual.toLocaleDateString('es-ES', opcionesFecha);

        // Calcular horas de pronóstico
        const horaConsulta6 = new Date(horaActual);
        horaConsulta6.setHours(horaConsulta6.getHours() + 6);
        const horaFormateada6 = horaConsulta6.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });

        const horaConsulta12 = new Date(horaActual);
        horaConsulta12.setHours(horaConsulta12.getHours() + 12);
        const horaFormateada12 = horaConsulta12.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });

        climaDiv.innerHTML = `
            <h2>${fechaFormateada}:</h2>
            <ul>
                <li>Temperatura: ${clima0.main.temp}°C</li>
                <li>Sensación térmica: ${clima0.main.feels_like}°C</li>
                <li>Descripción: ${clima0.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima0.pop * 100}%</li>
                <li>Nubes: ${clima0.clouds.all}%</li>
                <li>Visibilidad: ${clima0.visibility / 1000} km</li>
                <li>Velocidad del viento: ${clima0.wind.speed} m/s</li>
            </ul>
            <hr>
            <h2>Pronóstico 6 Horas (${horaFormateada6}):</h2>
            <ul>
                <li>Temperatura: ${clima6.main.temp}°C</li>
                <li>Sensación térmica: ${clima6.main.feels_like}°C</li>
                <li>Descripción: ${clima6.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima6.pop * 100}%</li>
                <li>Nubes: ${clima6.clouds.all}%</li>
                <li>Visibilidad: ${clima6.visibility / 1000} km</li>
                <li>Velocidad del viento: ${clima6.wind.speed} m/s</li>
            </ul>
            <hr>
            <h2>Pronóstico 12 Horas (${horaFormateada12}):</h2>
            <ul>
                <li>Temperatura: ${clima12.main.temp}°C</li>
                <li>Sensación térmica: ${clima12.main.feels_like}°C</li>
                <li>Descripción: ${clima12.weather[0].description}</li>
                <li>Probabilidad de lluvia: ${clima12.pop * 100}%</li>
                <li>Nubes: ${clima12.clouds.all}%</li>
                <li>Visibilidad: ${clima12.visibility / 1000} km</li>
                <li>Velocidad del viento: ${clima12.wind.speed} m/s</li>
            </ul>
        `;
    });