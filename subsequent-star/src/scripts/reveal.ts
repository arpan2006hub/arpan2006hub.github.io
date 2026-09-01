/**
 * reveal.ts — IntersectionObserver for section fade-in
 * ─────────────────────────────────────────────────────
 * Respects prefers-reduced-motion: if the user prefers reduced motion,
 * we skip setting up the observer entirely (CSS already makes elements visible).
 */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
})();
