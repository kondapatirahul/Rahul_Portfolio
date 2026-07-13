/**
 * main.js — Entry Point
 * Initialises all modules after DOM is ready.
 * Uses window globals populated by the individual scripts.
 */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Render project cards (before scroll-reveal observer attaches)
  if (window.PortfolioProjects) {
    window.PortfolioProjects.init();
  }

  // 2. Scroll behaviours (navbar, reveal, active nav, scroll-top)
  if (window.PortfolioScroll) {
    window.PortfolioScroll.init();
  }

  // 3. Animations & micro-interactions (mobile menu, tilt, smooth scroll)
  if (window.PortfolioAnimations) {
    window.PortfolioAnimations.init();
  }

  // 4. Typing animation in hero
  if (window.PortfolioTyping) {
    window.PortfolioTyping.init('#typing-role', [
      'QA Automation Engineer',
      'SDET',
      'Full Stack Developer',
      'Software Testing Enthusiast'
    ]);
  }

  // 5. Animated stat counters
  if (window.PortfolioCounters) {
    window.PortfolioCounters.init();
  }

  // 6. Year in footer
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
