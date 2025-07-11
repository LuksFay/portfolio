export default function Desarrollo() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Experiencia en Desarrollo Web</h2>

    <p><span class="cargo">Arcade Estudio – Freelance</span> <span class="fecha">(12/2021 – Actualidad)</span></p>
    <ul>
      <li>Desarrollo web integral bajo sello propio, trabajando con clientes locales e internacionales (India, Francia).</li>
      <li>Stack principal: React, Vite, Firebase, Node.js, diseño UX/UI.</li>
      <li><strong>Tu Sillita</strong> (2025) – Aplicación web para escaneo de códigos QR y gestión de alquiler de mobiliario para eventos.</li>
      <li><strong>I.S.I.Trans</strong> (2023 – Actualidad) – Plataforma de gestión interna para empresa de transporte. Incluye módulos de cursos, usuarios, archivos PDF/XLSX y filtros personalizados por tipo de usuario. Hecha con Vite, React y Firebase.</li>
    </ul>

    <p><span class="cargo">Yeies! – Frontend Developer (React / Vue)</span> <span class="fecha">(07/2020 – 09/2021)</span></p>
    <ul>
      <li>Desarrollo de interfaces dinámicas y responsivas.</li>
      <li>Integración con APIs, animaciones interactivas y manejo de estado.</li>
      <li>Participación en proyectos web desde su fase inicial hasta producción.</li>
    </ul>
  `;
  return section;
}
