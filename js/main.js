/**
 * main.js — Entry Point
 * Initialises all modules after DOM is ready.
 * Uses window globals populated by the individual scripts.
 */

document.addEventListener('DOMContentLoaded', function () {

  // 1. Render dynamic contents (before scroll-reveal observer attaches)
  if (window.PortfolioSkills) {
    window.PortfolioSkills.init();
  }
  if (window.PortfolioProjects) {
    window.PortfolioProjects.init();
  }
  if (window.PortfolioCertifications) {
    window.PortfolioCertifications.init();
  }
  if (window.PortfolioHackathons) {
    window.PortfolioHackathons.init();
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
      'Full Stack Developer',
      'QA Automation Engineer',
      'Aspiring SDET',
      'Software Developer',
      'Technology Enthusiast'
    ]);
  }

  // 5. Animated stat counters
  if (window.PortfolioCounters) {
    window.PortfolioCounters.init();
  }

  // 6. Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  // 7. Year in footer
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
