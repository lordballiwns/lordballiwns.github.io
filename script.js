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

// Datos de préstamos actualizados (v1.5.1 / 4.2.3)
const loans = [
  { id: "luis",    nombre: "Luis",    montoOriginal: 17000, saldoActual: 4430, intro: "Préstamo correspondiente a Luis." },
  { id: "payjoy",  nombre: "PayJoy",  montoOriginal: 4416,  saldoActual: 1566, intro: "Préstamo correspondiente a PayJoy." },
  { id: "beatris", nombre: "Beatris", montoOriginal: 2400,  saldoActual: 1800, intro: "Préstamo correspondiente a Beatris." },
  { id: "andy",    nombre: "Andy",    montoOriginal: 7600,  saldoActual: 7600, intro: "Préstamo correspondiente a Andy." },
  { id: "pedro",   nombre: "Pedro",   montoOriginal: 1460,  saldoActual: 700,  intro: "Préstamo correspondiente a Pedro." } // actualizado tras abono de 260
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
document.querySelector("footer .brand").textContent = "4.2.3";

// -------------------------
// Fondo animado: copos de nieve adaptativos con ahorro de batería
// -------------------------

const isAppleSafari = /Mac|iPhone|iPad|iPod/.test(navigator.platform) &&
                      /Safari/.test(navigator.userAgent) &&
                      !/Chrome/.test(navigator.userAgent) &&
                      !/Edg/.test(navigator.userAgent);

if (!isAppleSafari) {
  (function snowBackground(){
    const canvas = document.getElementById('snow-canvas');
    const ctx = canvas.getContext('2d');
    let w, h, flakes = [];
    let running = true;

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const memGB = (navigator.deviceMemory || 4);
    const cores = (navigator.hardwareConcurrency || 4);
    const area = Math.min((window.innerWidth * window.innerHeight) / (1280*720), 2.0);
    const perfScore = (memGB/4) * (cores/4) * (0.6 + 0.4*area);

    const baseFlakes = 80;
    const maxMultiplier = 3.0;
    let count = Math.round(baseFlakes * Math.min(perfScore, maxMultiplier));

    function generateFlakes(n){
      flakes = [];
      for (let i=0;i<n;i++){
        flakes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.6,
          d: Math.random() * 0.6 + 0.2,
          sway: Math.random() * 0.6 + 0.2,
          alpha: Math.random() * 0.35 + 0.35
        });
      }
    }

    const statusEl = document.getElementById('battery-status');
    function applyBatteryPolicy(battery){
      try {
        const level = battery.level;
        const charging = battery.charging;
        const low = level <= 0.20 && !charging;
        const saveMode = (navigator.deviceMemory && navigator.deviceMemory < 2);

        let multiplier = 1.0;
        if (low) multiplier *= 0.4;
        if (saveMode) multiplier *= 0.6;

        const adjusted = Math.max(20, Math.round(count * multiplier));
        generateFlakes(adjusted);

        const pct = Math.round(level * 100);
        let msg = `Batería: ${pct}%`;
        if (charging) msg += " (cargando)";
        if (low) msg += " — modo batería baja";
        if (saveMode) msg += " — modo ahorro";
        statusEl.textContent = msg;
      } catch(e) {
        generateFlakes(count);
        statusEl.textContent = "Error al leer batería";
      }
    }

    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        applyBatteryPolicy(battery);
        battery.addEventListener('levelchange', () => applyBatteryPolicy(battery));
        battery.addEventListener('chargingchange', () => applyBatteryPolicy(battery));
      }).catch(()=>{ generateFlakes(count); });
    } else {
      generateFlakes(count);
      statusEl.textContent = "Estado de batería no disponible";
    }

    function draw(){
      if(!running) return;
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = 'rgba(150,180,220,0.06)';
      ctx.fillRect(0,0,w,h);

      for (let i=0;i<flakes.length;i++){
        const f = flakes[i];
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${f.alpha})`;
        ctx.fill();

        f.y += f.d;
        f.x += Math.sin(performance.now()/1000 + i) * (f.sway * 0.2);

        if (f.y > h + 5) { f.y = -5; f.x = Math.random() * w; }
        if (f.x < -10)   { f.x = w + 10; }
        if (f.x > w + 10){ f.x = -10; }
      }
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  })();
}