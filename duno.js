// Obtener la hora y fecha actual
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][fechaActual.getDay()];
const numeroDia = fechaActual.getDate();
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][fechaActual.getMonth()];

// Sumar 3 horas
const horaSumada = (horaActual + 3) % 24;

// Formatear la hora en formato 12 horas
const hora12 = (horaSumada % 12) || 12;
const amPm = horaSumada < 12 ? "AM" : "PM";

// Asegurarse de que los minutos tengan 2 dígitos
const minutosFormateados = minutos.toString().padStart(2, "0"); // Aquí está la corrección

// Actualizar el elemento HTML
document.getElementById("horaFecha").innerText = `${diaSemana}, ${numeroDia} ${mes} - ${hora12}:${minutosFormateados} ${amPm}`;


        document.getElementById("clima").innerText = "Cargando datos del clima...";

        // Consultar la API del clima
        fetch("https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.41&lon=-98.51&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric")
.then(response => response.json())
.then(data => {
    const clima = data.list[0];
                document.getElementById("clima").innerText = `
    Temperatura: ${clima.main.temp}°C
    Sensación térmica: ${clima.main.feels_like}°C
    Humedad: ${clima.main.humidity}%
    Nubosidad: ${clima.clouds.all}%
    Descripción del clima: ${clima.weather[0].description}
    Probabilidad de lluvia: ${clima.pop}%
    Lluvia en las últimas 3 horas: ${clima.rain ? clima.rain["3h"] : 0} mm
    Población: ${data.city.population}
    Visibilidad: ${clima.visibility / 1000} km
                `;
            })
.catch(error => {
    console.error("Error al obtener datos del clima:", error);
                document.getElementById("clima").innerText = "Error al cargar datos del clima.";
            });