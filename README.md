# Darshil Shah: QA Leadership & Digital Transformation Portfolio

**v2026.8.4** · A high-fidelity, professional portfolio showcasing 14+ years of expertise in Healthcare QA Engineering and AI-driven testing.

## Overview

This repository contains the source code for Darshil Shah's personal portfolio. It is a modern, single-page application (SPA) designed to demonstrate technical proficiency, leadership impact, and a comprehensive suite of certifications. The project features a custom voice AI assistant, "Jules," to guide visitors through the repository and professional background.

## Project Documentation

To learn more about the project design, quality assurance standards, and repository structure, please refer to the following documentation files:

- **[Workspace Knowledge Map (WORKSPACE_MAP.md)](./WORKSPACE_MAP.md)**: A repository-wide index documenting the purpose, stack, and architecture of all 33 connected repositories in the workspace.
- **[Design System Manifest (DESIGN.md)](./DESIGN.md)**: Specifications for "The Clinical Architect" branding, Material Design 3 tokens, typography, spacing, and glassmorphism standards.
- **[Enhancements Tracker (ENHANCEMENTS.md)](./ENHANCEMENTS.md)**: Current roadmap and log of identified improvements across features, content, accessibility, and automation.
- **[Testing Guide (TESTING.md)](./TESTING.md)**: Detailed test strategy, local execution commands for Vitest and Playwright, and CI/CD optimization configurations.
- **[Contributing Guidelines (CONTRIBUTING.md)](./CONTRIBUTING.md)**: Code style conventions, PR workflows, commit message rules, and repository-specific development guidelines.
- **[Changelog (CHANGELOG.md)](./CHANGELOG.md)**: Chronological record of features, improvements, fixes, and version releases.

## Key Features

- **AI Assistant (Jules)**: A menu-driven assistant for interactive repository exploration, with intelligent keyword-based typed-question matching that understands natural language variations.
- **Dynamic Content**: Portfolio data is centralized in `src/constants/` for easy updates.
- **Cinematic UI**: Smooth transitions and entry animations using `tailwindcss-animate`.
- **Dark Mode**: System-aware and user-toggled dark mode with persistent state.
- **Automated Deployment**: GitHub Actions workflow for seamless deployment to GitHub Pages.

## Key QA & Performance Metrics

This portfolio tracks and demonstrates high-fidelity QA metrics gathered across Darshil's 14+ years of leadership:

- **Defect Escape Rate (< 1%)**: The percentage of software defects that escape to production. Calculated as:
  $$\text{Defect Escape Rate} = \left( \frac{\text{Defects Found in Production}}{\text{Total Defects (QA + Production)}} \right) \times 100$$
  Maintaining a rate $< 1\%$ ensures robust reliability, compliance, and patient safety across critical healthcare platforms.
- **Automation Reliability (99.5%)**: High-reliability standard across CI/CD and automation test executions, ensuring zero flakiness.
- **Manual Test Reduction (60%)**: Transitioned manual QA procedures to automated, high-value, and AI-assisted execution.
- **Wait Time Reduction (30%)**: Optimized deployment and delivery flows, speeding up product time-to-market.
- **Test Coverage Growth (+25%)**: Enhanced quality assurance coverage across API and device integrations.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with `@tailwindcss/forms` and `@tailwindcss/container-queries`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest 4](https://vitest.dev/) (Unit/Integration) & [Playwright 1.61](https://playwright.dev/) (E2E)
- **Code Formatting**: [Prettier 3](https://prettier.io/)
- **CI/CD**: GitHub Actions

## Prerequisites

- **Node.js**: `^22.0.0` or `^24.0.0` (Node 18 is incompatible with Vitest 4/Rolldown dependencies due to missing 'styleText' in node:util, and Node 20 is deprecated on GitHub Actions runners)
- **npm**: `^10.0.0` or higher

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/darshil0/darshil-portfolio-2026.git
   cd darshil-portfolio-2026
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development Commands

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build and Preview

Build the production-ready application:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Testing Instructions

### Unit and Integration Tests

Run Vitest to verify component logic and content consistency:

```bash
npm test
```

### End-to-End Tests

Run Playwright to verify user flows and responsiveness:

```bash
# Install required browser binaries (first time only)
npx playwright install chromium

# Run E2E tests
npm run test:e2e
```

For more comprehensive information on our test suites, browser caching configurations in CI, and troubleshooting guidelines, please refer to the **[Testing Guide (TESTING.md)](./TESTING.md)**.

## Code Quality

This project uses [Prettier](https://prettier.io/) to enforce consistent code formatting. Prettier is currently a devDependency only — there is no `format` or `format:check` script wired up in `package.json` yet, so it must be invoked directly via `npx`.

Check formatting without making changes (recommended before opening a PR, since CI enforces this):

```bash
npx prettier --check .
```

Apply formatting fixes:

```bash
npx prettier --write .
```

> **Note:** CI runs a Prettier check as part of the pipeline. Formatting violations will fail the build, so run `npx prettier --check .` locally before pushing.

## Folder Structure

```text
.
├── public/                 # Static assets (PDF resume, etc.)
├── src/
│   ├── components/         # UI components (Common, Layout, Sections)
│   ├── constants/          # Application data and AI assistant metadata
│   ├── App.jsx             # Main application entry point
│   ├── main.jsx            # React DOM mounting
│   └── index.css           # Global styles and Tailwind directives
├── tests/
│   ├── e2e/                # Playwright end-to-end tests
│   └── *.test.js           # Vitest unit and integration tests
├── playwright.config.js    # Playwright configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── vitest.config.js        # Vitest configuration
```

## Environment Variables

This project does not currently require any environment variables. Contact form integration is managed via the `formId` in `src/constants/data.js`.

## License and Contact

### License

Distributed under the MIT License. See **[LICENSE](./LICENSE)** for more information.

### Contact

- **Email**: [darshils99@gmail.com](mailto:darshils99@gmail.com)
- **LinkedIn**: [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead/)
- **GitHub**: [github.com/darshil0](https://github.com/darshil0)

---

© 2026 Darshil Shah
