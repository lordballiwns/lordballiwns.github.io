// Versión JS 3.0.7 — Tema Espacial (Release)

// --- CONFIGURACIÓN DE VERSIÓN AUTOMÁTICA ---
const FASE_PRUEBA = "Alpha";
const VERSION_BASE = "5.9";
const REVISION = "7"; // <--- ACTUALIZADO A 5.9.7
const versionCompleta = `v${VERSION_BASE}.${REVISION} (${FASE_PRUEBA})`;

// --- DATOS DE MISIONES (Préstamos) ---
const missions = [
  { id: "luis", nombre: "Luis", original: 17000, actual: 3880, ultimo: 500, anterior: 4380 },
  { id: "pedro", nombre: "Pedro", original: 1460, actual: 0, ultimo: 80, anterior: 80 },
  { id: "beatris", nombre: "Beatris", original: 2400, actual: 1800, ultimo: 0, anterior: 1800 },
  { id: "andy", nombre: "Andy", original: 11159, actual: 11159, ultimo: 1000, anterior: 10159 }
];

// --- INICIALIZAR INTERFAZ ---
function init() {
  const hora = new Date().getHours();
  const saludo = hora < 12 ? "Buen día, Comandante." : hora < 18 ? "Buenas tardes, Comandante." : "Buenas noches, Comandante.";
  document.getElementById("saludo").innerHTML = `${saludo}<br>Telemetría de misiones financieras en curso.`;
  
  // Versión y Año
  document.querySelector("footer .brand").textContent = versionCompleta;
  document.getElementById("year").textContent = new Date().getFullYear();
  
  renderMissions();
}

// --- RENDERIZADO DE MISIONES ---
function renderMissions() {
  const root = document.getElementById("missions-root");
  
  // --- ORDENAMIENTO (Menor saldo actual a Mayor) ---
  const sortedMissions = [...missions].sort((a, b) => a.actual - b.actual);

  root.innerHTML = sortedMissions.map(m => {
    const pagado = m.original - m.actual;
    let pct = Math.min(Math.max((pagado / m.original) * 100, 0), 100).toFixed(2);
    const finalizado = m.actual <= 0;
    
    // Si finalizó, forzamos 100% para el cohete
    const displayPct = finalizado ? 100 : pct;

    // --- NUEVO: Detectar estado crítico (>90%) ---
    let estadoCohete = '';
    if (finalizado) {
      estadoCohete = 'landed';
    } else if (displayPct > 90) {
      estadoCohete = 'critical';
    }

    return `
      <div class="mission-container">
        <p class="mission-intro">Misión: ${m.nombre}</p>
        
        <div class="flight-path">
          <div class="progress-fill" style="width: ${displayPct}%"></div>
          <div class="rocket ${estadoCohete}" style="left: calc(${displayPct}% - 15px)">
            🚀
          </div>
        </div>

        <div class="status-text">
          Progreso: ${pct}% — Último movimiento: $${m.ultimo.toLocaleString()}
        </div>
        <div class="mission-label">
          <span>Saldo Anterior: $${m.anterior.toLocaleString()}</span><br>
          <span>Saldo Actual: ${finalizado ? '<strong>MISIÓN CUMPLIDA</strong>' : '$' + m.actual.toLocaleString()}</span>
        </div>
      </div>
    `;
  }).join('');
}

// --- CANVAS DE ESTRELLAS ---
(function starsBackground(){
  const canvas = document.getElementById('space-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function generateStars(n){
    stars = [];
    for (let i=0; i<n; i++){
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5,
        opacity: Math.random(),
        blinkSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }
  generateStars(100);

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "#020205";
    ctx.fillRect(0,0,w,h);

    for (let i=0; i<stars.length; i++){
      const s = stars[i];
      s.opacity += s.blinkSpeed;
      if (s.opacity > 1 || s.opacity < 0) s.blinkSpeed = -s.blinkSpeed;
      
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.opacity)})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

init();
