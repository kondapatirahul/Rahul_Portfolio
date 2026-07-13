# Kondapati Rahul — Portfolio Website

> Premium, minimal, recruiter-focused portfolio for an Aspiring SDET & Full Stack Developer.

**Live URL:** [https://kondapatirahul.github.io/Rahul_Portfolio/](https://kondapatirahul.github.io/Rahul_Portfolio/)

---

## 🗂 Project Structure

```
Rahul_Portfolio/
├── index.html            # Single-page portfolio (all 12 sections)
├── robots.txt            # SEO — crawler rules
├── sitemap.xml           # SEO — sitemap
├── README.md
│
├── assets/
│   ├── images/
│   │   └── profile.webp  ← Replace with your actual profile photo
│   ├── resume/
│   │   └── resume.pdf    ← Replace with your latest resume
│   ├── icons/
│   ├── logos/
│   └── favicon.ico       ← Replace with your favicon
│
├── css/
│   ├── variables.css     # All design tokens (colors, fonts, spacing)
│   ├── animations.css    # Keyframes & scroll-reveal utilities
│   ├── utilities.css     # Helper classes, container, section layout
│   ├── style.css         # All section & component styles
│   └── responsive.css    # Media queries (1100 / 900 / 640 / 480px)
│
└── js/
    ├── main.js           # Entry point — imports & initialises all modules
    ├── typing.js         # Hero typing animation
    ├── counters.js       # Animated stat counters
    ├── scroll.js         # Navbar scroll, IntersectionObserver reveal, scroll-top
    ├── animations.js     # Mobile menu, card tilt, smooth scroll
    └── projects.js       # ⭐ PROJECT DATA — edit here to add projects
```

---

## 🚀 Getting Started

No build tools required. Simply open `index.html` in any modern browser.

```bash
# macOS / Linux
open index.html

# Windows
start index.html
```

Or use VS Code's **Live Server** extension for hot reload during development.

---

## ✏️ How to Personalise

### Add Your Profile Photo
1. Export your photo as `profile.png` (recommended: 400×400px, circular crop)
2. Place it at `assets/images/profile.png`

### Add Your Resume
1. Export your resume as `resume.pdf`
2. Place it at `assets/resume/resume.pdf`

### Add a New Project
Open `js/projects.js` and append to the `PROJECTS` array:
```js
{
  id:          'my-new-project',
  emoji:       '🚀',
  title:       'My New Project',
  role:        'Full Stack Developer',
  duration:    '2025',
  status:      'active',       // active | built | learning
  description: 'Short description of what the project does.',
  features: [
    'Feature one',
    'Feature two',
    'Feature three',
  ],
  tech:    ['React', 'Node.js', 'MongoDB'],
  github:  'https://github.com/kondapatirahul/my-new-project',
  demo:    'https://my-demo-url.com',  // leave empty string if none
},
```
The card is automatically rendered — no HTML changes needed.

### Add a New Certification
Open `index.html`, find the `<!-- certifications -->` section, and copy-paste a `.cert-card` block with updated content.

### Update Contact / Personal Info
All personal info is in `index.html`. Search for the relevant section heading (e.g., `SECTION 11`) and update inline.

### Modify Colors / Fonts
Open `css/variables.css` — all design tokens are in `:root`. Change once, propagates everywhere.

---

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → `main` → `/ (root)`**
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

---

## 🧰 Tech Stack

| Layer       | Technology       |
|-------------|-----------------|
| Markup      | HTML5 (semantic) |
| Styling     | CSS3 (vanilla)   |
| Scripting   | ES Modules (native) |
| Fonts       | Google Fonts (Space Grotesk, Inter, JetBrains Mono) |
| Icons       | Inline SVG       |
| Deployment  | GitHub Pages     |

**No frameworks. No npm. No build step. No backend.**

---

## ♿ Accessibility

- Semantic HTML5 landmarks
- ARIA labels on all interactive elements
- `role` attributes on lists and navigation
- `prefers-reduced-motion` media query respected
- Focus-visible outlines for keyboard navigation
- All images include descriptive `alt` text
- Colour contrast meets WCAG AA

---

## 📈 Performance Targets

| Metric      | Target |
|-------------|--------|
| Performance | 95+    |
| Accessibility | 100  |
| Best Practices | 100 |
| SEO         | 100    |

---

## 📄 License

MIT — Feel free to fork and adapt for your own portfolio.

---

*Designed & built by Kondapati Rahul — [kondapatirahul@gmail.com](mailto:kondapatirahul@gmail.com)*
