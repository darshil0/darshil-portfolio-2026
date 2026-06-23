# Portfolio Enhancements & Roadmap

This document tracks identified enhancements, bug fixes, and future features for the Darshil Shah Portfolio.

## 1. Data & Versioning Synchronization

- [x] **Unified Versioning**: Ensure the project version (currently `v2026.7.15`) is consistent across `package.json`, `metadata.json`, `index.html`, `src/App.jsx` (test hooks), and `src/components/Layout/Footer.jsx`.
- [ ] **Accurate Tech Metadata**: Update `src/constants/assistantData.js` to correctly reflect the tech stack (e.g., Tailwind CSS 3 instead of 4).
- [x] **Dynamic Experience**: Link the "14+ years" experience string to a central constant in `src/constants/data.js` or `metadata.json`.

## 2. Content & Metadata

- [ ] **Live Form Integration**: Replace placeholder `formId` in `src/constants/data.js` with a production Formspree or Google Form ID.
- [ ] **Expanded Certifications**: Add more specific certifications to `src/components/Sections/Certifications.jsx` as mentioned in `assistantData.js` (100+ certifications).
- [ ] **SEO & OG Metadata**: Add Open Graph images and meta descriptions to `index.html`.

## 3. Visual & UX Improvements

- [ ] **Glassmorphism Consistency**: Ensure all glassmorphism cards (Home, Expertise, Projects) have the subtle border (`border-white/20`) required for correct rendering as per `DESIGN.md`.
- [ ] **Scroll Spy Precision**: Refine the threshold for `activeSection` in `App.jsx` to handle high-density sections more gracefully.
- [ ] **Image Optimization**: Ensure `public/` assets (like the PDF resume) are optimized for web delivery.

## 4. Accessibility (WCAG AA)

- [ ] **Social Labels**: Add `aria-label` to social links and "Copy Email" buttons in `src/components/Sections/Contact.jsx`.
- [ ] **Focus Management**: Verify that all interactive elements have a visible `focus-visible` ring that matches the `primary` brand color.
- [ ] **Reduced Motion**: Implement `@media (prefers-reduced-motion: reduce)` to disable or simplify cinematic animations for users with vestibular sensitivities.

## 5. Testing & Infrastructure

- [ ] **Test Coverage**: Add unit tests for `src/components/Common/ErrorBoundary.jsx`.
- [ ] **E2E Expansion**: Add Playwright tests for the mobile menu interaction and theme persistence.
- [ ] **CI/CD Enrichment**: Integrate Playwright report uploading to GitHub Actions artifacts.
