/**
 * theme.ts — Dark / light mode toggle
 * ─────────────────────────────────────
 * Reads localStorage first, then prefers-color-scheme.
 * Writes .dark or .light class on <html> immediately (before paint)
 * to avoid flash of wrong theme.
 */

(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored ?? (prefersDark ? 'dark' : 'light');

  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light');
    root.classList.remove('dark');
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
  }
})();

// Toggle function — called from the nav button onclick
function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.classList.contains('light');
  if (isLight) {
    root.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }

  // Update button aria-label
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const nowLight = root.classList.contains('light');
    btn.setAttribute('aria-label', nowLight ? 'Switch to dark mode' : 'Switch to light mode');
    btn.setAttribute('aria-pressed', nowLight ? 'false' : 'true');
  }
}

// Expose to global scope for inline onclick
(window as unknown as Record<string, unknown>).toggleTheme = toggleTheme;
