/* ==========================================================================
   certifications.js — Centralised Certifications & Achievements (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  var CERTIFICATIONS = [
    {
      name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "Verified Credential",
      credentialUrl: "", // leave configurable
      credentialId: "",
      skills: ["Cloud", "AI", "Azure"],
      icon: "☁️",
      status: "completed"
    },
    {
      name: "Google Generative AI Essentials",
      issuer: "Google",
      date: "Verified Credential",
      credentialUrl: "", // leave configurable
      credentialId: "",
      skills: ["AI", "Generative AI", "LLMs"],
      icon: "🧠",
      status: "completed"
    },
    {
      name: "Cisco IT Essentials",
      issuer: "Cisco Networking Academy",
      date: "Verified Credential",
      credentialUrl: "", // leave configurable
      credentialId: "",
      skills: ["Hardware", "Software", "Networking"],
      icon: "🌐",
      status: "completed"
    },
    {
      name: "Programming with Java",
      issuer: "NPTEL — IIT",
      date: "Verified Credential",
      credentialUrl: "", // leave configurable
      credentialId: "",
      skills: ["Java", "OOP", "Development"],
      icon: "☕",
      status: "completed"
    },
    {
      name: "ISTQB Certified Tester – Foundation Level (In Progress)",
      issuer: "ISTQB",
      date: "In Progress",
      credentialUrl: "", // no URL since in progress
      credentialId: "",
      skills: ["Testing", "QA", "STLC"],
      icon: "🧪",
      status: "in-progress"
    }
  ];

  var ACHIEVEMENTS = [
    {
      title: "Secondary School Certificate (SSC) Academic Excellence",
      issuer: "SCMPMC High School",
      date: "Completed April 2021",
      description: "Secured a top-tier academic score of 99% in the SSC board examinations.",
      icon: "🏫"
    },
    {
      title: "Diploma in Computer Engineering - First Class with Distinction",
      issuer: "Kallam Haranadha Reddy Institute of Technology",
      date: "Completed July 2024",
      description: "Graduated with an aggregate score of 88% in Computer Engineering.",
      icon: "📜"
    },
    {
      title: "Quality Assurance Internship Completion",
      issuer: "Apex CoVantage Solutions",
      date: "May 2024",
      description: "Successfully completed a 6-month internship focused on digital publishing content QA, SQL database verification, and issue tracking.",
      icon: "💼"
    }
  ];

  function createCertCard(c, index) {
    /* ── Small inline proof icon (shown only when URL is set) ── */
    var proofIcon = c.credentialUrl
      ? '<a href="' + c.credentialUrl + '"'
        + ' target="_blank"'
        + ' rel="noopener noreferrer"'
        + ' class="proof-link"'
        + ' aria-label="View credential for ' + c.name + '"'
        + ' title="View Credential">'
        + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
        + '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
        + '<polyline points="15 3 21 3 21 9"/>'
        + '<line x1="10" y1="14" x2="21" y2="3"/>'
        + '</svg></a>'
      : '';

    /* ── "View Credential" button below the card (kept for backward compat) ── */
    var credentialBtn = c.credentialUrl
      ? '<a href="' + c.credentialUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" style="margin-top: var(--sp-2); width: fit-content;" aria-label="View credential for ' + c.name + '">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:12px; height:12px; margin-right:4px;" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>View Credential</a>'
      : '';

    var statusBadge = c.status === 'in-progress'
      ? '<span class="project-card__badge project-card__badge--learning" style="margin-left: auto; font-size: 9px;">In Progress</span>'
      : '';

    var delayClass = 'delay-' + ((index % 3) + 1);

    return '<div class="cert-card reveal ' + delayClass + '" data-skills="' + c.skills.join(',') + '">'
      + '<div style="display:flex; align-items:center; justify-content:space-between;">'
      + '<div class="cert-card__logo" aria-hidden="true">' + c.icon + '</div>'
      + statusBadge
      + '</div>'
      /* title row: cert name + inline proof icon */
      + '<div style="display:flex; align-items:flex-start; gap: var(--sp-2);">'
      + '<h3 class="cert-card__title" style="flex:1;">' + c.name + '</h3>'
      + proofIcon
      + '</div>'
      + '<div class="cert-card__issuer">'
      + '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      + c.issuer
      + '</div>'
      + '<div class="cert-card__date">' + c.date + '</div>'
      + credentialBtn
      + '</div>';
  }


  function createAchievementCard(a, index) {
    var delayClass = 'delay-' + ((index % 3) + 1);
    return '<div class="achievement-card reveal ' + delayClass + '">'
      + '<div class="achievement-card__header">'
      + '<div class="achievement-card__icon" aria-hidden="true">' + a.icon + '</div>'
      + '<div>'
      + '<h3 class="achievement-card__title">' + a.title + '</h3>'
      + '<div class="achievement-card__issuer">' + a.issuer + '</div>'
      + '</div>'
      + '</div>'
      + '<p class="achievement-card__desc">' + a.description + '</p>'
      + '<div class="achievement-card__date">' + a.date + '</div>'
      + '</div>';
  }

  var currentFilter = 'all';

  function renderCertifications() {
    var grid = document.getElementById('certs-grid');
    if (!grid) return;

    var filtered = CERTIFICATIONS.filter(function (c) {
      if (currentFilter === 'all') return true;
      var term = currentFilter.toLowerCase();
      var matchesSkill = c.skills.some(function (skill) {
        return skill.toLowerCase() === term;
      });
      if (term === 'testing') {
        return matchesSkill || c.skills.some(function(s) { return ['qa', 'stlc', 'testing'].indexOf(s.toLowerCase()) !== -1; });
      }
      if (term === 'development') {
        return matchesSkill || c.skills.some(function(s) { return ['java', 'oop', 'development'].indexOf(s.toLowerCase()) !== -1; });
      }
      if (term === 'cloud') {
        return matchesSkill || c.skills.some(function(s) { return ['cloud', 'azure'].indexOf(s.toLowerCase()) !== -1; });
      }
      if (term === 'ai') {
        return matchesSkill || c.skills.some(function(s) { return ['ai', 'generative ai', 'llms'].indexOf(s.toLowerCase()) !== -1; });
      }
      if (term === 'other') {
        return matchesSkill || c.skills.some(function(s) { return ['hardware', 'software', 'networking', 'other'].indexOf(s.toLowerCase()) !== -1; });
      }
      return matchesSkill;
    });

    grid.innerHTML = filtered.map(function (c, idx) {
      return createCertCard(c, idx);
    }).join('');

    grid.querySelectorAll('.cert-card').forEach(function (card) {
      card.classList.add('revealed');
    });
  }

  function renderAchievements() {
    var grid = document.getElementById('achievements-grid');
    if (!grid) return;
    grid.innerHTML = ACHIEVEMENTS.map(createAchievementCard).join('');
    grid.querySelectorAll('.achievement-card').forEach(function (card) {
      card.classList.add('revealed');
    });
  }

  function setupFilters() {
    var filterButtons = document.querySelectorAll('.cert-filter-btn');
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        currentFilter = btn.dataset.filter;
        renderCertifications();
      });
    });
  }

  window.PortfolioCertifications = {
    init: function () {
      renderCertifications();
      renderAchievements();
      setupFilters();
    }
  };
}());
