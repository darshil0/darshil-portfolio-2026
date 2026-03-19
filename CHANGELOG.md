# CHANGELOG

All notable changes to the Darshil Shah Portfolio project are documented here.

---

## [1.1.0] - 2026-03-19

### Added

- **Experience section** — Full professional history across all 7 roles:
  - Phynix Tech Services · QA Analyst (Feb 2025 – Present)
  - Accenture · QA Test Lead (Jan 2023 – Jan 2025)
  - Accenture · Sr. QA Automation Engineer (Oct 2020 – Dec 2022)
  - Infosys · SDET at Prime Therapeutics (Oct 2019 – Apr 2020)
  - TCS · Platform Automation Engineer at Sony Pictures (May 2019 – Jul 2019)
  - Freelance · QA Automation Engineer (May 2017 – Mar 2019)
  - Eternal Web Pvt. Ltd. · QA Engineer (Dec 2011 – Mar 2017)

- **Education section** — Academic credentials:
  - MBA in Information Technology · Sikkim Manipal University (2013–2015)
  - BE in Information Technology · Sardar Patel University (2007–2011)
  - Languages: English, Hindi, Gujarati (all Full Professional)
  - Honors: Accenture 3-Year Service Award & Recognition

- **Certifications section** — 14 AI, Cloud & Agile credentials (2025–2026):
  - Agent Skills with Anthropic (Anthropic, Mar 2026)
  - Claude Code in Action (DeepLearning.AI, Mar 2026)
  - Introduction to MCP (Anthropic, Oct 2025)
  - AI Fluency Framework & Foundations (Anthropic, Aug 2025)
  - Becoming an AI Agent Architect (IBM, Jul 2025)
  - ChatGPT Prompt Engineering for Developers (Coursera, Jul 2025)
  - Registered Scrum Basics™ (Scrum Inc., Aug 2025)
  - MLOps for Generative AI (Google, Jun 2025)
  - Generative AI in Action (IBM, Jun 2025)
  - Microsoft Copilot Foundations (Microsoft, Jun 2025)
  - AWS Cloud Practitioner Essentials (AWS, May 2025)
  - Generative AI for Project Managers (PMI, Mar 2025)
  - Foundations of Prompt Engineering (AWS)
  - Introduction to Generative AI (Google)

- **Active nav highlighting** — Current section is now visually highlighted in the navbar

### Fixed

- **LinkedIn URL** corrected in `index.html` (×2) and `portfolio-website.jsx` (×2):
  - Was: `linkedin.com/in/darshil-qalead`
  - Now: `linkedin.com/in/darshil-qa-lead`
- **Phone icon** in `portfolio-website.jsx` Contact section was incorrectly using the `FileText` icon; replaced with the proper `Phone` icon from lucide-react
- **Navigation JS** refactored for clarity and active-state support; `showSection()` now also updates nav button styles

### Changed

- Navigation bar expanded from 4 items (Home, Projects, Skills, Contact) to 7 items (Home, Experience, Projects, Skills, Education, Certifications, Contact)
- `portfolio-website.jsx` imports updated to include `Phone` icon from lucide-react

---

## [1.0.0] - 2026-03-01

### Added
- Initial portfolio release
- `index.html` — standalone responsive portfolio website
- `portfolio-website.jsx` — React component version
- `Darshil_Shah_QA_Engineering_Portfolio.pdf` — 6-page professional portfolio document
- GitHub Pages deployment configuration (`.github/workflows/deploy.yml`)
- `deploy.sh` — automated deployment script

---
