export default function Habilidades() {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Habilidades</h2>
    <ul>
      <li>HTML, CSS, JavaScript, React, Vue, Next.js, Vite</li>
      <li>SASS, Tailwind, Bootstrap</li>
      <li>Git, GitHub</li>
      <li>Figma, Canva, Gimp</li>
      <li>WordPress, Shopify, Wix</li>
    </ul>
  `;
  return section;
}
