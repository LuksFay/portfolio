export default function Educacion() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Educación</h2>

    <p><strong>Bacharelado em Sistemas de Informação</strong> – Instituto Federal Catarinense (IFC, Brasil) <span class="fecha">(03/2025 – Actualidad)</span></p>

    <p><strong>Licenciatura en Historia</strong> – Universidad Nacional de Rosario (UNR) <span class="fecha">(2018)</span> <em>(incompleto)</em></p>

    <p><strong>Licenciatura en Turismo</strong> – Instituto Belgrano / T.E.C. <span class="fecha">(2016 – 2018)</span> <em>(incompleto)</em></p>

    <p><strong>Bachiller en Humanidades</strong> – San Francisco Solano, Rosario <span class="fecha">(2015)</span></p>
  `;
  return section;
}
