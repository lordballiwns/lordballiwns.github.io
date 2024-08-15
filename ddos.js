// Obtener la hora y fecha actual
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][fechaActual.getDay()];
const numeroDia = fechaActual.getDate();
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][fechaActual.getMonth()];

// Sumar 27 horas
const horaSumada = (horaActual + 27) % 24; // Asegurándonos de que no exceda las 24 horas

// Formatear la hora en formato 12 horas
const hora12 = (horaSumada % 12) || 12;
const amPm = horaSumada < 12 ? "AM" : "PM";

// Asegurarse de que los minutos tengan 2 dígitos
const minutosFormateados = minutos.toString().padStart(2, "0");

// Actualizar el elemento HTML (cambia 'horaFecha' por el nombre deseado)
document.getElementById("horaFechados").innerText = `${diaSemana}, ${numeroDia} ${mes} - ${hora12}:${minutosFormateados} ${amPm}`;


// Mostrar mensaje de carga mientras se obtienen los datos del clima
document.getElementById("climados").innerText = "Cargando datos del clima...";

// Consultar la API del clima con un desplazamiento de 27 horas
fetch("https://api.openweathermap.org/data/2.5/forecast?lang=es&lat=16.41&lon=-98.51&appid=c930acc727dc9fd57adb722dd5f93b74&units=metric")
    .then(response => response.json())
    .then(data => {
        const clima = data.list[0];
        // Actualizar el elemento HTML con la información del clima
        document.getElementById("climados").innerText = `
            Temperatura: ${clima.main.temp}°C
            Sensación térmica: ${clima.main.feels_like}°C
            Humedad: ${clima.main.humidity}%
            Nubosidad: ${clima.clouds.all}%
            Descripción del clima: ${clima.weather[0].description}
            Probabilidad de lluvia: ${clima.pop * 100}%
            Lluvia en las últimas 3 horas: ${clima.rain ? clima.rain["3h"] : 0} mm
            Población: ${data.city.population}
            Visibilidad: ${clima.visibility / 1000} km
        `;
    })
    .catch(error => {
        console.error("Error al obtener datos del clima:", error);
        // Mostrar mensaje de error si no se pueden cargar los datos
        document.getElementById("climados").innerText = "Error al cargar datos del clima.";
    });
