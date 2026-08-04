# Changelog

All notable changes to the Darshil Shah Portfolio project will be documented in this file.

## [Unreleased]

### Fixed

- CI/CD: Fixed the Pages deployment workflow in `.github/workflows/pipeline.yml` by migrating the deploy job from `actions/deploy-pages@v1` to the standard, non-deprecated `actions/deploy-pages@v4` and eliminating the non-standard, redundant download-pages-artifact step.
- Documentation: Corrected portfolio version representation to `v2026.8.1` within `README.md` to ensure complete documentation alignment with package and metadata version metrics.

## [2026.8.1] - 2026-08-01

### Added

- **Documentation**: Introduced a dedicated "Project Documentation" section in `README.md` with descriptions and relative links for primary workspace documents (for example: `WORKSPACE_MAP.md`).

### Fixed

- **AI Assistant**: Resolved a crash where typed questions matching answers stored as arrays or arrays of objects caused React to fail.
- **CI/CD**: Adjusted Prettier checks and Playwright artifact handling to avoid pipeline failures when tests are skipped.
- **Version Sync**: Synchronized the project version to `v2026.8.1` across project metadata and UI constants.

---

© 2026 Darshil Shah
