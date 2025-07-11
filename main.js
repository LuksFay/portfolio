import Header from './components/Header.js';
import Perfil from './components/Perfil.js';
import Experiencia from './components/Experiencia.js';
import Desarrollo from './components/Desarrollo.js';
import Educacion from './components/Educacion.js';
import Certificaciones from './components/Certificaciones.js';
import Idiomas from './components/Idiomas.js';

const app = document.getElementById('app');

// Agrego header y perfil como siempre
app.appendChild(Header());
app.appendChild(Perfil());

// Contenedor de pestañas
const tabsContainer = document.createElement('div');
tabsContainer.innerHTML = `
  <div class="tabs">
    <button id="btn-exp">Experiencia laboral</button>
    <button id="btn-dev">Desarrollo web</button>
  </div>
  <div id="tab-content"></div>
`;
app.appendChild(tabsContainer);

// Referencias a botones y contenedor
const btnExp = tabsContainer.querySelector('#btn-exp');
const btnDev = tabsContainer.querySelector('#btn-dev');
const tabContent = tabsContainer.querySelector('#tab-content');

// Función para limpiar y cargar contenido
function mostrarSeccion(seccion) {
  tabContent.innerHTML = ''; // Limpiar
  if (seccion === 'exp') tabContent.appendChild(Experiencia());
  if (seccion === 'dev') tabContent.appendChild(Desarrollo());
}

// Eventos de los botones
btnExp.addEventListener('click', () => mostrarSeccion('exp'));
btnDev.addEventListener('click', () => mostrarSeccion('dev'));

// Mostrar primero "Experiencia"
mostrarSeccion('exp');

// Luego, continúan las otras secciones normalmente
app.appendChild(Educacion());
app.appendChild(Certificaciones());
app.appendChild(Idiomas());
