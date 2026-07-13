/* ==========================================================================
   counters.js — Animated Number Counters (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  window.PortfolioCounters = {
    init: function () {
      const counters = document.querySelectorAll('[data-counter]');
      if (!counters.length) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        counters.forEach(function (el) {
          el.textContent = el.dataset.counter + (el.dataset.suffix || '');
        });
        return;
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !entry.target.dataset.counted) {
            animateCounter(entry.target);
            entry.target.dataset.counted = 'true';
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(function (el) { observer.observe(el); });
    }
  };

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.counter);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const start    = performance.now();

    function update(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = target * ease;

      el.textContent = (Number.isInteger(target)
        ? Math.round(current)
        : current.toFixed(1)) + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }
}());
