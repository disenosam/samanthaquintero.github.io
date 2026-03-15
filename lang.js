// =========================================================
// SISTEMA DE IDIOMAS — Samantha Quintero Portfolio
//
// Para agregar una traduccion nueva a cualquier elemento HTML:
//   <p data-es="Texto en español" data-en="Text in English">Texto en español</p>
//
// El script detecta todos los elementos con data-es / data-en
// y los cambia automaticamente al presionar ES o EN.
// =========================================================

var lang = 'es';

function setLang(l) {
  if (l === lang) return;
  lang = l;

  // Fade out
  document.body.classList.add('switching');

  setTimeout(function() {
    // Cambiar atributo lang del HTML (bueno para SEO y accesibilidad)
    document.documentElement.lang = l;

    // Actualizar todos los elementos traducibles
    document.querySelectorAll('[data-es]').forEach(function(el) {
      var text = el.getAttribute('data-' + l);
      if (text !== null) el.innerHTML = text;
    });

    // Actualizar botones activos
    document.getElementById('btn-es').classList.toggle('active', l === 'es');
    document.getElementById('btn-en').classList.toggle('active', l === 'en');

    // Fade in
    document.body.classList.remove('switching');
  }, 200);
}

// Auto-detectar idioma del navegador al cargar la pagina
document.addEventListener('DOMContentLoaded', function() {
  var browserLang = navigator.language || navigator.userLanguage || 'es';
  if (browserLang.startsWith('en')) setLang('en');
});
