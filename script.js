// Versión JS 2.5.1 — Compatible con HTML 5.1.2
// Parte 1 — Configuración inicial y datos de préstamos actualizados

// Saludo dinámico según la hora
const fechaActual = new Date();
const horaActual = fechaActual.getHours();
const saludoTemporal = horaActual < 12 ? "Buenos días" : horaActual < 18 ? "Buenas tardes" : "Buenas noches";
const saludoCompleto = `<br>${saludoTemporal}. A continuación se muestra el estado actual de los préstamos.`;

const saludoDiv = document.getElementById("saludo");
saludoDiv.innerHTML = saludoCompleto;

// Datos de préstamos actualizados
const loans = [
  { 
    id: "luis",    
    nombre: "Luis",    
    montoOriginal: 17000, 
    saldoActual: 3880,  
    ultimoAbono: 500,  
    saldoAnterior: 4380,  
    intro: "Préstamo correspondiente a Luis." 
  },
  { 
    id: "pedro",   
    nombre: "Pedro",   
    montoOriginal: 1460, 
    saldoActual: 80,   // saldo actual después del abono
    ultimoAbono: 140,  // corregido de 160 a 140
    saldoAnterior: 220,   
    intro: "Préstamo correspondiente a Pedro." 
  },
  { 
    id: "beatris", 
    nombre: "Beatris", 
    montoOriginal: 2400, 
    saldoActual: 1800,  
    ultimoAbono: 0,    
    saldoAnterior: 1800,  
    intro: "Préstamo correspondiente a Beatris." 
  },
  { 
    id: "andy",    
    nombre: "Andy",    
    montoOriginal: 11159, 
    saldoActual: 10159,  // saldo actual después del abono
    ultimoAbono: 1000,  
    saldoAnterior: 11159,  
    intro: "Préstamo correspondiente a Andy." 
  }
];
// Versión JS 2.5.1 — Compatible con HTML 5.1.2
// Parte 2 — Renderizado y lógica de progreso

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
  cont.className = "progress-container spring-theme";
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

// Función actualizarBarra
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

// Aplicar actualización a cada préstamo
loans.forEach(l => actualizarBarra(l.id, l.montoOriginal, l.saldoActual, l.ultimoAbono, l.saldoAnterior));

// Versión JS 2.5.1 — Compatible con HTML 5.1.2
// Parte 3 — Footer y versión

// Actualizar año dinámicamente en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Actualizar versión en el footer
document.querySelector("footer .brand").textContent = "5.1.2"; // se muestra como v5.1.2 en HTML

// Nota: El HTML ya está preparado para mostrar:
// © 2026 — v5.1.2 — Desarrollado por Lord Balliwn's

// Versión JS 2.5.1 — Compatible con HTML 5.1.2
// Parte 4 — Animación de flores emoji 🌸 🌼 💮

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

  // Lista de flores emoji
  const flowerEmojis = ["🌸","🌼","💮"];

  function generatePetals(n){
    petals = [];
    for (let i=0;i<n;i++){
      petals.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 24 + 16, // tamaño en px
        d: Math.random() * 0.5 + 0.2,  // velocidad de caída
        sway: Math.random() * 0.6 + 0.2, // movimiento lateral
        emoji: flowerEmojis[Math.floor(Math.random()*flowerEmojis.length)]
      });
    }
  }
  generatePetals(40);

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

    // Dibujar flores emoji
    for (let i=0;i<petals.length;i++){
      const p = petals[i];
      ctx.font = `${p.size}px serif`;
      ctx.fillText(p.emoji, p.x, p.y);

      // Movimiento
      p.y += p.d;
      p.x += Math.sin(performance.now()/1000 + i) * (p.sway * 0.5);

      // Reinicio cuando salen de pantalla
      if (p.y > h + 30) { p.y = -30; p.x = Math.random() * w; }
      if (p.x < -30)   { p.x = w + 30; }
      if (p.x > w + 30){ p.x = -30; }
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();