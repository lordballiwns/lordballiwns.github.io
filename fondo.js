// fondo.js

function cambiarFondo() {
    const horaActual = new Date().getHours();
    const body = document.body;

    // Define los colores de fondo según la hora del día
    if (horaActual >= 6 && horaActual < 12) {
        body.style.backgroundColor = '#f0e68c'; // Mañana
    } else if (horaActual >= 12 && horaActual < 18) {
        body.style.backgroundColor = '#87ceeb'; // Tarde
    } else {
        body.style.backgroundColor = '#191970'; // Noche
    }
}

// Cambia el fondo cada 6 horas
setInterval(cambiarFondo, 6 * 60 * 60 * 1000);
cambiarFondo(); // Llama a la función al cargar la página