# Changelog

All notable changes to the Darshil Shah Portfolio project will be documented in this file.

## [2026.7.16] - 2026-07-16

### Fixed
- Fixed CI/CD pipeline by updating Node.js version to 22.x and 24.x in GitHub Actions workflows to ensure compatibility and avoid deprecated runners.

## [2026.7.15] - 2026-07-15

### Added

- Integrated Prettier for automated codebase formatting.
- Centralized `experienceYears` and `portfolioVersion` constants in `src/constants/data.js` for better maintainability.

### Changed

- Updated project dependencies to latest versions (Vite 8, Vitest 4, React 19.2.7).
- Pinned `lucide-react` to `0.475.0` to ensure stable icon exports and compatibility.
- Synchronized version `v2026.7.15` across all project metadata, UI components, and tests.
- Refactored `Experience.jsx`, `About.jsx`, `Impact.jsx`, and `App.jsx` to use centralized constants.

## [v2026.6.12] - 2026-06-12

### Added

- Expanded `assistantData.js` with comprehensive data for 33 repositories, including `fullPurpose`, `summary`, `run`, `tech`, `test`, `contribute`, and `files` fields.
- Added accessibility support to `VoiceAssistant.jsx` with `aria-live="polite"` and `focus-visible` styling for interactive elements.

### Fixed

- Corrected the `atlas-strategic-matrix` tech stack in `assistantData.js` to include 'Google Gemini 1.5 Flash', resolving a Vitest failure.
- Updated the description of `atlas-strategic-matrix` to accurately reflect the AI model version.
- Audited and updated metadata for several key repositories (PDF Retrieval, Customer Support, Mindful Coach) to align with `WORKSPACE_MAP.md`.

### Changed

- Incremented project version to `v2026.5.29` across 7 files including `package.json`, `metadata.json`, and `index.html`.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to a date-based versioning scheme (**YYYY.M.D**).

## [2026.5.28] - 2026-05-28

### Added

- New test suite `tests/assistant-reset.test.jsx` for AI Assistant state verification.
- `tailwindcss-animate` plugin for enhanced cinematic transitions.

### Changed

- Refined mobile menu logic for better cross-device consistency.
- Updated project version to `2026.5.28` across all metadata and UI components.

### Fixed

- **AI Assistant**: Resolved issue where conversation history persisted after reset.
- **Navigation**: Synchronized scroll-spy logic with mobile menu state.
- **Styling**: Standardized mobile menu background and z-index to prevent content bleed-through.

## [2026.5.25] - 2026-05-25

### Added

- Global `ErrorBoundary` component to catch and display graceful fallback UI.
- Centralized `assistantData.js` for modular AI Assistant content management.

### Changed

- Unified professional metrics (14+ years experience) across all site sections.
- Expanded AI Assistant knowledge base with deep repository insights and certification details.

### Fixed

- **Tailwind Config**: Restored missing `borderRadius` keys (`full`, `2xl`, `3xl`) that caused layout regressions.
- **Content Accuracy**: Corrected stale experience strings in `index.html` and `assistantData.js`.

## [2026.4.15] - 2026-04-15

### Changed

- Redesigned Home section with cinematic gradients and glassmorphism cards.
- Optimized section-spy logic to iterate sections in reverse order for better accuracy.
- Improved Formspree integration with runtime setup detection and submission guards.

### Fixed

- **App Lifecycle**: Resolved `ReferenceError` caused by premature `navItems` access.
- **Accessibility**: Fixed duplicate `<main>` element and non-semantic dropdown icons.
- **Security**: Added `rel="noopener noreferrer"` to all external profile links.

## [2026.3.28] - 2026-03-28

### Added

- Initial Vite-based project structure.
- Vitest and Playwright testing infrastructure.
- Modular component architecture in `src/components/Sections/`.

### Changed

- Migrated legacy `portfolio-website.jsx` to modern React 19 / Vite 8 stack.
- Externalized application constants into `src/constants/data.js`.

---

© 2026 Darshil Shah
