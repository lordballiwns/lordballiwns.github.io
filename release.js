// Versión JS 3.2.9 — Tema Espacial (v6.0 RC2)

const FASE_PRUEBA = "RC2"; 
const VERSION_BASE = "6.0";
const versionCompleta = `v${VERSION_BASE} (${FASE_PRUEBA})`;

// --- DATOS DE MISIONES (Telemetría Real) ---
const missions = [
  { id: "luis", nombre: "Luis", original: 17000, actual: 3880, ultimo: 500, anterior: 4380 },
  { id: "pedro", nombre: "Pedro", original: 1460, actual: 0, ultimo: 80, anterior: 80 },
  { id: "beatris", nombre: "Beatris", original: 2400, actual: 1800, ultimo: 0, anterior: 1800 },
  { id: "andy", nombre: "Andy", original: 11159, actual: 11159, ultimo: 1000, anterior: 10159 },
  // NUEVA DEUDA APLAZO
  { id: "aplazo", nombre: "Aplazo", original: 8158.8, actual: 5522.88, ultimo: 2635.92, anterior: 8158.8 }
];

// --- INICIALIZAR INTERFAZ ---
function init() {
  const saludoEl = document.getElementById("saludo");
  if (saludoEl) {
    const hora = new Date().getHours();
    const saludo = hora < 12 ? "Buen día" : hora < 18 ? "Buenas tardes" : "Buenas noches";
    saludoEl.innerHTML = `${saludo}, Comandante.<br>Telemetría de misiones financieras en curso.`;
  }
  
  // 1. Inyección de Versión y Autor en línea .brand
  const footerBrand = document.querySelector("footer .brand");
  if (footerBrand) {
    footerBrand.textContent = `${versionCompleta} — Developed by Lord Balliwn's`;
  }
  
  // 2. Inyección de Año y Copyright en línea .copyright
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
    // Añadimos el resto del copyright al contenedor padre para no duplicar en HTML
    yearEl.parentElement.innerHTML += " Proyecto Tigger Swan.";
  }
  
  renderMissions();
}

// --- RENDERIZADO DE MISIONES ---
function renderMissions() {
  const root = document.getElementById("missions-root");
  if (!root) return;
  
  // Ordenamiento por saldo actual (menor a mayor)
  const sortedMissions = [...missions].sort((a, b) => a.actual - b.actual);

  root.innerHTML = sortedMissions.map(m => {
    const pagado = m.original - m.actual;
    let pct = Math.min(Math.max((pagado / m.original) * 100, 0), 100).toFixed(2);
    
    const finalizado = m.actual <= 0;
    const displayPct = finalizado ? 100 : pct;

    // Estados visuales del cohete
    let estadoCohete = '';
    if (finalizado) {
      estadoCohete = 'landed'; // Gris y quieto
    } else if (displayPct > 90) {
      estadoCohete = 'critical'; // Vibración rápida y brillo rojo (combustible crítico)
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

  // Paleta de colores estelares reales
  const starColors = [
    "rgba(255, 255, 255,",   // Blanco
    "rgba(255, 250, 240,",   // Crema/Hueso
    "rgba(224, 247, 255,",   // Azul hielo
    "rgba(255, 255, 224,",   // Amarillo pálido
    "rgba(255, 244, 229,",   // Naranja suave
    "rgba(240, 248, 255,"    // Alice Blue
  ];

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function generateStars(n){
    stars = [];
    for (let i=0; i<n; i++){
      const baseOpacity = Math.random() * 0.5 + 0.3; // Más brillantes para visibilidad
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5, 
        colorBase: starColors[Math.floor(Math.random() * starColors.length)],
        opacity: baseOpacity, 
        baseOpacity: baseOpacity,
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
      // Parpadeo suave
      s.opacity = s.baseOpacity + (Math.sin(Date.now() * s.blinkSpeed) * 0.2);
      const finalOpacity = Math.max(0.1, Math.min(1, s.opacity));
      
      ctx.fillStyle = `${s.colorBase} ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

// Ignición
init();
