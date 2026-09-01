// Theme script — runs inline before first paint to avoid flash of wrong theme.
// Minified inline: reads localStorage, falls back to prefers-color-scheme.
(function(){
  var s = localStorage.getItem('theme');
  var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var t = s || (d ? 'dark' : 'light');
  var r = document.documentElement;
  if (t === 'light') { r.classList.add('light'); r.classList.remove('dark'); }
  else { r.classList.add('dark'); r.classList.remove('light'); }
})();

function toggleTheme() {
  var r = document.documentElement;
  var isLight = r.classList.contains('light');
  if (isLight) { r.classList.replace('light','dark'); localStorage.setItem('theme','dark'); }
  else { r.classList.replace('dark','light'); localStorage.setItem('theme','light'); }
  var btn = document.getElementById('theme-toggle');
  if (btn) {
    var nowLight = r.classList.contains('light');
    btn.setAttribute('aria-label', nowLight ? 'Switch to dark mode' : 'Switch to light mode');
    btn.setAttribute('aria-pressed', nowLight ? 'false' : 'true');
  }
}
