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
  { version: "1.0 (index.html)", date: "2025-03-15 09:30 PM", changes: "Creación inicial del sitio con Clima e Insuacción." },
  { version: "3.6 (index.html)", date: "2025-12-23 04:36 AM", changes: "Corrección definitiva del scroll fantasma, ajustes en html/body y flexbox." }
];

// ======================= ABONOS - HTML =======================
const abonosHtmlHistory = [
  { version: "1.0 (abonos.html)", date: "2025-06-10 19:30", changes: "Creación inicial con préstamos de Luis y Beatris." },
  { version: "4.2.1 (abonos.html)", date: "2025-12-28 08:00", changes: "Préstamo de Andy actualizado a $7,600." }
];

// ======================= ABONOS - CSS =======================
const abonosCssHistory = [
  { version: "1.0 (styles.css)", date: "2025-12-20 02:00", changes: "Archivo separado de estilos, fondo oscuro y barras neón." },
  { version: "1.2 (styles.css)", date: "2025-12-28 07:55", changes: "Se añade estilo .home-btn para botón discreto de inicio." }
];

// ======================= ABONOS - JS =======================
const abonosJsHistory = [
  { version: "1.0 (script.js)", date: "2025-12-20 03:00", changes: "Separación de lógica y render dinámico de préstamos." },
  { version: "1.4 (script.js)", date: "2025-12-28 08:00", changes: "Actualización de préstamo de Andy a $7,600." }
];

// ======================= HISTORY - HTML =======================
const historyHtmlHistory = [
  { version: "1.0 (history.html)", date: "2025-12-21 01:50", changes: "Creación inicial del historial dinámico con render automático y footer." },
  { version: "2.0 (history.html)", date: "2025-12-28 08:20 AM", changes: "Rediseño completo: separación en HTML, CSS y JS, títulos jerárquicos." },
  { version: "2.0.1 (history.html)", date: "2025-12-28 08:40 AM", changes: "Se añaden subgrupos HTML, CSS y JS en History. Footer actualizado a 2.0.1." }
];

// ======================= HISTORY - CSS =======================
const historyCssHistory = [
  { version: "1.0 (estilo.css)", date: "2025-12-21 01:50", changes: "Creación inicial de estilos para History: fondo oscuro y acentos neón." },
  { version: "2.0 (estilo.css)", date: "2025-12-28 08:20 AM", changes: "Estética refinada, tarjetas .history-entry con sombra y bordes redondeados." },
  { version: "2.0.1 (estilo.css)", date: "2025-12-28 08:45 AM", changes: "Se añade estilo específico para h3 con borde lateral neón y padding." }
];

// ======================= HISTORY - JS =======================
const historyJsHistory = [
  { version: "1.0 (version.js)", date: "2025-12-21 01:50", changes: "Primer script modular para renderizar historial y footer dinámico." },
  { version: "2.0 (version.js)", date: "2025-12-28 08:20 AM", changes: "Integración de arrays completos y renderización por secciones." },
  { version: "2.1 (version.js)", date: "2025-12-28 08:30 AM", changes: "Optimización y modularización del código, división en bloques y arrays completos." },
  { version: "2.1.1 (version.js)", date: "2025-12-28 08:50 AM", changes: "Se añaden subgrupos HTML, CSS y JS en History. Arrays completos y footer dinámico mejorado." }
];

// ======================= RENDER =======================
renderHistory("index-root", indexHistory);
renderHistory("abonos-html-root", abonosHtmlHistory);
renderHistory("abonos-css-root", abonosCssHistory);
renderHistory("abonos-js-root", abonosJsHistory);

renderHistory("history-html-root", historyHtmlHistory);
renderHistory("history-css-root", historyCssHistory);
renderHistory("history-js-root", historyJsHistory);

// ======================= FOOTER DINÁMICO =======================
(function updateFooter() {
  const yearEl = document.getElementById("year");
  const lastEl = document.getElementById("last-update");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastEl) lastEl.textContent = new Date().toLocaleString();
})();