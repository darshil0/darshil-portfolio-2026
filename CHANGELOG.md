# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2026.3.6] - 2026-03-04

### Fixed

- **CSS (BUG-1)**: Added missing `transition-delay-100` and `transition-delay-200` utility classes to `style.css`. These classes were referenced across every HTML page to produce staggered scroll-reveal animations on skill cards and career snapshot items, but were never defined — causing all `.reveal` elements to animate simultaneously instead of in sequence.
- **CSS (BUG-2)**: Fixed `.nav-links.open` using a hardcoded `rgba(255, 255, 255, 0.98)` background value. The CHANGELOG entry for v2026.3.2 claimed this had been corrected to `var(--surface)`, but the code still contained the literal value. Updated to `var(--surface)` as originally intended.
- **CSS (BUG-3)**: Added missing `.nav-links a.active` styles. Every page marks its own nav link with `class="active"`, but no CSS rule existed to visually distinguish it. Added a `color: var(--primary)` and a 2px bottom-border underline indicator so users can see which page they are on.
- **CSS (BUG-7)**: Added `h4` base styles using the design system's display font family. Without this rule, `<h4>` elements fell back to browser-default sizing and the generic body font (`DM Sans`) rather than the portfolio's `Plus Jakarta Sans` display font.
- **HTML (BUG-4)**: Fixed heading hierarchy in `skills.html`. The "Languages" and "Foundation Certifications" section labels were `<h4>` elements nested directly under `<h2>`, skipping a heading level in violation of WCAG 1.3.1. Changed both to `<h3>`. This is the same class of bug corrected in `experience.html` in v2026.3.2.
- **HTML (BUG-8)**: Clarified the ambiguous subtitle on `experience.html`. The page previously read "14+ years across global healthcare…" which contradicted the "9+ yrs Global Healthcare QA" claim on `index.html`. Updated to accurately reflect 14+ years total career spanning multiple industries, with 9+ years specializing in healthcare — matching the hero page wording.
- **package-lock.json (BUG-5)**: Synced the `version` field from the stale `"2026.3.1"` to `"2026.3.5"` to match `package.json`.

## [2026.3.5] - 2026-03-04

### Added

- **Content**: Integrated massive historical career timeline from LinkedIn, detailing positions at Phynix, Accenture, Infosys, and TCS into `experience.html`.
- **Content**: Handcrafted the "Languages" subsection inside `skills.html`.
- **Content**: Updated "Top Skills" and main hero wording to align with the LinkedIn exported data.

### Changed

- **Design**: Remastered the glassmorphism theme to a stunning, clean light-mode enterprise theme. Replaced deep darks with crisp whites (`#ffffff`), ocean blues (`#0284c7`), and aqua accents (`#0d9488`).
- **UX**: The mobile sidebar navigation now implicitly auto-closes when any anchor link is tapped.
- **Accessibility**: Heightened contrast variables (`--mid`, `--muted`, `--subtle`) to guarantee crisp 4.5:1 text readability across the new light slate backgrounds.

## [2026.3.4] - 2026-03-04

### Added

- **UX**: Replaced the placeholder 404 page content with full application-level navigation layout controls.

### Changed

- **Build Systems**: Enforced `prettier --write .` across every file (`.html`, `.json`, `.css`, `.js`, `.md`, `.yml`) to standardize all whitespace and formatting.
- **Design**: Initiated a premium dark-mode glassmorphic theme overhaul with deep violet gradients, custom scrollbars, and `Outfit`/`Inter` fonts.

## [2026.3.3] - 2026-03-04

### Added

- **SEO**: Created `robots.txt` pointing to the public `sitemap.xml`.
- **SEO/Social**: Added Open Graph metadata (`og:title`, `og:description`, `og:url`, `og:type`) and Twitter card structure to all HTML `<head>` blocks for rich social unfurling.
- **UI**: Added a dynamic inline SVG favicon (`👨💻`) to all pages.

### Fixed

- **Accessibility**: Added `autocomplete="name"` and `autocomplete="email"` to the contact form fields to fulfill WCAG 1.3.5 (Identify Input Purpose).

## [2026.3.2] - 2026-03-04

### Fixed

