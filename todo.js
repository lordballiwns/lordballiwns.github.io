// fondo.js v8.0
function cambiarFondoSegunHora() {
    const horaActual = new Date().getHours();
    const body = document.body;

    if (horaActual >= 5 && horaActual < 6) {
        // Amanecer inicial
        body.style.background = 'linear-gradient(-10deg, #1E0000, #00004B)';
    } else if (horaActual >= 6 && horaActual < 7) {
        // Amanecer mayor
        body.style.background = 'linear-gradient(-10deg, #691900, #00004B)';
    } else if (horaActual >= 7 && horaActual < 10) {
        // Mañana
        body.style.background = 'linear-gradient(-10deg, #C8826E, #0B78DC)';
    } else if (horaActual >= 10 && horaActual < 12) {
        // Mediodía
        body.style.background = 'linear-gradient(-10deg, #0B78DC, #0B78DC)';
    } else if (horaActual >= 12 && horaActual < 15) {
        // Tarde inicial
        body.style.background = 'linear-gradient(-10deg, #325096, #005AAA)';
    } else if (horaActual >= 15 && horaActual < 17) {
        // Tarde media
        body.style.background = 'linear-gradient(-10deg, #0050B4, #0046BE)';
    } else if (horaActual >= 17 && horaActual < 18) {
        // Atardecer inicial
        body.style.background = 'linear-gradient(-10deg, #3C4173, #464B7D)';
    } else if (horaActual >= 18 && horaActual < 20) {
        // Atardecer mayor
        body.style.background = 'linear-gradient(-10deg, #282D5F, #323769)';
    } else if (horaActual >= 20 && horaActual < 22) {
        // Noche temprana
        body.style.background = 'linear-gradient(-10deg, #14194B, #1E235F)';
    } else if (horaActual >= 22 || horaActual < 5) {
        // Noche profunda
        body.style.background = 'linear-gradient(-10deg, #0A0F41, #000023)';
    }
}

cambiarFondoSegunHora();