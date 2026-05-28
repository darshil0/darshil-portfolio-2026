# Darshil Shah:QA Leadership & Digital Transformation Portfolio

**v2026.5.28** · React 19 + Vite · Deployed via GitHub Pages

## Overview

This is a production-ready personal portfolio for **Darshil Shah**, a Global Healthcare QA Leader and AI-driven Testing Engineer with 14+ years of experience. It is built with React 19, Vite, and Tailwind CSS, and deploys automatically to GitHub Pages through GitHub Actions.

## Recent Fixes (2026-05-28)

- **AI Assistant state management**: Resolved an issue where conversation history persisted after resetting, ensuring a clean state for newcomers.
- **Navigation robustness**: Refined mobile menu logic and scroll-spy synchronization for better cross-device consistency.
- **Visual fidelity**: Verified `tailwindcss-animate` integration to ensure smooth cinematic transitions across all sections.

## Repository Structure

```text
portfolio/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── constants/
│   │   ├── data.js
│   │   └── assistantData.js
│   └── components/
│       ├── Common/
│       │   ├── ErrorBoundary.jsx
│       │   └── VoiceAssistant.jsx
│       ├── Layout/
│       │   ├── Header.jsx
│       │   └── Footer.jsx
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
│   ├── basic.test.js
│   ├── content.test.js
│   ├── assistant.test.js
│   └── e2e/
│       └── basic.spec.js
├── public/
│   └── Darshil_Shah_QA_Engineering_Portfolio.pdf
├── .github/
│   └── workflows/
│       └── static.yml
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── playwright.config.js
├── package.json
├── metadata.json
├── CHANGELOG.md
└── README.md
```

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

## Newcomer Guide

Welcome to the portfolio. If you are visiting for the first time, start here:

1. **Meet Jules**: Click the bot icon in the bottom-right corner to open the Jules AI Assistant. It can guide you through the repositories and share background on my professional journey.
2. **Explore the sections**: Use the top navigation menu to move through the portfolio.
3. **Review the metrics**: The Impact section highlights quantified results from 14+ years of QA leadership.
4. **Open the projects**: Each project card links to its repository for deeper technical review.

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
npm test
npm run test:e2e
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/static.yml`. The workflow installs dependencies, runs `npm run build`, and deploys `./dist` to GitHub Pages automatically.

The Vite config uses `base: './'`, which keeps built asset paths relative so the site works correctly when served from a GitHub Pages subdirectory.

## Portfolio Sections

| Section | Content |
| --- | --- |
| Home | Hero headline, key metrics card, CTAs |
| Expertise | Functional and E2E testing skills, team leadership |
| Impact | 6 quantified achievement stats |
| Experience | 7 roles across 14+ years (Phynix, Accenture/KP, Infosys, TCS, Freelance, Eternal Web) |
| Projects | Kaiser Permanente, Prime Therapeutics, Sony Pictures case studies |
| About | Mission statement, core strengths, languages |
| Education | MBA in IT (Sikkim Manipal), BE in IT (Sardar Patel University) |
| Certifications | 100+ credentials across AI/ML, Cloud, Agile, DevOps |
| Recommendations | Colleague feedback from Kaiser Permanente |
| Contact | Email, LinkedIn, GitHub, contact form, PDF resume download |

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
| Years of Experience | 14+ |
| Certifications | 100+ |
| Global QA Teams Led | 15+ |

## Design

**Color Palette**

| Token | Hex |
| --- | --- |
| Primary | `#00685f` |
| Primary (dark) | `#6bd8cb` |
| Surface | `#f8f9ff` |
| Dark surface | `#0f172a` |

**Typography:** Manrope for headlines, Inter for body.

**Dark mode:** Class-based (`darkMode: 'class'`), toggled from the header and persisted in `localStorage`.

## Customization

To update contact details, edit the constants in `src/constants/data.js`:

- `contactEmail` — email address used in the Contact section.
- `navItems` — navigation structure.
- `themeStorageKey` — `localStorage` key for theme persistence.

Content for each section lives in its corresponding component under `src/components/Sections/`. Experience bullets, certification data, and project descriptions are defined as inline arrays within their respective files.

AI Assistant content (repository metadata, personal background, Q&A) lives in `src/constants/assistantData.js`.

## Certifications

The portfolio includes **100+** certifications from Anthropic, DeepLearning.AI, IBM, Coursera, Google, Microsoft, Amazon Web Services, PMI, Scrum Inc., and Scrum Alliance, spanning AI/ML, Cloud, DevOps, Agile, Leadership, and Technical tracks.

## Contact

| Channel | Details |
| --- | --- |
| Email | [darshils99@gmail.com](mailto:darshils99@gmail.com) |
| LinkedIn | [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead/) |
| GitHub | [github.com/darshil0](https://github.com/darshil0) |
| Location | Dallas–Fort Worth, TX |

PDF resume is available at [Darshil_Shah_QA_Engineering_Portfolio.pdf](./public/Darshil_Shah_QA_Engineering_Portfolio.pdf).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for the full version history.

## License

MIT · © 2026 Darshil Shah
