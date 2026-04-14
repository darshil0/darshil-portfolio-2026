# Darshil Shah — QA Leadership & Digital Transformation Portfolio

**v2026.4.15** · React 19 + Vite · Deployed via GitHub Pages

---

## Overview

Production-ready personal portfolio for **Darshil Shah**, Global Healthcare QA Leader and AI-Driven Testing Engineer. Built with React 19, Vite, and Tailwind CSS, and deployed automatically to GitHub Pages via GitHub Actions.

### Recent Enhancements (v2026.4.15)
- **Premium UI Overhaul**: Implemented a cinematic hero section, glassmorphism statistics cards, and scroll-triggered entry animations.
- **Architectural Cleanup**: Decoupled section spy logic from hardcoded arrays and added a resize listener to the header lifecycle.
- **A11y & SEO**: Resolved duplicate `main` tag issues and modernized scroll tracking APIs.

---

## Repository Structure

```
portfolio/
├── src/
│   ├── App.jsx                        Main app shell — scroll spy, theme, navigation
│   ├── main.jsx                       React entry point
│   ├── index.css                      Tailwind CSS entry (compiled via Vite)
│   ├── constants/
│   │   └── data.js                    Nav items, contact email, theme key
│   └── components/
│       ├── Layout/
│       │   ├── Header.jsx             Fixed nav with mobile menu & theme toggle
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
├── metadata.json                      Version & metrics manifest
├── CHANGELOG.md
└── README.md
```

---

## Tech Stack

| Layer        | Choice                                                                   |
| ------------ | ------------------------------------------------------------------------ |
| UI Framework | React 19                                                                 |
| Build Tool   | Vite 6                                                                   |
| Styling      | Tailwind CSS 3 + `@tailwindcss/forms` + `@tailwindcss/container-queries` |
| Icons        | lucide-react                                                             |
| Unit Testing | Vitest 3                                                                 |
| E2E Testing  | Playwright 1.50                                                          |
| CI/CD        | GitHub Actions → GitHub Pages                                            |

---

## Quick Start

### Local Development

```bash
npm install
npm run dev        # http://localhost:5173
```

### Production Build

```bash
npm run build      # outputs to ./dist
```

### Tests

```bash
npm test           # Vitest unit + content tests
npm run test:e2e   # Playwright e2e (auto-starts Vite dev server)
```

---

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/static.yml`), which installs dependencies, runs `npm run build`, and deploys `./dist` to GitHub Pages automatically.

The Vite config uses `base: './'` so all asset paths in the built output are relative — this is required for correct asset resolution when the site is served from a GitHub Pages subdirectory.

---

## Portfolio Sections

| Section         | Content                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| Home            | Hero headline, key metrics card, CTAs                                            |
| Expertise       | Functional/E2E testing skills, team leadership                                   |
| Impact          | 6 quantified achievement stats                                                   |
| Experience      | 7 roles across 14+ years (Phynix, Accenture/KP, Infosys, TCS, Freelance, Eternal Web) |
| Projects        | Kaiser Permanente, Prime Therapeutics, Sony Pictures case studies                |
| About           | Mission statement, core strengths, languages                                     |
| Education       | MBA in IT (Sikkim Manipal), BE in IT (Sardar Patel University)                   |
| Certifications  | 15 credentials across AI/ML, Cloud, Agile, DevOps                               |
| Recommendations | Colleague feedback from Kaiser Permanente                                        |
| Contact         | Email, LinkedIn, GitHub, contact form, PDF resume download                       |

---

## Key Metrics

| Metric                        | Result |
| ----------------------------- | ------ |
| Patient Wait Time Reduction   | 30%    |
| Test Coverage Growth          | +25%   |
| Manual Testing Reduction      | 60%    |
| Quality Rating Achieved       | 100%   |
| Cost Reduction                | 40%    |
| Defect Resolution Improvement | 20%    |
| Defect Leakage Rate           | < 5%   |
| Years of Experience           | 14+    |
| Certifications                | 15     |
| Global QA Teams Led           | 15+    |

---

## Design

**Color Palette**

| Token          | Hex       |
| -------------- | --------- |
| Primary        | `#00685f` |
| Primary (dark) | `#6bd8cb` |
| Surface        | `#f8f9ff` |
| Dark surface   | `#0f172a` |

**Typography:** Manrope (headlines) · Inter (body)

**Dark Mode:** Class-based (`darkMode: 'class'`), toggled via header button, persisted to `localStorage`.

---

## Customization

To update contact details, edit the constants in `src/constants/data.js`:

- `contactEmail` — email address used in the Contact section
- `navItems` — navigation structure
- `themeStorageKey` — localStorage key for theme persistence

Content for each section lives in its corresponding component under `src/components/Sections/`. Experience bullets, certification data, and project descriptions are defined as inline arrays within their respective files.

---

## Certifications (15 Total)

Anthropic (4) · DeepLearning.AI · IBM (2) · Coursera · Google · Microsoft · Amazon Web Services · PMI · Scrum Inc. · Scrum Alliance

Categories: AI/ML · Cloud · DevOps · Agile · Leadership · Technical

---

## Contact

| Channel  | Details                                                                          |
| -------- | -------------------------------------------------------------------------------- |
| Email    | darshils99@gmail.com                                                             |
| LinkedIn | [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead/) |
| GitHub   | [github.com/darshil0](https://github.com/darshil0)                               |
| Location | Dallas-Fort Worth, TX                                                            |

PDF resume available for download at `/Darshil_Shah_QA_Engineering_Portfolio.pdf`.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for full version history.

---

## License

MIT · © 2026 Darshil Shah
