/* ── theme.js  –  shared across all portfolio pages ── */

/* 1. DROPDOWN MENUS */
document.querySelectorAll('.has-dropdown').forEach(function(item) {
  var btn = item.querySelector('.nav-dropdown-btn');
  if (!btn) return;

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = item.classList.contains('open');

    document.querySelectorAll('.has-dropdown').forEach(function(d) {
      d.classList.remove('open');
      var b = d.querySelector('.nav-dropdown-btn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

var themeMenu = document.querySelector('.theme-menu');
if (themeMenu) {
  themeMenu.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}

document.addEventListener('click', function() {
  document.querySelectorAll('.has-dropdown').forEach(function(d) {
    d.classList.remove('open');
    var b = d.querySelector('.nav-dropdown-btn');
    if (b) b.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.has-dropdown').forEach(function(d) {
      d.classList.remove('open');
    });
  }
});


/* 2. COLLAPSIBLE RESUME SECTIONS */
function toggleSection(id) {
  var sec = document.getElementById(id);
  if (!sec) return;
  var isOpen = sec.classList.contains('open');
  sec.classList.toggle('open', !isOpen);
  var btn = sec.querySelector('.section-toggle');
  if (btn) btn.setAttribute('aria-expanded', String(!isOpen));
}


/* 3. THEME — MODE (dark / light) */
function setMode(mode) {
  document.documentElement.setAttribute('data-theme', mode);

  var btnLight = document.getElementById('btn-light');
  var btnDark  = document.getElementById('btn-dark');
  if (btnLight) btnLight.classList.toggle('active', mode === 'light');
  if (btnDark)  btnDark.classList.toggle('active',  mode === 'dark');

  localStorage.setItem('portfolio-theme', mode);
}


/* 4. THEME — FONT SIZE (small / medium / large) */
function setFont(size) {
  document.documentElement.setAttribute('data-font-size', size);

  ['small', 'medium', 'large'].forEach(function(s) {
    var btn = document.getElementById('btn-' + s);
    if (btn) btn.classList.toggle('active', s === size);
  });

  localStorage.setItem('portfolio-font', size);
}


/* 5. RESTORE SAVED PREFERENCES ON LOAD */
(function () {
  var savedTheme = localStorage.getItem('portfolio-theme');
  var savedFont  = localStorage.getItem('portfolio-font');
  if (savedTheme) setMode(savedTheme);
  if (savedFont)  setFont(savedFont);
})();
