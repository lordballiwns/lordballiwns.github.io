// Versión 5.0 — Tema Primavera
// Se elimina autorización de usuario, carga directa

// Saludo dinámico
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const saludoTemporal = horaActual < 12 ? "Buenos días" : horaActual < 18 ? "Buenas tardes" : "Buenas noches";
const saludoCompleto = `<br>${saludoTemporal}. A continuación se muestra el estado actual de los préstamos.`;

const saludoDiv = document.createElement("div");
saludoDiv.style.textAlign = "center";
saludoDiv.style.fontSize = "1.2rem";
saludoDiv.style.marginBottom = "20px";
saludoDiv.innerHTML = saludoCompleto;
document.body.insertBefore(saludoDiv, document.body.firstChild);

// Datos de préstamos (ejemplo con último abono y saldo anterior)
const loans = [
  { id: "luis",    nombre: "Luis",    montoOriginal: 17000, saldoActual: 3880,  ultimoAbono: 500,  saldoAnterior: 4380,  intro: "Préstamo correspondiente a Luis." },
  { id: "payjoy",  nombre: "PayJoy",  montoOriginal: 4416,  saldoActual: 0,     ultimoAbono: 522,  saldoAnterior: 522,   intro: "Préstamo correspondiente a PayJoy." },
  { id: "beatris", nombre: "Beatris", montoOriginal: 2400,  saldoActual: 1800,  ultimoAbono: 0,    saldoAnterior: 1800,  intro: "Préstamo correspondiente a Beatris." },
  { id: "andy",    nombre: "Andy",    montoOriginal: 7600,  saldoActual: 10450, ultimoAbono: 2800, saldoAnterior: 7650,  intro: "Préstamo correspondiente a Andy." },
  { id: "pedro",   nombre: "Pedro",   montoOriginal: 1460,  saldoActual: 220,   ultimoAbono: 230,  saldoAnterior: 450,   intro: "Préstamo correspondiente a Pedro." }
];

// Calcular porcentaje pagado y ordenar
loans.forEach(l => {
  const pagado = l.montoOriginal - l.saldoActual;
  l.porcentajePagado = Math.min(Math.max((pagado / l.montoOriginal) * 100, 0), 100);
});
loans.sort((a, b) => b.porcentajePagado - a.porcentajePagado);

// Render UI
const root = document.getElementById("loans-root");
loans.forEach(l => {
  const cont = document.createElement("div");
  cont.className = "progress-container spring-theme"; // clase para colores primaverales
  cont.id = l.id;
  cont.innerHTML = `
    <p class="intro-text">${l.intro}</p>
    <div class="progress-bar-wrapper">
      <div class="progress-bar"></div>
    </div>
    <div class="progress-text"></div>
    <div class="progress-label"></div>
  `;
  root.appendChild(cont);
});

// Nueva función actualizarBarra
function actualizarBarra(id, montoOriginal, saldoActual, ultimoAbono, saldoAnterior) {
  const contenedor = document.getElementById(id);
  const barra = contenedor.querySelector(".progress-bar");
  const texto = contenedor.querySelector(".progress-text");
  const label = contenedor.querySelector(".progress-label");

  const montoPagado = montoOriginal - saldoActual;
  let porcentaje = (montoPagado / montoOriginal) * 100;
  porcentaje = Math.min(Math.max(porcentaje, 0), 100);

  barra.style.width = porcentaje.toFixed(2) + "%";

  if (saldoActual > 0) {
    texto.textContent = `${porcentaje.toFixed(2)}% pagado — Último abono $${ultimoAbono.toLocaleString()} — Saldo anterior $${saldoAnterior.toLocaleString()}`;
    label.textContent = `Deuda con ${id.charAt(0).toUpperCase() + id.slice(1)} — Monto original: $${montoOriginal.toLocaleString()} — Saldo actual: $${saldoActual.toLocaleString()}`;
  } else {
    texto.textContent = `100% pagado — Último abono $${ultimoAbono.toLocaleString()} — Saldo anterior $${saldoAnterior.toLocaleString()}`;
    label.textContent = `Deuda con ${id.charAt(0).toUpperCase() + id.slice(1)} — Monto original: $${montoOriginal.toLocaleString()} — Saldo actual: Finalizado`;
  }
}

loans.forEach(l => actualizarBarra(l.id, l.montoOriginal, l.saldoActual, l.ultimoAbono, l.saldoAnterior));

// Footer año y versión
document.getElementById("year").textContent = new Date().getFullYear();
document.querySelector("footer .brand").textContent = "5.0";

// Animación de pétalos cayendo (similar a nieve pero con colores primaverales)
(function petalsBackground(){
  const canvas = document.getElementById('spring-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, petals = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function generatePetals(n){
    petals = [];
    for (let i=0;i<n;i++){
      petals.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        d: Math.random() * 0.5 + 0.2,
        sway: Math.random() * 0.6 + 0.2,
        color: ["#ffb6c1","#ffc0cb","#ffe4e1","#fff0f5"][Math.floor(Math.random()*4)]
      });
    }
  }
  generatePetals(60);

  function draw(){
    ctx.clearRect(0,0,w,h);

    // Fondo dinámico según hora
    const hora = new Date().getHours();
    if(hora >= 6 && hora < 18){
      ctx.fillStyle = "#87ceeb"; // cielo azul claro
    } else {
      ctx.fillStyle = "#191970"; // azul nocturno
    }
    ctx.fillRect(0,0,w,h);

    // Pasto
    ctx.fillStyle = (hora >= 6 && hora < 18) ? "#32cd32" : "#006400";
    ctx.fillRect(0,h-100,w,100);

    // Pétalos
    for (let i=0;i<petals.length;i++){
      const p = petals[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.y += p.d;
      p.x += Math.sin(performance.now()/1000 + i) * (p.sway * 0.2);

      if (p.y > h + 5) { p.y = -5; p.x = Math.random() * w; }
      if (p.x < -10)   { p.x = w + 10; }
      if (p.x > w + 10){ p.x = -10; }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();