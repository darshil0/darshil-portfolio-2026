# Darshil Shah: QA Leadership & Digital Transformation Portfolio

**v2026.7.17** · A high-fidelity, professional portfolio showcasing 14+ years of expertise in Healthcare QA Engineering and AI-driven testing.

## Overview

This repository contains the source code for Darshil Shah's personal portfolio. It is a modern, single-page application (SPA) designed to demonstrate technical proficiency, leadership impact, and a comprehensive suite of certifications. The project features a custom voice AI assistant, "Jules," to guide visitors through the repository and professional background.

## Key Features

- **AI Assistant (Jules)**: A menu-driven assistant for interactive repository exploration.
- **Dynamic Content**: Portfolio data is centralized in `src/constants/` for easy updates.
- **Cinematic UI**: Smooth transitions and entry animations using `tailwindcss-animate`.
- **Dark Mode**: System-aware and user-toggled dark mode with persistent state.
- **Automated Deployment**: GitHub Actions workflow for seamless deployment to GitHub Pages.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with `@tailwindcss/forms` and `@tailwindcss/container-queries`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Vitest 3](https://vitest.dev/) (Unit/Integration) & [Playwright 1.51](https://playwright.dev/) (E2E)
- **CI/CD**: GitHub Actions

## Prerequisites

- **Node.js**: `^18.0.0` or higher
- **npm**: `^9.0.0` or higher

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

Distributed under the MIT License. See `LICENSE` for more information.

### Contact

- **Email**: [darshils99@gmail.com](mailto:darshils99@gmail.com)
- **LinkedIn**: [linkedin.com/in/darshil-qa-lead](https://www.linkedin.com/in/darshil-qa-lead/)
- **GitHub**: [github.com/darshil0](https://github.com/darshil0)

---

© 2026 Darshil Shah
