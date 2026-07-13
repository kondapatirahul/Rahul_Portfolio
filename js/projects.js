/* ==========================================================================
   projects.js — Project Data & Card Renderer (IIFE)
   ========================================================================== */

/* ══════════════════════════════════════════════════════════════════
   ╔══════════════════════════════════════════════════════════════╗
   ║  TO ADD A NEW PROJECT: append to the PROJECTS array below.  ║
   ║  The card is auto-generated. No HTML changes needed.        ║
   ╚══════════════════════════════════════════════════════════════╝
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Project Data ──────────────────────────────────────────────────── */
  var PROJECTS = [
    {
      id: 'studyai',
      emoji: '🤖',
      title: 'StudyAI',
      role: 'Full Stack Developer',
      duration: '2024',
      status: 'built',
      description: 'An AI-powered study assistant that helps students generate summaries, quizzes, and flashcards from their study material using modern LLM APIs.',
      features: [
        'AI-generated summaries and quizzes',
        'Flashcard system with spaced repetition',
        'Multi-format document upload',
        'Session progress tracking',
      ],
      tech: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'REST API', 'AI/LLM'],
      github: 'https://github.com/kondapatirahul/StudyAI-SmartBridge',
      demo: '',
    },
    {
      id: 'qa-framework',
      emoji: '🧪',
      title: 'Enterprise QA Automation Framework',
      role: 'QA Automation Engineer',
      duration: '2024',
      status: 'active',
      description: 'A robust Selenium-based test automation framework built with Java and the Page Object Model pattern. Supports parallel execution, detailed reporting, and CI/CD integration.',
      features: [
        'Page Object Model (POM) design pattern',
        'TestNG parallel execution',
        'Extent Reports with screenshots',
        'GitHub Actions CI/CD integration',
      ],
      tech: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'GitHub Actions', 'Extent Reports'],
      github: 'https://github.com/kondapatirahul/enterprise-qa-automation-framework',
      demo: '',
    },
    {
      id: 'examination-cell',
      emoji: '🏫',
      title: 'Examination Cell Management System',
      role: 'Full Stack Developer',
      duration: '2023',
      status: 'built',
      description: 'A complete web-based examination management platform automating hall ticket generation, result processing, and student data management for academic institutions.',
      features: [
        'Automated hall ticket generation',
        'Result processing and grade calculation',
        'Admin and student dashboards',
        'SQL-powered data management',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'MySQL'],
      github: 'https://github.com/kondapatirahul/Examination-Cell-Management-System',
      demo: '',
    },
    {
      id: 'village-portal',
      emoji: '🏘️',
      title: 'Village Development Information Portal',
      role: 'Full Stack Developer',
      duration: '2023',
      status: 'built',
      description: 'A citizen-facing information portal for rural village development data, providing access to schemes, announcements, and government services in a simple, accessible interface.',
      features: [
        'Multi-scheme information lookup',
        'Announcement and notice board',
        'Citizen grievance submission',
        'Responsive for low-bandwidth use',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
      github: 'https://github.com/kondapatirahul',
      demo: '',
    },
    {
      id: 'food-recipe',
      emoji: '🍳',
      title: 'Food Recipe Application',
      role: 'Front-End Developer',
      duration: '2023',
      status: 'built',
      description: 'A clean, responsive recipe discovery app that allows users to search, filter by cuisine and dietary preferences, and save favourite recipes.',
      features: [
        'Recipe search with filters',
        'Cuisine and dietary tags',
        'Save and bookmark favourites',
        'Step-by-step instruction layout',
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
      github: 'https://github.com/kondapatirahul',
      demo: '',
    },
    {
      id: 'api-testing',
      emoji: '🔌',
      title: 'API Testing Framework',
      role: 'QA Automation Engineer',
      duration: '2024',
      status: 'active',
      description: 'A structured REST API testing framework using Postman and Newman for automated collection runs, with detailed HTML reporting and CI pipeline integration.',
      features: [
        'Postman collections with environment variables',
        'Newman CLI for automated runs',
        'HTML and JSON test reports',
        'CI pipeline via GitHub Actions',
      ],
      tech: ['Postman', 'Newman', 'JavaScript', 'GitHub Actions', 'REST API', 'JSON'],
      github: 'https://github.com/kondapatirahul',
      demo: '',
    },
  ];

  var STATUS_LABEL = { active: 'Active', learning: 'Learning', built: 'Built' };

  /* ── Card Builder ──────────────────────────────────────────────────── */
  function createCard(p) {
    var techTags = p.tech.map(function (t) {
      return '<span class="tag">' + t + '</span>';
    }).join('');

    var features = p.features.slice(0, 3).map(function (f) {
      return '<li class="project-card__feature">' + f + '</li>';
    }).join('');

    var demoBtn = p.demo
      ? '<a href="' + p.demo + '" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--sm" aria-label="Live demo of ' + p.title + '">'
      + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
      + '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'
      + '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>Live Demo</a>'
      : '';

    return '<article class="project-card reveal glow-card" role="article" aria-label="' + p.title + ' project">'
      + '<div class="project-card__img-wrap">'
      + '<div class="project-card__img-placeholder" aria-hidden="true">' + p.emoji + '</div>'
      + '<div class="project-card__badges"><span class="project-card__badge project-card__badge--' + p.status + '">'
      + (STATUS_LABEL[p.status] || p.status) + '</span></div></div>'
      + '<div class="project-card__body">'
      + '<h3 class="project-card__title">' + p.title + '</h3>'
      + '<div class="project-card__meta" aria-label="Project metadata">'
      + '<span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' + p.role + '</span>'
      + '<span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' + p.duration + '</span></div>'
      + '<p class="project-card__desc">' + p.description + '</p>'
      + '<ul class="project-card__features" aria-label="Key features">' + features + '</ul>'
      + '<div class="project-card__tech" aria-label="Technologies used">' + techTags + '</div>'
      + '<div class="project-card__actions">'
      + '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm" aria-label="GitHub repository for ' + p.title + '">'
      + '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>GitHub</a>'
      + demoBtn
      + '</div></div></article>';
  }

  /* ── Init ──────────────────────────────────────────────────────────── */
  window.PortfolioProjects = {
    init: function () {
      var grid = document.getElementById('projects-grid');
      if (!grid) return;
      grid.innerHTML = PROJECTS.map(createCard).join('');
    }
  };
}());
