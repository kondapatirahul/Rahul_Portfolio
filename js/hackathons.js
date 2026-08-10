/* ==========================================================================
   hackathons.js — Centralised Hackathons Data & Renderer (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  var HACKATHONS = [
    {
      name: "Innovathon",
      year: "2024",
      theme: "Innovation & Technology Solutions",
      role: "Hackathon Participant",
      description: "Developed an innovative technology solution addressing real-world challenges in education and accessibility, demonstrating end-to-end problem-solving within a time-constrained environment.",
      proofUrl: "",        /* add your certificate/proof URL here when ready */
      projectUrl: "",
      certificateUrl: "",
      eventUrl: "",
      icon: "🚀"
    },
    {
      name: "Smart India Hackathon (SIH)",
      year: "2024",
      theme: "National-Level Problem Statement",
      role: "Hackathon Participant",
      description: "Participated in India's largest hackathon, collaborating on a government-issued problem statement. Designed and developed a scalable solution with a cross-functional team under the 24-hour challenge format.",
      proofUrl: "",        /* add your certificate/proof URL here when ready */
      projectUrl: "",
      certificateUrl: "",
      eventUrl: "",
      icon: "🇮🇳"
    },
    {
      name: "UDGAMA",
      year: "2023",
      theme: "College-Level Innovation Sprint",
      role: "Hackathon Participant",
      description: "Competed in the institution's annual innovation sprint, building a working prototype within 12 hours. Focused on a digital solution for streamlining campus administrative processes.",
      proofUrl: "",        /* add your certificate/proof URL here when ready */
      projectUrl: "",
      certificateUrl: "",
      eventUrl: "",
      icon: "⚡"
    }
  ];

  /* ExternalLink SVG — shared by proof icon */
  var EXTERNAL_LINK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
    + '<polyline points="15 3 21 3 21 9"/>'
    + '<line x1="10" y1="14" x2="21" y2="3"/>'
    + '</svg>';

  function createHackCard(h, index) {
    /* ── Inline proof icon beside hackathon name ── */
    var proofIcon = h.proofUrl
      ? '<a href="' + h.proofUrl + '"'
        + ' target="_blank"'
        + ' rel="noopener noreferrer"'
        + ' class="proof-link"'
        + ' aria-label="View proof for ' + h.name + '"'
        + ' title="View Proof">'
        + EXTERNAL_LINK_SVG
        + '</a>'
      : '';

    /* ── Action buttons (existing pattern — only shown if URL set) ── */
    var buttons = [];
    if (h.projectUrl) {
      buttons.push('<a href="' + h.projectUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" aria-label="View project for ' + h.name + '"><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style="margin-right:4px;" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>View Project</a>');
    }
    if (h.eventUrl) {
      buttons.push('<a href="' + h.eventUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" aria-label="Event website for ' + h.name + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="margin-right:4px;" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Event Website</a>');
    }
    if (h.certificateUrl) {
      buttons.push('<a href="' + h.certificateUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" aria-label="View certificate for ' + h.name + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="margin-right:4px;" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>View Certificate</a>');
    }

    var buttonsHtml = buttons.length
      ? '<div class="hack-card__actions" style="margin-top: auto; display: flex; gap: var(--sp-2); flex-wrap: wrap;">' + buttons.join('') + '</div>'
      : '';

    var delayClass = 'delay-' + ((index % 3) + 1);

    return '<article class="hack-card reveal ' + delayClass + '" role="article" aria-label="' + h.name + '">'
      + '<div class="hack-card__header">'
      + '<span class="hack-card__icon" aria-hidden="true">' + h.icon + '</span>'
      + '<span class="hack-card__year">' + h.year + '</span>'
      + '</div>'
      /* hackathon name + inline proof icon */
      + '<div style="display:flex; align-items:center; gap: var(--sp-2);">'
      + '<h3 class="hack-card__name" style="flex:1;">' + h.name + '</h3>'
      + proofIcon
      + '</div>'
      + '<div class="hack-card__theme">' + h.theme + '</div>'
      + '<p class="hack-card__project">' + h.description + '</p>'
      + '<div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; gap: var(--sp-3);">'
      + '<span class="hack-card__role">'
      + '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
      + h.role
      + '</span>'
      + '</div>'
      + buttonsHtml
      + '</article>';
  }

  window.PortfolioHackathons = {
    init: function () {
      var grid = document.querySelector('.hack__grid');
      if (!grid) return;
      grid.innerHTML = HACKATHONS.map(createHackCard).join('');
    }
  };
}());

