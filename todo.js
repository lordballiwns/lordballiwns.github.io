// fondo.js
function cambiarFondoSegunHora() {
    const horaActual = new Date().getHours();
    const body = document.body;
    if (horaActual >= 5 && horaActual < 7) {
        body.style.background = 'linear-gradient(-10deg, #23A6D5, #EE7752)';
    } else if (horaActual >= 7 && horaActual < 18) {
        body.style.background = 'linear-gradient(-10deg, #23A6D5, #23D5AB)';
    } else if (horaActual >= 18 && horaActual < 20) {
        body.style.background = 'linear-gradient(-10deg, #23A6D5, #E73C7E)';
    } else {
        body.style.background = 'linear-gradient(-10deg, #000099, #000022)';
    }
}
cambiarFondoSegunHora();

// script.js
const version = "6";
const compilacion = "2.99";
document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("version");
    const compilacionElement = document.getElementById("compilacion");
    versionElement.textContent = `Versión: ${version}`;
    compilacionElement.textContent = `Compilación: ${compilacion}`;
});

// captura.js
function capture() {
    html2canvas(document.body).then(canvas => {
        let a = document.createElement("a");
        a.download = "clima.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    });
}
