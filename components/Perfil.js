export default function Perfil(data = {}) {
  // data: { titulo, texto }
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>${data.titulo || 'Perfil'}</h2>
    <p>${data.texto || ''}</p>
  `;
  return section;
}
