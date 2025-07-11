export default function Header() {
  const header = document.createElement('header');
  header.innerHTML = `
    <div>
      <h1>Fernando Lucas Picco</h1>
      <div class="info">Rosario, Santa Fe, Argentina</div>
      <div class="info">luksfaydev@gmail.com | <a href="https://www.linkedin.com/in/luksfay" target="_blank">LinkedIn</a></div>
    </div>
    <img src="https://images.app.goo.gl/ELX9x2UgMuahUbJz7" alt="Foto de perfil" class="foto">
  `;
  return header;
}
