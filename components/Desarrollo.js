export default function Desarrollo(data = {}) {
  const section = document.createElement('section');
  const title = data.titulo || 'Experiencia en Desarrollo Web';
  const labels = data.labels || { queEs: 'Qué es', funciones: 'Funciones' };
  const proyectos = Array.isArray(data.proyectos) ? data.proyectos : [];

  const container = document.createElement('div');
  container.innerHTML = `<h2>${title}</h2>`;

  proyectos.forEach(p => {
    const box = document.createElement('div');
    box.className = 'proyecto';

    const imgs = Array.isArray(p.screenshots) ? p.screenshots : [];

    box.innerHTML = `
      <div class="proyecto-header">
        <div class="nombre">${p.nombre}</div>
        <div class="stack">${p.stack || ''}</div>
      </div>
      <div class="proyecto-body">
        <div class="proyecto-item">
          <span class="label">${labels.queEs}</span>
          <span>${p.queEs || ''}</span>
        </div>
        <div class="proyecto-item">
          <span class="label">${labels.funciones}</span>
          <span>${p.funciones || ''}</span>
        </div>
      </div>
      ${imgs.length ? `<div class="proyecto-screenshots">${imgs.map(src => `<img src="${src}" class="ss-thumb" loading="lazy">`).join('')}</div>` : ''}
    `;

    if (imgs.length) {
      const thumbs = box.querySelectorAll('.ss-thumb');
      thumbs.forEach(img => {
        img.addEventListener('click', () => {
          const overlay = document.createElement('div');
          overlay.className = 'ss-overlay';
          overlay.innerHTML = `<img src="${img.src}" class="ss-full"><span class="ss-close">&times;</span>`;
          overlay.querySelector('.ss-close').addEventListener('click', () => overlay.remove());
          overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
          document.body.appendChild(overlay);
        });
      });
    }

    container.appendChild(box);
  });

  section.appendChild(container);
  return section;
}
