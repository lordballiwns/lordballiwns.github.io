// Obtener la hora y fecha actual
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][fechaActual.getDay()];
const numeroDia = fechaActual.getDate();
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][fechaActual.getMonth()];

// Sumar 3 horas
const horaSumada = (horaActual + 24) % 24;

// Formatear la hora en formato 12 horas
const hora12 = (horaSumada % 12) || 12;
const amPm = horaSumada < 12 ? "AM" : "PM";

// Asegurarse de que los minutos tengan 2 dígitos
const minutosFormateados = minutos.toString().padStart(2, "0"); // Aquí está la corrección

// Actualizar el elemento HTML
document.getElementById("horaFechados").innerText = `${diaSemana}, ${numeroDia} ${mes} - ${hora12}:${minutosFormateados} ${amPm}`;


        document.getElementById("climados").innerText = "Cargando datos del clima...";

        // Consultar la API del clima
        fetch("https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.41&lon=-98.51&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric")
.then(response => response.json())
.then(data => {
    const climados = data.list[8];
                document.getElementById("climados").innerText = `
    Temperatura: ${climados.main.temp}°C
    Sensación térmica: ${climados.main.feels_like}°C
    Humedad: ${climados.main.humidity}%
    Nubosidad: ${climados.clouds.all}%
    Descripción del clima: ${climados.weather[0].description}
    Probabilidad de lluvia: ${climados.pop * 100}%
    Visibilidad: ${climados.visibility / 1000} km
                `;
            })
.catch(error => {
    console.error("Error al obtener datos del clima:", error);
                document.getElementById("climados").innerText = "Error al cargar datos del clima.";
            });