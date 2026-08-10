/* ==========================================================================
   skills.js — Centralised Skills Data & Renderer (IIFE)
   ========================================================================== */
(function () {
  'use strict';

  var SKILLS = [
    {
      category: 'Programming Languages',
      icon: '💻',
      items: [
        { name: 'Java' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'SQL' }
      ]
    },
    {
      category: 'Testing & Automation',
      icon: '🧪',
      items: [
        { name: 'Selenium WebDriver' },
        { name: 'Postman' },
        { name: 'JMeter' },
        { name: 'Manual Testing' },
        { name: 'Playwright', isLearning: true }
      ]
    },
    {
      category: 'Tools',
      icon: '🔧',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'GitHub Actions' },
        { name: 'Maven' },
        { name: 'VS Code' }
      ]
    },
    {
      category: 'Engineering Practices',
      icon: '📋',
      items: [
        { name: 'SDLC' },
        { name: 'STLC' },
        { name: 'Agile/Scrum' },
        { name: 'Test Planning' },
        { name: 'Bug Reporting' },
        { name: 'API Testing' },
        { name: 'CI/CD' }
      ]
    },
    {
      category: 'Frontend Development',
      icon: '🎨',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React.js' },
        { name: 'Vite' }
      ]
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      items: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'Python' },
        { name: 'Flask' },
        { name: 'FastAPI' }
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      items: [
        { name: 'MongoDB' },
        { name: 'Firebase' },
        { name: 'SQL' }
      ]
    },
    {
      category: 'Soft Skills',
      icon: '🌟',
      items: [
        { name: 'Team Collaboration' },
        { name: 'Effective Communication' },
        { name: 'Attention to Detail' },
        { name: 'Problem Solving' },
      ]
    }
    // {
    //   category: 'AI / Emerging Technology',
    //   icon: '🧠',
    //   items: [
    //     { name: 'Generative AI APIs' },
    //     { name: 'Groq API' },
    //     { name: 'AI-powered application development' }
    //   ]
    // }
  ];

  function createSkillCard(s, index) {
    var itemsHtml = s.items.map(function (item) {
      var learningText = item.isLearning ? ' <em style="font-style:normal;opacity:.6">(Learning)</em>' : '';
      return '<span class="skill-item" role="listitem"><span class="skill-item__dot" aria-hidden="true"></span>' + item.name + learningText + '</span>';
    }).join('');

    var delayClass = 'delay-' + ((index % 3) + 1);

    return '<div class="skill-card reveal ' + delayClass + '">'
      + '<div class="skill-card__header">'
      + '<div class="skill-card__icon" aria-hidden="true">' + s.icon + '</div>'
      + '<span class="skill-card__title">' + s.category + '</span>'
      + '<span class="skill-card__count">' + s.items.length + ' items</span>'
      + '</div>'
      + '<div class="skill-card__items" role="list">'
      + itemsHtml
      + '</div>'
      + '</div>';
  }

  window.PortfolioSkills = {
    init: function () {
      var grid = document.querySelector('.skills__grid');
      if (!grid) return;
      grid.innerHTML = SKILLS.map(createSkillCard).join('');
    }
  };
}());
