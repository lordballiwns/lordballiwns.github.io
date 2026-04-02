// Versión JS 3.3.1 — Tema Espacial (v6.0 RC2)

const FASE_PRUEBA = "RC2"; 
const VERSION_BASE = "6.0";
const versionCompleta = `v${VERSION_BASE} (${FASE_PRUEBA})`;

// --- DATOS DE MISIONES (Telemetría Real) ---
const missions = [
  { id: "luis", nombre: "Luis", original: 17000, actual: 3880, ultimo: 500, anterior: 4380 },
  { id: "pedro", nombre: "Pedro", original: 1460, actual: 0, ultimo: 80, anterior: 80 },
  { id: "beatris", nombre: "Beatris", original: 2400, actual: 1800, ultimo: 0, anterior: 1800 },
  { id: "andy", nombre: "Andy", original: 11159, actual: 11159, ultimo: 1000, anterior: 10159 },
  // SEGUNDO ABONO APLAZO
  { id: "aplazo", nombre: "Aplazo", original: 8158.8, actual: 2259.36, ultimo: 1631.76, anterior: 3891.12 }
];

// --- INICIALIZAR INTERFAZ ---
function init() {
  const saludoEl = document.getElementById("saludo");
  if (saludoEl) {
    const hora = new Date().getHours();
    const saludo = hora < 12 ? "Buen día" : hora < 18 ? "Buenas tardes" : "Buenas noches";
    saludoEl.innerHTML = `${saludo}, Comandante.<br>Telemetría de misiones financieras en curso.`;
  }
  
  const footerBrand = document.querySelector("footer .brand");
  if (footerBrand) {
    footerBrand.textContent = `${versionCompleta} — Developed by Lord Balliwn's`;
  }
  
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
    yearEl.parentElement.innerHTML += " Proyecto Tigger Swan.";
  }
  
  renderMissions();
}

// --- RENDERIZADO DE MISIONES ---
function renderMissions() {
  const root = document.getElementById("missions-root");
  if (!root) return;
  
  // Ordenamiento: Mayor progreso porcentual primero
  const sortedMissions = [...missions].sort((a, b) => {
    const pctA = (a.original - a.actual) / a.original;
    const pctB = (b.original - b.actual) / b.original;
    return pctB - pctA; 
  });

  root.innerHTML = sortedMissions.map(m => {
    const pagado = m.original - m.actual;
    let pct = Math.min(Math.max((pagado / m.original) * 100, 0), 100).toFixed(2);
    
    const finalizado = m.actual <= 0;
    const displayPct = finalizado ? 100 : pct;

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

// --- MOTOR DE ESPACIO PROFUNDO (Estrellas v2.1) ---
(function starsBackground(){
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];
  const starColors = ["rgba(255, 255, 255,", "rgba(255, 250, 240,", "rgba(224, 247, 255,", "rgba(255, 255, 224,", "rgba(255, 244, 229,", "rgba(240, 248, 255,"];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function generateStars(n){
    stars = [];
    for (let i=0; i<n; i++){
      const baseOpacity = Math.random() * 0.5 + 0.3;
      stars.push({
        x: Math.random() * w, y: Math.random() * h,
        size: Math.random() * 2 + 0.5, 
        colorBase: starColors[Math.floor(Math.random() * starColors.length)],
        opacity: baseOpacity, baseOpacity: baseOpacity,
        blinkSpeed: Math.random() * 0.01 + 0.002 
      });
    }
  }
  generateStars(150);

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "#020205";
    ctx.fillRect(0,0,w,h);
    for (let i=0; i<stars.length; i++){
      const s = stars[i];
      s.opacity = s.baseOpacity + (Math.sin(Date.now() * s.blinkSpeed) * 0.2);
      ctx.fillStyle = `${s.colorBase} ${Math.max(0.1, Math.min(1, s.opacity))})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

init();
