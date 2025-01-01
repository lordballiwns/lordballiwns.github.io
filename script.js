// informacion.js
const version = "8.0";
const compilacion = "5.06";

document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("version");
    const compilacionElement = document.getElementById("compilacion");

    versionElement.textContent = `Versión: ${version}`;
    compilacionElement.textContent = `Compilación: ${compilacion}`;
});

// captura.js
function capture() {
    // Ajuste de la resolución del canvas
    const scale = 2; // Aumenta el factor de escala para mayor resolución
    html2canvas(document.body, {
        scale: scale,
        useCORS: true, // Para habilitar la captura de imágenes cargadas desde otros dominios si es necesario
    }).then(canvas => {
        let a = document.createElement("a");
        a.download = "pronostico.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const captureLink = document.getElementById("captureLink");
    captureLink.addEventListener("click", (event) => {
        event.preventDefault();
        capture();
    });
});