# Darshil Shah — Healthcare QA & AI Lead Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-darshil0.github.io-0057B8?style=flat-square)](https://darshil0.github.io/darshil-portfolio-2026/index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C98D?style=flat-square)](LICENSE)

Professional multi-page vanilla HTML/CSS/JS portfolio. Focused on Darshil Shah's 9+ years of Global Healthcare QA experience and AI-Enabled QA with ChatGPT & Claude. (v2026.3.2)

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

---

## Known Fixes (v2026.3.2)

The following bugs were identified and resolved in the latest patch:

- **Missing Nav Elements**: Added the `nav-toggle` hamburger button to `404.html` and the prominent "Get In Touch" CTA to the navbars of `experience.html`, `skills.html`, and `contact.html`.
- **Form Submission**: Converted the `contact.html` form to use an async `fetch()` submission, providing inline success/error feedback (`#form-status`) without requiring a full-page reload, solving the "silent failure" state of the dummy setup.
- **Accessibility**: Fixed heading hierarchy in `experience.html` (changed `<h4>` job titles under `<h2>` to `<h3>`). 
- **Typography & Styling**: Fixed missing `h1` global font mapping (now correctly uses the Syne display font). Added missing `cursor: pointer` to the `.btn` utility class. Updated `.nav-links.open` from a hardcoded `white` background to the `var(--surface)` theme variable.
- **Animation Glitch**: Hardended the `script.js` counter animation against duplicate intersection observer triggers by reading baseline targets from `data-target` instead of mutable `textContent`.
- **SEO/Sitemap**: Fixed `sitemap.xml` referencing an old `darshil-portfolio` repo path instead of the live `darshil-portfolio-2026` path.

---

## Known Fixes (v1.1.1)

The following bugs were identified and resolved in a previous patch:

- **CSS**: `grid-cols` is not a valid property — corrected to `grid-template-columns` in `.cert-columns`, restoring the single-column mobile layout for the certifications grid.
- **CSS**: `.dot` had mismatched width/height (`8px × 10px`), preventing `border-radius: 50%` from rendering a true circle. Both dimensions corrected to `8px`.
- **CSS**: `.dot-sm` was missing `border-radius` and `display` declarations, leaving it invisible when used standalone.
- **CSS**: `.color-mid`, `.mt-2`, and `.text-404` utility classes were missing despite active use across multiple pages.
- **JS**: The sticky-header scroll listener incorrectly stripped the `scrolled` class on inner pages when the user scrolled back to the top, removing the nav's backdrop blur. The listener is now scoped to the home page only.
- **HTML**: The Formspree form `action` used a raw email address as the endpoint path, which is invalid. Corrected to the proper `formspree.io/f/{id}` format.

---

## License

MIT © 2026 Darshil Shah
