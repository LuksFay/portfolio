export default function Idiomas() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Idiomas</h2>
    <ul>
      <li>Portugués – Avanzado (C1)</li>
      <li>Inglés – Intermedio (B1)</li>
    </ul>
  `;
  return section;
}
