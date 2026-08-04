# Changelog

All notable changes to the Darshil Shah Portfolio project will be documented in this file.

## [Unreleased]

### Added

- Updated project docs (README, CONTRIBUTING) and added a concise changelog entry for the new fixes.

### Fixed

- Frontend: minor syntax and template-string className fixes in `src/components/Layout/Header.jsx` that could break build or styling.
- Frontend: removed extraneous trailing comma in `src/main.jsx` render call that could trigger parsers/lints in some toolchains.
- Constants: cleared placeholder `formId` in `src/constants/data.js` to prevent accidental form submissions in development.


## [2026.8.1] - 2026-08-01

### Added

- **Documentation**: Introduced a dedicated "Project Documentation" section in `README.md` with descriptions and relative links for all primary workspace documents (`WORKSPACE_MAP.md`, `DESIGN.md`, `ENHANCEMENTS.md`, `TESTING.md`).

### Fixed

- **AI Assistant**: Resolved a crash where typed questions matching answers stored as arrays or arrays of objects caused React to fail.
- **CI/CD**: Adjusted Prettier checks and Playwright artifact handling to avoid pipeline failures when tests are skipped.
- **Version Sync**: Synchronized the project version to `v2026.8.1` across project metadata and UI constants.

---

© 2026 Darshil Shah
