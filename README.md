# Darshil Shah — Healthcare QA & AI Lead Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-darshil0.github.io-0057B8?style=flat-square)](https://darshil0.github.io/darshil-portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00C98D?style=flat-square)](LICENSE)

Professional single-page React portfolio built with Vite, TypeScript, Tailwind CSS, and Framer Motion. Focused on Darshil Shah's 9+ years of Global Healthcare QA experience and AI-Enabled QA with ChatGPT & Claude. (v2026.3)

## Live Demo

[darshil0.github.io/darshil-portfolio](https://darshil0.github.io/darshil-portfolio/)

---

## Architecture

The application follows a modular React architecture for maximum maintainability:

- `src/components` – Presentational and container components (Navbar, Hero, Experience, Skills, Testimonials, etc.).
- `src/constants.ts` – Centralized portfolio data (experience, skills, certifications).
- `src/index.css` – Tailwind CSS entry point with custom theme and minimal global layers.

| Component       | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| `Navbar`        | Sticky navigation with scroll-spy and mobile menu              |
| `Hero`          | Landing section with key impact metrics and 2026 focus         |
| `Experience`    | Professional timeline and education details                    |
| `Skills`        | Interactive technical profile with certification filtering      |
| `Testimonials`  | Colleague feedback using reusable `TestimonialCard`            |
| `Contact`       | Contact information and social links                           |
| `Footer`        | Copyright and site metadata                                    |
| `ScrollToTop`   | Floating navigation utility for long pages                     |

---

## Tech Stack

- **React 19** — Functional components and hooks
- **Tailwind CSS** — Utility-first styling with a custom theme
- **Framer Motion** — Smooth, high-performance animations
- **Lucide React** — Consistent iconography
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool

---

## Features

- **Responsive Design**: Mobile-first architecture using Tailwind CSS.
- **Modular Components**: Clean separation of concerns for easy updates.
- **Centralized Data**: All content managed in `src/constants.ts`.
- **Modular Styling**: Tailwind-based styling with minimal global CSS.
- **Interactive UI**: Dynamic certification filtering and smooth scroll navigation.
- **Smooth Animations**: Framer Motion-powered entrance and stagger animations.
- **Scroll Utility**: Scroll-to-top button with smooth scrolling on long pages.
- **Performance**: Optimized asset loading and hardware-accelerated animations.

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

- `npm run dev` — Start local development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally
- `npm run lint` — Run TypeScript and linting checks

---

## License

MIT © 2026 Darshil Shah
