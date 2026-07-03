// main.js
import Header from './components/Header.js';
import Perfil from './components/Perfil.js';
import Desarrollo from './components/Desarrollo.js';
import Educacion from './components/Educacion.js';
import Idiomas from './components/Idiomas.js';
import { translations } from './translations.js';

const app = document.getElementById('app');

function langFromPath() {
  const match = window.location.pathname.match(/^\/(es|pt|en)\/?$/);
  return match ? match[1] : null;
}

let lang = langFromPath() || localStorage.getItem('lang') || 'es';

function updateURL(l) {
  const base = window.location.origin + window.location.pathname.replace(/^\/(es|pt|en)\/?/, '');
  const newPath = '/' + l + '/';
  window.history.pushState({ lang: l }, '', newPath);
}

function updateMeta(l) {
  document.documentElement.lang = l;
  const titles = { es: 'Fernando Lucas Picco — Portfolio CV', pt: 'Fernando Lucas Picco — Portfólio CV', en: 'Fernando Lucas Picco — Portfolio CV' };
  const descs = {
    es: 'Full-stack developer &amp; founder en ARCADE ESTUDIO. Sistemas, productos y ciberseguridad.',
    pt: 'Desenvolvedor full-stack &amp; founder na ARCADE ESTUDIO. Sistemas, produtos e cibersegurança.',
    en: 'Full-stack developer &amp; founder at ARCADE ESTUDIO. Systems, products and cybersecurity.'
  };
  document.title = titles[l];
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', titles[l]);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', titles[l]);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', descs[l]);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', descs[l]);
}

function renderApp() {
  app.innerHTML = '';

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
      updateURL(lang);
      updateMeta(lang);
      renderApp();
    });
    langWrapper.appendChild(btn);
  });

  app.appendChild(langWrapper);

  app.appendChild(Header(translations[lang].header));
  app.appendChild(Perfil(translations[lang].perfil));
  app.appendChild(Desarrollo(translations[lang].desarrollo));
  app.appendChild(Educacion(translations[lang].educacion));
  app.appendChild(Idiomas(translations[lang].idiomas));
}

if (!langFromPath()) {
  updateURL(lang);
}
updateMeta(lang);
renderApp();

window.addEventListener('popstate', () => {
  const l = langFromPath();
  if (l && l !== lang) {
    lang = l;
    localStorage.setItem('lang', lang);
    updateMeta(lang);
    renderApp();
  }
});