- **sitemap.xml**: All four `<loc>` URLs referenced the wrong GitHub Pages repository path (`darshil-portfolio` instead of `darshil-portfolio-2026`), causing the sitemap to point to non-existent pages. Corrected to `darshil0.github.io/darshil-portfolio-2026/*`.
- **style.css**: `.btn` was missing `cursor: pointer`, so button-element usages (e.g. the contact form's "Send Message" submit button) showed the default arrow cursor instead of the expected hand cursor.
- **style.css**: No `h1` base styles were defined, causing the hero heading to fall back to the body font (DM Sans) and browser-default sizing instead of the intended Syne display font at a large fluid size. Added `h1 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.25rem); font-weight: 800; line-height: 1.15; }`.
- **404.html**: The nav was missing the `nav-toggle` hamburger button present on every other page, so the mobile menu trigger was invisible and non-functional on the 404 error page.
- **script.js**: Counter animation read `el.textContent` at observation time to determine the target number. If the IntersectionObserver fired a second time before `unobserve` completed, it would parse an already-incremented textContent (e.g. "12" instead of "40%"), producing the wrong final value. Fixed by caching the original text in `data-target` before any animation begins.
- **HTML/UI**: The "Get In Touch" email CTA button was missing from the navbars of `experience.html`, `skills.html`, and `contact.html`. Added them to match the `index.html` navigation.
- **HTML/JS**: The contact form acted as a synchronous POST that navigated away from the portfolio. Converted it to an async `fetch()` with inline spinner, success, and error banners.
- **HTML**: In `experience.html`, three job title headings incorrectly used `<h4>` under `<h2>`, violating WCAG heading hierarchy. Changed to `<h3>`.
- **style.css**: Fixed `.nav-links.open` having a hardcoded `white` background; updated it to use `var(--surface)` for variable consistency.

## [2026.3.1] - 2026-03-05

### Fixed

- **HTML**: Replaced all raw `&` with `&amp;` across `index.html`, `skills.html`, and `contact.html` to ensure HTML5 compliance.
- **HTML**: Removed all inline styles from `contact.html`, moving them to centralized utility classes in `style.css` to satisfy `no-inline-style` validation rules.
- **CSS**: Added over 50 missing layout, component, and utility classes to `style.css` including `.skills-grid`, `.skill-card`, `.experience-list`, and `.cert-columns`.
- **CSS**: Implemented missing responsive media queries to ensure mobile-friendly layouts for hero sections and certification grids.
- **JS**: Implemented the previously missing certification filtering logic in `script.js`, enabling interactive filtering on the Skills page.

### Changed

- **Version**: Bumped project version to `2026.3.1` in `package.json` to reflect significant architectural improvements.
- **Formatting**: Ran Prettier across the entire codebase for consistent indentation and code style.

## [1.1.1] - 2026-03-04

### Fixed

- **style.css**: `.cert-columns` used `grid-cols: 1` which is not a valid CSS property. Corrected to `grid-template-columns: 1fr` so the single-column mobile layout actually renders.
- **style.css**: `.dot` had `height: 10px` while `width` was `8px`, preventing `border-radius: 50%` from rendering a true circle. Corrected to `height: 8px`.
- **style.css**: `.dot-sm` was missing `border-radius: 50%` and `display: inline-block`. It is used standalone (without `.dot`) in `index.html`, so it had no shape or display behaviour. Both properties added.
- **style.css**: `.color-mid` utility class was missing despite being used in `index.html` (testimonial text) and `contact.html` (contact links and phone number). Added `color: var(--mid)` rule.
- **style.css**: `.mt-2` utility class was missing despite being used in the footer `<p>` tag across all pages. Added `margin-top: 0.5rem` rule.
- **style.css**: `.text-404` utility class was missing despite being referenced in `404.html` for the oversized error number. Added with a fluid `clamp` font-size.
- **script.js**: The sticky-header scroll listener unconditionally removed the `scrolled` class when `scrollY ≤ 50`. On all inner pages (`experience`, `skills`, `contact`, `404`) the nav has `class="scrolled"` pre-applied in HTML, so scrolling back to the top would strip the backdrop blur and border, making the nav transparent. The listener is now gated behind an `isHomePage` check (`section#home` presence) so inner-page navs remain styled at all scroll positions.
- **contact.html**: Formspree form `action` used a raw email address as the path segment (`/f/darshils99@gmail.com`), which is not a valid Formspree endpoint and returns a 404. Corrected to the proper placeholder format (`/f/YOUR_FORM_ID`) with an inline comment explaining how to obtain a real form ID from the Formspree dashboard.

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
