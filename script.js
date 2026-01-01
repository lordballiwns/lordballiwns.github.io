// Autorización de nombres
const nombresAutorizados = ["Guillermo", "Ana", "Armando", "Andy"];
let nombreIngresado = prompt("Por favor, indique su nombre para continuar:");
nombreIngresado = nombreIngresado ? nombreIngresado.trim() : "";

if (!nombresAutorizados.includes(nombreIngresado)) {
  alert("Acceso denegado.");
  document.body.innerHTML = "<h1 style='text-align: center;color: red;'>Acceso denegado</h1>";
  throw new Error("Acceso denegado");
}

// Saludo dinámico
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const saludoTemporal = horaActual < 12 ? "Buenos días" : horaActual < 18 ? "Buenas tardes" : "Buenas noches";
const saludoCompleto = `<br>${saludoTemporal}, ${nombreIngresado}. A continuación se muestra el estado actual de los préstamos.`;

const saludoDiv = document.createElement("div");
saludoDiv.style.textAlign = "center";
saludoDiv.style.fontSize = "1.2rem";
saludoDiv.style.marginBottom = "20px";
saludoDiv.innerHTML = saludoCompleto;
document.body.insertBefore(saludoDiv, document.body.firstChild);

// Datos de préstamos actualizados (v1.5.2 / 4.2.4)
// Se aplican pagos: Pedro -50, Andy -50, Luis -50, PayJoy -522
const loans = [
  { id: "luis",    nombre: "Luis",    montoOriginal: 17000, saldoActual: 4380, intro: "Préstamo correspondiente a Luis." },
  { id: "payjoy",  nombre: "PayJoy",  montoOriginal: 4416,  saldoActual: 1044, intro: "Préstamo correspondiente a PayJoy." },
  { id: "beatris", nombre: "Beatris", montoOriginal: 2400,  saldoActual: 1800, intro: "Préstamo correspondiente a Beatris." },
  { id: "andy",    nombre: "Andy",    montoOriginal: 7600,  saldoActual: 7550, intro: "Préstamo correspondiente a Andy." },
  { id: "pedro",   nombre: "Pedro",   montoOriginal: 1460,  saldoActual: 650,  intro: "Préstamo correspondiente a Pedro." }
];

// Calcular porcentaje pagado y ordenar dinámicamente
loans.forEach(l => {
  const pagado = l.montoOriginal - l.saldoActual;
  l.porcentajePagado = Math.min(Math.max((pagado / l.montoOriginal) * 100, 0), 100);
});
loans.sort((a, b) => b.porcentajePagado - a.porcentajePagado);

// Render UI
const root = document.getElementById("loans-root");
loans.forEach(l => {
  const cont = document.createElement("div");
  cont.className = "progress-container";
  cont.id = l.id;
  cont.innerHTML = `
    <p class="intro-text">${l.intro}</p>
    <div class="progress-bar-wrapper">
      <div class="progress-bar"></div>
    </div>
    <div class="progress-text"></div>
    <div class="progress-label">Deuda con ${l.nombre} — Monto original: $${l.montoOriginal.toLocaleString()} — Saldo actual: $${l.saldoActual.toLocaleString()}</div>
  `;
  root.appendChild(cont);
});

function actualizarBarra(id, montoOriginal, saldoActual) {
  const contenedor = document.getElementById(id);
  const barra = contenedor.querySelector(".progress-bar");
  const texto = contenedor.querySelector(".progress-text");
  const montoPagado = montoOriginal - saldoActual;
  let porcentaje = (montoPagado / montoOriginal) * 100;
  porcentaje = Math.min(Math.max(porcentaje, 0), 100);
  barra.style.width = porcentaje.toFixed(2) + "%";
  texto.textContent = `${porcentaje.toFixed(2)}% pagado — $${saldoActual.toLocaleString()} restantes`;
}
loans.forEach(l => actualizarBarra(l.id, l.montoOriginal, l.saldoActual));

// Footer año y versión
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector("footer .brand").textContent = "4.2.4";

// Animación de nieve (se mantiene igual que en 1.5.1)