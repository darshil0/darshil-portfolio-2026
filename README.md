# Darshil Shah — Healthcare QA & AI Lead Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-darshil0.github.io-0057B8?style=flat-square)](https://darshil0.github.io/darshil-portfolio-2026/index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C98D?style=flat-square)](LICENSE)

Professional multi-page vanilla HTML/CSS/JS portfolio. Focused on Darshil Shah's 9+ years of Global Healthcare QA experience and AI-Enabled QA with ChatGPT & Claude. (v2026.3.3)

## Live Demo

[darshil0.github.io/darshil-portfolio-2026](https://darshil0.github.io/darshil-portfolio-2026/index.html)

---

## Architecture

The application follows a clean, multi-page vanilla architecture for maximum performance and SEO:

- `index.html` – Home section with Hero and career snapshot.
- `experience.html` – Full professional history and education details.
- `skills.html` – Technical profile and interactive certification filtering.
- `contact.html` – Contact information and form.
- `404.html` – Custom not-found page.
- `style.css` – Centralized styling using CSS variables and a standardized spacing scale.
- `script.js` – Vanilla JavaScript for interactivity and animations.

---

## Tech Stack

- **HTML5** — Semantic markup for accessibility and SEO
- **CSS3** — Custom properties and modern layout (Flexbox/Grid)
- **Vanilla JavaScript** — Lightweight interactivity and scroll-reveal animations
- **Font Awesome** — Consistent iconography

---

## Features

- **Multi-Page Navigation**: Clean separation of content across logical pages.
- **Responsive Design**: Mobile-first architecture using native CSS Media Queries.
- **Interactive UI**: Custom-built certification filtering system.
- **Scroll Animations**: Vanilla JS scroll-reveal implementation for engagement.
- **SEO Optimized**: Sitemap.xml and synchronized metadata across all pages.
- **Performance**: Zero dependencies at runtime for lightning-fast loads.

---

## Accessibility

Built with inclusivity in mind:

- **Semantic HTML**: Proper use of sectioning elements and headings.
- **ARIA Attributes**: Use of `aria-label`, `role="button"`, and `aria-expanded` for interactive controls.
- **Keyboard Support**: Fully navigable via keyboard, including logo links and mobile menu toggles.
- **Color Contrast**: High-contrast ratios for text readability.

---

## AI Tools Used in Development

| Tool                    | Purpose                                         |
| ----------------------- | ----------------------------------------------- |
| Claude Sonnet 4.6       | Codebase generation and QA workflow integration |
| Google Cloud Labs Jules | Codebase optimization                           |

---

## Setup

Install dependencies:

```bash
npm install
```

Available scripts:

- `npm run validate` — Run HTML validation checks
- `npm run format` — Format code with Prettier

---

## Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To activate it:

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your unique form ID (e.g. `xpzgblkw`).
3. In `contact.html`, replace `YOUR_FORM_ID` in the form `action` attribute:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST"></form>
```

## License

MIT © 2026 Darshil Shah
