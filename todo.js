// fondo.js v8.0
function cambiarFondoSegunHora() {
    const horaActual = new Date().getHours();
    const body = document.body;

    if (horaActual >= 5 && horaActual < 6) {
        // Amanecer inicial
        body.style.background = 'linear-gradient(-10deg, #FFDDC1, #F8B195)';
    } else if (horaActual >= 6 && horaActual < 7) {
        // Amanecer mayor
        body.style.background = 'linear-gradient(-10deg, #FFD1B3, #F67280)';
    } else if (horaActual >= 7 && horaActual < 10) {
        // Mañana
        body.style.background = 'linear-gradient(-10deg, #FFB4A2, #6C5B7B)';
    } else if (horaActual >= 10 && horaActual < 12) {
        // Mediodía
        body.style.background = 'linear-gradient(-10deg, #FFD166, #f6e8c3)';
    } else if (horaActual >= 12 && horaActual < 15) {
        // Tarde inicial
        body.style.background = 'linear-gradient(-10deg, #FDCB77, #EF476F)';
    } else if (horaActual >= 15 && horaActual < 17) {
        // Tarde media
        body.style.background = 'linear-gradient(-10deg, #4ecdc4, #556270)';
    } else if (horaActual >= 17 && horaActual < 18) {
        // Atardecer inicial
        body.style.background = 'linear-gradient(-10deg, #282c34, #4b4e53)';
    } else if (horaActual >= 18 && horaActual < 20) {
        // Atardecer mayor
        body.style.background = 'linear-gradient(-10deg, #2e3642, #55a2c2)';
    } else if (horaActual >= 20 && horaActual < 22) {
        // Noche temprana
        body.style.background = 'linear-gradient(-10deg, #1b2e3f, #0e4558)';
    } else if (horaActual >= 22 || horaActual < 5) {
        // Noche profunda
        body.style.background = 'linear-gradient(-10deg, #0d1543, #000022)';
    }
}

cambiarFondoSegunHora();