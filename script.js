// informacion.js
const version = "6";
const compilacion = "2.99";

document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("version");
    const compilacionElement = document.getElementById("compilacion");

    versionElement.textContent = `Versión: ${version}`;
    compilacionElement.textContent = `Compilación: ${compilacion}`;
});