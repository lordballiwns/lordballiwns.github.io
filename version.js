// ======================= INDEX =======================
const indexHistory = [
  { version: "1.0 (index.html)", date: "2025-03-15 09:30 PM", changes: "Creación inicial del sitio. Fondo IMG_3522_Original.jpeg, contenedor central transparente, secciones Clima e Insuacción, botones básicos." },
  { version: "1.1 (index.html)", date: "2025-04-02 06:45 PM", changes: "Mejora de estilos: hover en botones, bordes redondeados, texto más legible." },
  { version: "1.2 (index.html)", date: "2025-05-10 12:20 PM", changes: "Se añade div.welcome-message y texto explicativo más detallado." },
  { version: "2.0 (index.html)", date: "2025-07-01 10:00 PM", changes: "Se eliminan Clima e Insuacción. Nuevas secciones: SAP, Lank, Tigcis y Abonos." },
  { version: "3.0 (index.html)", date: "2025-12-22 11:45 PM", changes: "Renovación total del estilo: tipografía moderna, acentos neón, fondo con logo Proyecto Tigger Swan, enlaces SAP/Lank/Tigcis en '#', Abonos activo." },
  { version: "3.1 (index.html)", date: "2025-12-23 03:10 AM", changes: "Corrección de fondo IMG_3522_Original.jpeg, descripciones detalladas, Abonos renombrado a Finanzas." },
  { version: "3.2 (index.html)", date: "2025-12-23 04:00 AM", changes: "Animación fade-in, logo junto al título, iconografía en botones, footer institucional con créditos e historial." },
  { version: "3.3 (index.html)", date: "2025-12-23 04:20 AM", changes: "Corrección nombre archivo IMG_3522_Original.jpeg, ajuste en h1 para usarlo como logo." },
  { version: "3.4 (index.html)", date: "2025-12-23 03:40 AM", changes: "Corrección definitiva del archivo, eliminación duplicidad, fondo ajustado con cover, se elimina logo junto al título." },
  { version: "3.5 (index.html)", date: "2025-12-23 03:56 AM", changes: "Footer replicado estilo Finanzas, botones reorganizados en cuadrícula 2x2, fondo único cubriendo pantalla." },
  { version: "3.5.1 (index.html)", date: "2025-12-23 04:10 AM", changes: "Footer replicado con versión 3.5.1 y año dinámico, color azul institucional en .brand, eliminado campo batería." },
  { version: "3.5.2 (index.html)", date: "2025-12-23 04:25 AM", changes: "Corrección de errores, optimización de estilos y semántica, textos más comerciales, cajones con mensajes breves, footer actualizado." },
  { version: "3.5.3 (index.html)", date: "2025-12-23 04:30 AM", changes: "Corrección scroll fantasma, texto Finanzas actualizado con acceso institucional, optimización ligera de estilos." },
  { version: "3.6 (index.html)", date: "2025-12-23 04:36 AM", changes: "Corrección definitiva scroll fantasma, ajustes en html/body con overflow hidden y height 100%, contenedor centrado con flexbox." }
];

// ======================= ABONOS - HTML =======================
const abonosHtmlHistory = [
  { version: "1.0 (abonos.html)", date: "2025-06-10 19:30", changes: "Creación inicial con préstamos de Luis y Beatris, barra de progreso básica." },
  { version: "2.0 (abonos.html)", date: "2025-07-05 21:00", changes: "Se añade préstamo de PayJoy." },
  { version: "3.0 (abonos.html)", date: "2025-09-12 20:15", changes: "Se añade préstamo de Andy, footer con versión y firma, orden dinámico por monto." },
  { version: "3.3 (abonos.html)", date: "2025-10-01 22:00", changes: "Corrección monto original de PayJoy a $4,416." },
  { version: "4.0 (abonos.html)", date: "2025-12-20 01:15", changes: "Se añade préstamo de Pedro ($1,360, saldo $860), canvas de nieve, desactivación en Safari/iOS." },
  { version: "4.1 (abonos.html)", date: "2025-12-20 01:45", changes: "Correcciones menores de presentación y consistencia." },
  { version: "4.1.1 (abonos.html)", date: "2025-12-21 01:50", changes: "Luis saldo $4,430, Pedro monto $1,460 saldo $960, footer actualizado." },
  { version: "4.2 (abonos.html)", date: "2025-12-28 07:55", changes: "Se añade botón discreto en footer hacia index.html, footer actualizado." },
  { version: "4.2.1 (abonos.html)", date: "2025-12-28 08:00", changes: "Préstamo de Andy actualizado a $7,600, footer actualizado." }
];

// ======================= ABONOS - CSS =======================
const abonosCssHistory = [
  { version: "1.0 (styles.css)", date: "2025-12-20 02:00", changes: "Archivo separado de estilos, fondo azul oscuro (--bg-dark), barras neón (--neon), footer con firma y batería, canvas de nieve, overflow hidden en body." },
  { version: "1.1 (styles.css)", date: "2025-12-20 02:30", changes: "Corrección scroll: se elimina overflow hidden, se añade overflow-x:hidden y overflow-y:auto." },
  { version: "1.2 (styles.css)", date: "2025-12-28 07:55", changes: "Se añade estilo .home-btn para botón discreto de inicio, hover con efecto neón." }
];

// ======================= ABONOS - JS =======================
const abonosJsHistory = [
  { version: "1.0 (script.js)", date: "2025-12-20 03:00", changes: "Separación de lógica, autorización de nombres, saludo dinámico, render de préstamos, animación de nieve adaptativa, detección batería, desactivación en Safari/iOS." },
  { version: "1.1 (script.js)", date: "2025-12-20 03:30", changes: "Corrección detección Safari/Chrome, añadido try/catch en batería, footer siempre muestra estado." },
  { version: "1.2 (script.js)", date: "2025-12-21 01:55", changes: "Actualización préstamos: Luis saldo $4,430, Pedro monto $1,460 saldo $960, orden dinámico actualizado." },
  { version: "1.3 (script.js)", date: "2025-12-28 07:55", changes: "Footer actualizado a versión 4.2, sin cambios en lógica de préstamos." },
  { version: "1.4 (script.js)", date: "2025-12-28 08:00", changes: "Préstamo de Andy actualizado a $7,600, footer actualizado a versión 4.2.1." }
];

// ======================= HISTORY =======================
const historyHistory = [
  { version: "1.0 (history.html)", date: "2025-12-21 01:50", changes: "Creación inicial del historial dinámico con render automático y footer con versión/año." },
  { version: "2.0 (history.html)", date: "2025-12-28 08:20", changes: "Rediseño completo: separación en HTML, CSS y JS, títulos jerárquicos, footer actualizado." }
];

// ======================= RENDER =======================
renderHistory("index-root", indexHistory);
renderHistory("abonos-html-root", abonosHtmlHistory);
renderHistory("abonos-css-root", abonosCssHistory);
renderHistory("abonos-js-root", abonosJsHistory);
renderHistory("history-root", historyHistory);

// Footer dinámico
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-update").textContent = new Date().toLocaleString();