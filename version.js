// ======================= FUNCIÓN GENÉRICA =======================
function renderHistory(rootId, data) {
  const root = document.getElementById(rootId);
  if (!root || !Array.isArray(data)) return;

  data.forEach(entry => {
    const div = document.createElement("div");
    div.className = "history-entry";
    div.innerHTML = `
      <h3>${entry.version}</h3>
      <p><strong>Fecha:</strong> ${entry.date}</p>
      <p><strong>Cambios:</strong> ${entry.changes}</p>
    `;
    root.appendChild(div);
  });
}

// ======================= INDEX =======================
const indexHistory = [
  { version: "1.0 (index.html)", date: "2025-03-15 09:30 PM", changes: "Creación inicial del sitio. Fondo IMG_3522_Original.jpeg, contenedor central transparente (rgba), secciones Clima e Insuacción, botones básicos." },
  { version: "1.1 (index.html)", date: "2025-04-02 06:45 PM", changes: "Mejora de estilos: hover en botones, bordes redondeados, texto más legible." },
  { version: "1.2 (index.html)", date: "2025-05-10 12:20 PM", changes: "Se añade div.welcome-message y texto explicativo más detallado sobre Clima e Insuacción." },
  { version: "2.0 (index.html)", date: "2025-07-01 10:00 PM", changes: "Se eliminan Clima e Insuacción. Nuevas secciones: SAP, Lank, Tigcis y Abonos. Fondo aún con la imagen original." },
  { version: "3.0 (index.html)", date: "2025-12-22 11:45 PM", changes: "Renovación total del estilo: tipografía moderna y acentos neón, mensaje de bienvenida institucional, fondo con logo Proyecto Tigger Swan, enlaces SAP/Lank/Tigcis en '#', Abonos activo." },
  { version: "3.1 (index.html)", date: "2025-12-23 03:10 AM", changes: "Corrección del fondo IMG_3522_Original.jpeg confirmado, descripciones detalladas añadidas, Abonos renombrado a Finanzas y apunta a abonos.html." },
  { version: "3.2 (index.html)", date: "2025-12-23 04:00 AM", changes: "Animación suave fade-in, logo junto al título institucional, iconografía en botones principales, footer institucional con créditos y enlace al historial." },
  { version: "3.3 (index.html)", date: "2025-12-23 04:20 AM", changes: "Corrección del nombre del archivo IMG_3522_Original.jpeg, ajuste en h1 para usar el archivo correcto como logo." },
  { version: "3.4 (index.html)", date: "2025-12-23 03:40 AM", changes: "Corrección definitiva del nombre del archivo, se elimina duplicidad del JPEG (solo fondo), fondo ajustado con cover, se elimina logo junto al título." },
  { version: "3.5 (index.html)", date: "2025-12-23 03:56 AM", changes: "Footer replicado del estilo Finanzas, botones reorganizados en cuadrícula 2x2, fondo único cubriendo toda la pantalla." },
  { version: "3.5.1 (index.html)", date: "2025-12-23 04:10 AM", changes: "Footer replicado con versión 3.5.1 y año dinámico, color azul institucional en .brand, eliminado campo de batería." },
  { version: "3.5.2 (index.html)", date: "2025-12-23 04:25 AM", changes: "Corrección de errores y eliminación de código obsoleto, optimización de estilos y estructura semántica, textos más comerciales en cajones, footer actualizado a 3.5.2." },
  { version: "3.5.3 (index.html)", date: "2025-12-23 04:30 AM", changes: "Corrección del desplazamiento innecesario (scroll fantasma), texto de Finanzas actualizado (acceso institucional con clave), optimización ligera de estilos." },
  { version: "3.6 (index.html)", date: "2025-12-23 04:36 AM", changes: "Corrección definitiva del scroll fantasma: ajustes en html/body con overflow:hidden y height:100%, contenedor centrado con flexbox sin desbordes." }
];

