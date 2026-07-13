/* ==========================================================================
   animations.js — Micro-interactions (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  window.PortfolioAnimations = {
    init: function () {
      initMobileMenu();
      initSubtleTilt();
      initSmoothLinks();
    }
  };

  function initMobileMenu() {
    const hamburger = document.querySelector('.navbar__hamburger');
    const mobile    = document.querySelector('.navbar__mobile');
    const body      = document.body;
    if (!hamburger || !mobile) return;

    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobile.classList.toggle('open', isOpen);
      body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobile.querySelectorAll('.navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobile.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initSubtleTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll('.project-card, .skill-card');
    targets.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const cx   = rect.left + rect.width  / 2;
        const cy   = rect.top  + rect.height / 2;
        const dx   = (e.clientX - cx) / (rect.width  / 2);
        const dy   = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = 'perspective(800px) rotateX(' + (dy * -4) + 'deg) rotateY(' + (dx * 4) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = anchor.getAttribute('href').slice(1);
        const target   = document.getElementById(targetId);
        if (!target) return;
        e.preventDefault();
        const navbarH = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarH;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }
}());
