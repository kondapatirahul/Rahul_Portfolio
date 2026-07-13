/* ==========================================================================
   scroll.js — Scroll behaviours (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  window.PortfolioScroll = {
    init: function () {
      initNavbarScroll();
      initScrollReveal();
      initActiveNav();
      initScrollTop();
    }
  };

  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(function (el) { el.classList.add('revealed'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  function initActiveNav() {
    const navLinks = document.querySelectorAll('.navbar__link[data-section]');
    const sections = [];
    navLinks.forEach(function (link) {
      var sec = document.getElementById(link.dataset.section);
      if (sec) sections.push(sec);
    });
    if (!sections.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id   = entry.target.id;
          var link = document.querySelector('.navbar__link[data-section="' + id + '"]');
          if (!link) return;
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { threshold: 0.3, rootMargin: '-64px 0px -40% 0px' });

    sections.forEach(function (sec) { observer.observe(sec); });
  }

  function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}());
