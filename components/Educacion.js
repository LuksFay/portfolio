export default function Educacion(data = {}) {
  // data: { titulo, items: [] }
  const section = document.createElement('section');
  const items = Array.isArray(data.items) ? data.items : [];
  section.innerHTML = `<h2>${data.titulo || 'Educación'}</h2>`;

  if (items.length) {
    const ul = document.createElement('ul');
    items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = it;
      ul.appendChild(li);
    });
    section.appendChild(ul);
  }

  return section;
}
