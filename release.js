// Versión JS 3.1.1 — Tema Espacial (Release Candidate 1)

// --- CONFIGURACIÓN DE VERSIÓN AUTOMÁTICA ---
const FASE_PRUEBA = "RC1"; // <--- ACTUALIZADO
const VERSION_BASE = "6.0"; // <--- ACTUALIZADO
const REVISION = ""; // No se usa revisión en RC
const versionCompleta = `v${VERSION_BASE} (${FASE_PRUEBA})`;

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
    
    // --- LÓGICA DE ESTADO FINAL (0% absoluto) ---
    const finalizado = m.actual <= 0;
    
    // Si finalizado, forzamos 100% para el cohete
    const displayPct = finalizado ? 100 : pct;

    // --- LÓGICA DE ESTADO CRÍTICO (>90%) ---
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

// --- CANVAS DE ESTRELLAS (Motor v2.0) ---
(function starsBackground(){
  const canvas = document.getElementById('space-canvas');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];

  // --- NUEVO: Paleta de colores estelares suaves ---
  const starColors = [
    "rgba(255, 255, 255,",   // Blanco puro
    "rgba(255, 250, 240,",   // Blanco crema (FloralWhite)
    "rgba(224, 247, 255,",   // Azul muy pálido
    "rgba(255, 255, 224,",   // Amarillo muy pálido (LightYellow)
    "rgba(255, 244, 229,",   // Naranja muy suave
    "rgba(240, 248, 255,"    // Azul cielo pálido (AliceBlue)
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
      // --- AJUSTE: Brillo y Color ---
      const baseOpacity = Math.random() * 0.5 + 0.3; // Opacidad base más alta (0.3 a 0.8)
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5, // Estrellas ligeramente más grandes
        colorBase: starColors[Math.floor(Math.random() * starColors.length)], // Color aleatorio de la paleta
        opacity: baseOpacity, 
        baseOpacity: baseOpacity, // Guardamos la base para el parpadeo
        blinkSpeed: Math.random() * 0.01 + 0.002 // Parpadeo más lento y natural
      });
    }
  }
  generateStars(150); // Mantenemos una cantidad similar

  function draw(){
    ctx.clearRect(0,0,w,h);
    // Fondo espacial profundo
    ctx.fillStyle = "#020205";
    ctx.fillRect(0,0,w,h);

    for (let i=0; i<stars.length; i++){
      const s = stars[i];
      
      // --- LÓGICA DE PARPADEO MEJORADA ---
      // El parpadeo oscila alrededor de la opacidad base
      s.opacity = s.baseOpacity + (Math.sin(Date.now() * s.blinkSpeed) * 0.2);
      
      // Asegurar que la opacidad se mantenga en rango visible pero brillante
      const finalOpacity = Math.max(0.2, Math.min(1, s.opacity));
      
      ctx.fillStyle = `${s.colorBase} ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();

init();
