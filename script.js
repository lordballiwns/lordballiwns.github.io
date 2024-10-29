// informacion.js
const version = "7.0";
const compilacion = "4.00";

document.addEventListener("DOMContentLoaded", () => {
    const versionElement = document.getElementById("version");
    const compilacionElement = document.getElementById("compilacion");

    versionElement.textContent = `Versión: ${version}`;
    compilacionElement.textContent = `Compilación: ${compilacion}`;
});