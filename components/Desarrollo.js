export default function Desarrollo(data = {}) {
  // data: { titulo, proyectos: [{ nombre, stack, descripcion }] }
  const section = document.createElement('section');

  const title = data.titulo || 'Experiencia en Desarrollo Web';
  const proyectos = Array.isArray(data.proyectos) ? data.proyectos : [];

  const container = document.createElement('div');
  container.innerHTML = `<h2>${title}</h2>`;

  proyectos.forEach(p => {
    const box = document.createElement('div');
    box.className = 'proyecto';

    // estructura interna
    box.innerHTML = `
      <div class="meta">
        <div class="nombre">${p.nombre}</div>
        <div class="stack">${p.stack ? ' • ' + p.stack : ''}</div>
      </div>
      <div class="descripcion">${p.descripcion || ''}</div>
    `;

    container.appendChild(box);
  });

  // Si querés añadir links a repos, agrega p.repo en translations y aquí hacé:
  // if (p.repo) { ... crear <a> ... }

  section.appendChild(container);
  return section;
}
