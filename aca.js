// Version 1.0.0 sunset
document.getElementById("clima").innerText = "Cargando datos del clima...";

fetch('https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=17.55&lon=-99.50&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric')
            .then(response => response.json())
            .then(data => {
                const climaDiv = document.getElementById('clima');
                const climaHoy = data.list[0];
                const climaManana = data.list[8];

                const fechaHoy = new Date(climaHoy.dt * 1000);
                const fechaManana = new Date(climaManana.dt * 1000);

                const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };

                climaDiv.innerHTML = `
                    <p>${fechaHoy.toLocaleDateString('es-ES', opcionesFecha)}:</p>
                    <ul>
                        <li>Temperatura: ${climaHoy.main.temp}°C</li>
                        <li>Sensación térmica: ${climaHoy.main.feels_like}°C</li>
                        <li>Humedad: ${climaHoy.main.humidity}%</li>
                        <li>Nubes: ${climaHoy.clouds.all}%</li>
                        <li>Descripcion: ${climaHoy.weather[0].description}</li>
                        <li>Probabilidad de lluvia: ${climaHoy.pop * 100}%</li>
                        <li>Precipitación anterior (3 horas): ${climaHoy.rain ? climaHoy.rain["3h"] : 0} mm</li>
                        <li>Población: ${data.city.population}</li>
                        <li>Visibilidad: ${climaHoy.visibility / 1000} km</li>
                        
                        <!-- Agrega más detalles aquí si lo deseas -->
                    </ul>
            <br>
            <hr>
            <br>
                    <p>${fechaManana.toLocaleDateString('es-ES', opcionesFecha)}:</p>
                    <ul>
                        <li>Temperatura: ${climaManana.main.temp}°C</li>
                        <li>Sensación térmica: ${climaManana.main.feels_like}°C</li>
                        <li>Humedad: ${climaManana.main.humidity}%</li>
                        <li>Nubes: ${climaManana.clouds.all}%</li>
                        <li>Descripcion: ${climaManana.weather[0].description}</li>
                        <li>Probabilidad de lluvia: ${climaManana.pop * 100}%</li>
                        <!-- Agrega más detalles aquí si lo deseas -->
                    </ul>
                `;
            });
