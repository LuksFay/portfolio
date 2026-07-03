export default function Header(data = {}) {
  // data: { name, location, contact, linkedin }
  const header = document.createElement('header');

  header.innerHTML = `
    <div class="left">
      <h1>${data.name || 'Nombre Apellido'}</h1>
      <div class="info">${data.location || ''}</div>
      <div class="info">
        ${data.contact ? `${data.contact} | ` : ''}
        ${data.linkedin ? `<a href="${data.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''}
      </div>
    </div>
    <img src="/assets/foto.jpg" alt="Foto de perfil" class="foto">
  `;

  return header;
}
