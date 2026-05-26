// Light/dark theme toggle. The initial theme is applied inline in the
// document head (see _includes/head.html) to avoid a flash on load.
function toggleTheme() {
  var root = document.documentElement;
  var current = root.getAttribute('data-theme');
  if (!current) {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    current = prefersDark ? 'dark' : 'light';
  }
  var next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
