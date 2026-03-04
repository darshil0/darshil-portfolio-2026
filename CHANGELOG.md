# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-03-04

### Added

- ScrollToTop utility with smooth scrolling on long portfolio pages.
- Framer Motion animations for section entrance and staggered content.
- Keyboard and screen reader support for the Navbar logo and mobile menu.

### Changed

- Migrated component styling to Tailwind CSS utility classes, significantly reducing `index.css` size.
- Organized remaining global styles into Tailwind `@layer components` for better maintainability.
- Refined responsive layouts for mobile and tablet, especially career metrics and certification filters.

### Removed

- Legacy animation classes (`.reveal`, `.fade-up`, `.stagger-*`) from the previous Vanilla JS implementation.

## [1.0.0] - 2026-03-01

### Added

- Initial React + Vite + TypeScript implementation of the portfolio.
- Core sections: hero, experience, projects, skills, certifications.
