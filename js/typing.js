/* ==========================================================================
   typing.js — Typing Animation (IIFE, no modules required)
   ========================================================================== */
(function () {
  'use strict';

  window.PortfolioTyping = {
    init: function (selector, strings, options) {
      const el = document.querySelector(selector);
      if (!el) return;

      const typeSpeed   = (options && options.typeSpeed)   || 70;
      const deleteSpeed = (options && options.deleteSpeed) || 40;
      const pauseAfter  = (options && options.pauseAfter)  || 1800;
      const pauseBefore = (options && options.pauseBefore) || 400;

      let strIdx   = 0;
      let charIdx  = 0;
      let deleting = false;

      // Create cursor
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      el.after(cursor);

      // Respect reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = strings[0];
        return;
      }

      function tick() {
        const current = strings[strIdx % strings.length];

        if (!deleting) {
          el.textContent = current.slice(0, charIdx + 1);
          charIdx++;
          if (charIdx === current.length) {
            deleting = true;
            setTimeout(tick, pauseAfter);
            return;
          }
        } else {
          el.textContent = current.slice(0, charIdx - 1);
          charIdx--;
          if (charIdx === 0) {
            deleting = false;
            strIdx++;
            setTimeout(tick, pauseBefore);
            return;
          }
        }

        setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
      }

      setTimeout(tick, pauseBefore);
    }
  };
}());
