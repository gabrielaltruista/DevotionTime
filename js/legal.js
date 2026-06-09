function setLang(lang) {
  document.documentElement.classList.toggle('lang-en', lang === 'en');
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  localStorage.setItem('dt_lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  // Nav hamburger toggle
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // Lang button listeners
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  if (btnPt) btnPt.addEventListener('click', () => setLang('pt'));
  if (btnEn) btnEn.addEventListener('click', () => setLang('en'));

  // Detect initial language (synced with index.html via localStorage key dt_lang)
  const saved = localStorage.getItem('dt_lang');
  if (saved === 'en') { setLang('en'); return; }
  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (!nav.startsWith('pt') && saved !== 'pt') {
    setLang('en');
  } else {
    setLang('pt');
  }
});