// ======================= ABONOS - HTML =======================
const abonosHtmlHistory = [
  { version: "1.0 (abonos.html)", date: "2025-06-10 19:30", changes: "Creación inicial con préstamos de Luis y Beatris. Barra de progreso básica sin estilos externos." },
  { version: "2.0 (abonos.html)", date: "2025-07-05 21:00", changes: "Se añade préstamo de PayJoy. Se mantiene diseño simple." },
  { version: "3.0 (abonos.html)", date: "2025-09-12 20:15", changes: "Se añade préstamo de Andy. Se incorpora footer con versión y firma. Orden dinámico por monto." },
  { version: "3.3 (abonos.html)", date: "2025-10-01 22:00", changes: "Corrección del monto original de PayJoy a $4,416 para reflejar 67% pagado." },
  { version: "4.0 (abonos.html)", date: "2025-12-20 01:15", changes: "Se añade préstamo de Pedro ($1,360, saldo $860). Canvas para nieve animada. Nieve desactivada en Safari/iOS." },
  { version: "4.1 (abonos.html)", date: "2025-12-20 01:45", changes: "Correcciones menores de presentación y consistencia." },
  { version: "4.1.1 (abonos.html)", date: "2025-12-21 01:50", changes: "Luis: saldo actual $4,430 tras abono de $500. Pedro: monto original $1,460, saldo actual $960 tras abono de $500. Footer actualizado." },
  { version: "4.2 (abonos.html)", date: "2025-12-28 07:55", changes: "Se añade botón discreto en el footer que enlaza a index.html. Footer actualizado a 4.2." },
  { version: "4.2.1 (abonos.html)", date: "2025-12-28 08:00", changes: "Se actualiza el préstamo de Andy: monto original sube a $7,600. Footer actualizado a 4.2.1." }
];

// ======================= ABONOS - CSS =======================
const abonosCssHistory = [
  { version: "1.0 (styles.css)", date: "2025-12-20 02:00", changes: "Se crea archivo separado de estilos. Fondo azul oscuro (--bg-dark). Barras de progreso en azul neón (--neon). Footer con firma y estado de batería. Canvas de nieve fijado al fondo. overflow:hidden en body (causaba corte de scroll)." },
  { version: "1.1 (styles.css)", date: "2025-12-20 02:30", changes: "Corrección de scroll: se elimina overflow:hidden; se añade overflow-x:hidden y overflow-y:auto. Footer y nieve visibles correctamente." },
  { version: "1.2 (styles.css)", date: "2025-12-28 07:55", changes: "Se añade estilo .home-btn para botón discreto de inicio. Hover con efecto neón y contraste con fondo oscuro." }
];

// ======================= ABONOS - JS =======================
const abonosJsHistory = [
  { version: "1.0 (script.js)", date: "2025-12-20 03:00", changes: "Se separa la lógica. Autorización de nombres con .trim(). Saludo dinámico según hora. Renderizado de préstamos y cálculo de porcentajes. Footer dinámico con año actual. Animación de nieve adaptativa según rendimiento. Detección de batería para reducir copos. Desactivación de nieve en Safari/iOS." },
  { version: "1.1 (script.js)", date: "2025-12-20 03:30", changes: "Corrección en detección de Safari/Chrome. Se añade try/catch en batería para evitar errores. Footer siempre muestra estado (batería, error o no disponible)." },
  { version: "1.2 (script.js)", date: "2025-12-21 01:55", changes: "Actualización de datos de préstamos: Luis → saldo $4,430; Pedro → monto $1,460 y saldo $960. Orden dinámico actualizado según porcentaje pagado. Se mantiene la animación adaptativa." },
  { version: "1.3 (script.js)", date: "2025-12-28 07:55", changes: "Footer actualizado a versión 4.2. No se modifica la lógica de préstamos ni la animación." },
  { version: "1.4 (script.js)", date: "2025-12-28 08:00", changes: "Actualización de datos: Andy → monto original $7,600, saldo $7,600. Footer actualizado a versión 4.2.1." }
];

// ======================= HISTORY =======================
const historyHistory = [
  { version: "1.0 (history.html)", date: "2025-12-21 01:50", changes: "Creación inicial del historial dinámico con render automático y footer con versión/año." },
  { version: "2.0 (history.html)", date: "2025-12-28 08:20 AM", changes: "Rediseño completo del historial: secciones Index, Abonos y History; subgrupos (HTML, CSS, JS) en Abonos; títulos jerárquicos; footer actualizado a 2.0." }
];

// ======================= RENDER =======================
// Index sin subgrupos
renderHistory("index-root", indexHistory);

// Abonos con subgrupos
renderHistory("abonos-html-root", abonosHtmlHistory);
renderHistory("abonos-css-root", abonosCssHistory);
renderHistory("abonos-js-root", abonosJsHistory);

// History sin subgrupos
renderHistory("history-root", historyHistory);

// ======================= FOOTER DINÁMICO =======================
(function updateFooter() {
  const yearEl = document.getElementById("year");
  const lastEl = document.getElementById("last-update");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastEl) lastEl.textContent = new Date().toLocaleString();
})();