# Darshil Shah — QA Leadership & Digital Transformation Portfolio

**v2026.5.25** · React 19 + Vite · Deployed via GitHub Pages

---

## Overview

Production-ready personal portfolio for **Darshil Shah**, a Global Healthcare QA Leader and AI-driven Testing Engineer. Built with React 19, Vite, and Tailwind CSS, and deployed automatically to GitHub Pages via GitHub Actions.

### Recent Enhancements

- **Centralized assistant data**: Modularized AI Assistant content into `src/constants/assistantData.js` for improved scalability and maintainability.
- **Global error handling**: Added an `ErrorBoundary` component to improve stability and provide graceful fallback UI during component-level failures.
- **Expanded project metadata**: Added detailed technical and functional data for major repositories, including ATLAS Strategic Matrix, Customer Support Agent, and AI Evaluation QA.
- **Jules AI Assistant**: Integrated a menu-driven AI voice assistant that provides repository-specific guidance and personal background insights.

---

## Repository Structure

```text
portfolio/
├── src/
│   ├── App.jsx                        Main app shell — scroll spy, theme, navigation
│   ├── main.jsx                       React entry point
│   ├── index.css                      Tailwind CSS entry (compiled via Vite)
│   ├── constants/
│   │   └── data.js                    Nav items, contact email, theme key
│   └── components/
│       ├── Layout/
│       │   ├── Header.jsx             Fixed nav with mobile menu and theme toggle
│       │   └── Footer.jsx             Site-wide footer with navigation
│       └── Sections/
│           ├── Home.jsx
│           ├── Expertise.jsx
│           ├── Impact.jsx
│           ├── Experience.jsx
│           ├── Projects.jsx
│           ├── About.jsx
│           ├── Education.jsx
│           ├── Certifications.jsx
│           ├── Recommendations.jsx
│           └── Contact.jsx
├── tests/
│   ├── basic.test.js                  Vitest unit tests (metadata assertions)
│   ├── content.test.js                Vitest file-content tests
│   └── e2e/
│       └── basic.spec.js              Playwright end-to-end tests
├── public/
│   └── Darshil_Shah_QA_Engineering_Portfolio.pdf
├── .github/
│   └── workflows/
│       └── static.yml                 GitHub Actions deploy pipeline
├── index.html                         Vite HTML shell
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── playwright.config.js
├── package.json
├── metadata.json                      Version and metrics manifest
├── CHANGELOG.md
└── README.md
```

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| UI Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 + `@tailwindcss/forms` + `@tailwindcss/container-queries` |
| Icons | lucide-react |
| Unit Testing | Vitest 3 |
| E2E Testing | Playwright 1.50 |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Newcomer Guide

Welcome to the portfolio. If you're new here, follow these steps to get started:

1. **Meet Jules**: Click the bot icon in the bottom-right corner to open the Jules AI Assistant. Jules can guide you through the repositories and provide details about my professional journey.
2. **Explore sections**: Use the navigation menu at the top to jump to different parts of the portfolio.
3. **Check the metrics**: The Impact section provides quantified results from 14+ years of QA leadership.
4. **View projects**: Each project card links to its respective repository for deeper technical review.

## Quick Start

### Local Development

```bash
npm install
npm run dev # http://localhost:5173
```

### Production Build

```bash
npm run build # outputs to ./dist
```

### Tests

```bash
npm test      # Vitest unit + content tests
npm run test:e2e # Playwright E2E (auto-starts Vite dev server)
```

---

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/static.yml`, which installs dependencies, runs `npm run build`, and deploys `./dist` to GitHub Pages automatically.

The Vite config uses `base: './'`, so asset paths in the built output remain relative. That helps the site resolve correctly when served from a GitHub Pages subdirectory. [web:4][web:5]

---

## Portfolio Sections

| Section | Content |
| --- | --- |
| Home | Hero headline, key metrics card, CTAs |
| Expertise | Functional/E2E testing skills, team leadership |
| Impact | 6 quantified achievement stats |
| Experience | 7 roles across 10+ years (Phynix, Accenture/KP, Infosys, TCS, Freelance, Eternal Web) |
| Projects | Kaiser Permanente, Prime Therapeutics, Sony Pictures case studies |
| About | Mission statement, core strengths, languages |
| Education | MBA in IT (Sikkim Manipal), BE in IT (Sardar Patel University) |
| Certifications | 15 credentials across AI/ML, Cloud, Agile, DevOps |
| Recommendations | Colleague feedback from Kaiser Permanente |
| Contact | Email, LinkedIn, GitHub, contact form, PDF resume download |

---

## Key Metrics

| Metric | Result |
| --- | --- |
| Patient Wait Time Reduction | 30% |
| Test Coverage Growth | +25% |
| Manual Testing Reduction | 60% |
| Quality Rating Achieved | 100% |
| Cost Reduction | 40% |
| Defect Resolution Improvement | 20% |
| Defect Leakage Rate | < 5% |
| Years of Experience | 10+ |
| Certifications | 100+ |
| Global QA Teams Led | 15+ |

---

## Design

**Color Palette**

| Token | Hex |
| --- | --- |
| Primary | `#00685f` |
| Primary (dark) | `#6bd8cb` |
| Surface | `#f8f9ff` |
| Dark surface | `#0f172a` |

**Typography:** Manrope for headlines, Inter for body.

**Dark mode:** Class-based (`darkMode: 'class'`), toggled via the header button and persisted to `localStorage`.

---

## Customization

To update contact details, edit the constants in `src/constants/data.js`:

- `contactEmail` — email address used in the Contact section.
- `navItems` — navigation structure.
- `themeStorageKey` — `localStorage` key for theme persistence.

Content for each section lives in its corresponding component under `src/components/Sections/`. Experience bullets, certification data, and project descriptions are defined as inline arrays within their respective files.

---

## Certifications

**100+ total** from Anthropic, DeepLearning.AI, IBM, Coursera, Google, Microsoft, Amazon Web Services, PMI, Scrum Inc., and Scrum Alliance.

Categories include AI/ML, Cloud, DevOps, Agile, Leadership, and Technical.

---

## Contact

| Channel | Details |
| --- | --- |
| Email | [darshils99@gmail.com](mailto:darshils99@gmail.com) |
| LinkedIn | [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead/) |
| GitHub | [github.com/darshil0](https://github.com/darshil0) |
| Location | Dallas–Fort Worth, TX |

PDF resume available for download at [/Darshil_Shah_QA_Engineering_Portfolio.pdf](/Darshil_Shah_QA_Engineering_Portfolio.pdf). GitHub recommends relative links for files in the repository. [page:0]

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for full version history.

---

## License

MIT · © 2026 Darshil Shah
