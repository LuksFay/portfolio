// main.js
import Header from './components/Header.js';
import Perfil from './components/Perfil.js';
import Desarrollo from './components/Desarrollo.js';
import Educacion from './components/Educacion.js';
import Idiomas from './components/Idiomas.js';
import { translations } from './translations.js';

const app = document.getElementById('app');

// Estado simple
let lang = localStorage.getItem('lang') || 'es';

// Contenedor donde renderizamos todo
function renderApp() {
  app.innerHTML = '';

  // LANG SELECTOR
  const langWrapper = document.createElement('div');
  langWrapper.className = 'lang-select';
  const label = document.createElement('div');
  label.textContent = '';
  label.style.marginRight = '6px';
  langWrapper.appendChild(label);

  ['es','pt','en'].forEach(code => {
    const btn = document.createElement('button');
    btn.textContent = code.toUpperCase();
    btn.className = (code === lang) ? 'active' : '';
    btn.addEventListener('click', () => {
      if (lang === code) return;
      lang = code;
      localStorage.setItem('lang', lang);
      renderApp(); // re-render
    });
    langWrapper.appendChild(btn);
  });

  app.appendChild(langWrapper);

  // Header + sections
  app.appendChild(Header(translations[lang].header));
  app.appendChild(Perfil(translations[lang].perfil));
  app.appendChild(Desarrollo(translations[lang].desarrollo));
  app.appendChild(Educacion(translations[lang].educacion));
  
  app.appendChild(Idiomas(translations[lang].idiomas));
}

// inicial
renderApp();
