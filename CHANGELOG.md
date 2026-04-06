# Changelog

All notable changes to the portfolio website are documented here.

---

## [2026.4.5] — 2026-04-05

### Bug Fixes

**Fix 1 — `tailwind.config.js`: CJS `require()` calls broke ESM Vite build**
The plugin registration used `createRequire(import.meta.url)` to synthesise a CommonJS `require()` and then called `require('@tailwindcss/forms')` and `require('@tailwindcss/container-queries')`. This pattern can silently fail or produce warnings in strict ESM contexts where Vite resolves the config as a native ES module. Replaced both require calls with standard ES `import` statements (`import tailwindForms from '@tailwindcss/forms'` etc.) and passed the imported references directly to the `plugins` array.

**Fix 2 — `Footer.jsx`: duplicate Contact navigation button**
The footer rendered all `navItems` via a `.map()` and then appended a second hardcoded `<button>` for Contact immediately after. This produced two identical Contact links in the footer. The standalone duplicate was retained (Contact is deliberately excluded from `navItems`) but the surrounding map was also updated to prepend a Home button, giving the footer a complete and non-duplicated navigation set: Home → all navItems → Contact.

**Fix 3 — `Header.jsx`: `TrendingUp` icon rotated 90° used as dropdown chevron**
The "More" dropdown trigger button used `<TrendingUp size={14} className="rotate-90" />` as a visual caret. While this worked visually, it is semantically incorrect and will fail any icon-based accessibility audit. Replaced with `<ChevronDown size={14} />`, the correct Lucide icon for a dropdown indicator. Also removed the redundant `id="menu-icon"` attribute that was duplicated on both the open and close states of the mobile hamburger button (two elements sharing the same `id` is invalid HTML).

**Fix 4 — `App.jsx`: scroll-spy always matched the first overlapping section**
The section-spy loop iterated forward through the sections array and `break`-ed on the first match whose bounding rect overlapped the viewport's one-third threshold. When the user had scrolled into the middle of a long section, earlier sections that still overlapped the trigger line would match first, making the active nav indicator lag or snap back. Fixed by iterating the sections array in reverse order and selecting the last section whose `rect.top` has passed 40% of the viewport height. This correctly reports the deepest section the user has scrolled into regardless of preceding section overlap.

**Fix 5 — `App.jsx`: scroll progress bar z-index conflict with fixed header**
Both the fixed `<header>` and the scroll progress bar `<div>` were assigned `z-50`. Because they are siblings in the stacking context, the progress bar could render on top of header tooltips and dropdown menus. Changed the progress bar container to `z-40` so it always sits one layer below the header's navigation elements.

**Fix 6 — `Contact.jsx`: synthetic event nullification inside `setTimeout`**
The `handleSubmit` handler called `e.preventDefault()`, set state, then referenced `e.target` inside a `setTimeout` callback. React recycles (nullifies) synthetic events after the originating call stack completes, so `e.target` is `null` by the time the timeout fires — `form.reset()` would throw. Fixed by capturing `const form = e.target` synchronously before any async gap, then calling `form.reset()` inside the timeout using the captured reference. Also added `disabled` state to the submit button while sending to prevent double-submission.

**Fix 7 — `Certifications.jsx`: `space-y-6` on CSS multi-column container caused cross-column margin bleed**
Tailwind's `space-y-6` utility injects `margin-top` on all direct children after the first via a `> * + *` CSS selector. When applied to a CSS `columns` container, this margin is computed in the block flow direction before column assignment, causing the first card in each non-first column to receive unwanted top spacing. Removed `space-y-6` from the parent container and replaced it with `mb-6` on each individual card, so vertical rhythm is controlled entirely within the column flow rather than across it.

### Version Bumps
- Updated `package.json`, `metadata.json`, `index.html`, `src/App.jsx`, `src/components/Layout/Footer.jsx`, `tests/basic.test.js`, and `tests/content.test.js` to version `2026.4.5`.
- Updated `metadata.json` `last_updated` field to `2026-04-05`.

---

## [2026.3.28] — 2026-03-28

### Architecture & Fixes
- **Dependency Upgrades**: Safely updated `package.json` React, Vite, Vitest, Playwright, and Tailwind packages to their latest compatible stable minor versions.
- **Import Cleanup**: Scrubbed numerous unused `lucide-react` icons from the React layout to eliminate linting errors and reduce bundle size.
- **ESM Path Resolving**: Replaced raw `__dirname` calls in `tests/content.test.js` with Node's native `'url'` package resolvers to guarantee stability across modern Vitest ESM contexts.
- **Vite Integration**: Relocated the loose `portfolio-website.jsx` file to a standard `src/App.jsx` structure, and instantiated `src/main.jsx` and `index.html` bindings so the app compiles natively via Vite.
- **UX Scrolling Nav Fixes**: Converted the React single-page architecture from conditionally rendering into a standard vertically stacked layout. This correctly enabled the viewport-based scroll progression bar and allowed IntersectionObservers to track and highlight the navigation bar dynamically as users read.
- **Native Tailwind Build**: Lifted formatting away from slow CDN injections inside `index.html` by properly drafting natively-compilable `tailwind.config.js` and `postcss.config.js` files, generating offline classes.
- **End-to-End Setup**: Initialized `playwright.config.js` hooked natively to launch the localhost Vite server automatically on boot for `npm run test:e2e` scripts.

### Structural Componentization
- **Modular Component Dissection**: Dissected the monolithic 520+ line `src/App.jsx` file into 10 highly-focused feature components (`src/components/Sections/`) and mapped root navigation headers/footers (`src/components/Layout/`).
- **Asset Hierarchy Resolution**: Created a central `public/` directory and securely shifted the standalone PDF resume inside, ensuring safe, static distribution by the Vite development server.
- **Constant Externalization**: Decoupled mapped navigation loops out of active component trees into a static constant configuration file (`src/constants/data.js`) to minimize loop execution bloat.

---

## [2026.3.20] — 2026-03-20

### Synchronized Versioning & Documentation
- Updated version to `2026.3.20` across `package.json`, `metadata.json`, `index.html`, `portfolio-website.jsx`, `README.md`, and `CHANGELOG.md`.
- Synchronized certification count in `README.md` to reflect the 15 active credentials present in the site.
- Conservative update of development dependencies to ensure project stability.

### Bug Fixes — `index.html`

**Fix 1 — Removed duplicate `<progress>` scroll indicator**
A bare, unstyled `<progress>` element appeared before the `<nav>` tag with no CSS. The correctly styled progress bar (with `class="fixed top-0 left-0 w-full h-1..."`) already existed in the right position between `</nav>` and `<main>`. The duplicate was removed to prevent rendering conflicts.

**Fix 2 — Removed duplicate theme toggle button in desktop nav**
The desktop nav's `hidden lg:flex` links block contained its own theme toggle button (`id="theme-icon"`) alongside the nav links, creating two active toggle buttons on desktop. The nested duplicate was removed; only the standalone `id="theme-toggle"` button in the top-right controls bar remains.

**Fix 3 — Dark mode broken: `toggleTheme()` targeted `document.body` instead of `document.documentElement`**
Tailwind CSS's `darkMode: 'class'` config applies dark mode by placing the `dark` class on the `<html>` element, not `<body>`. The `toggleTheme()` function was incorrectly calling `document.body.classList.add('dark')`, which had no effect on Tailwind utilities. Fixed to use `document.documentElement`. Custom CSS overrides were also updated from `body.dark { … }` selectors to `html.dark body, html.dark { … }`.

**Fix 4 — `updateThemeIcons()` called but never defined → `ReferenceError` on load**
The initialization block called `updateThemeIcons()` to sync the sun/moon icon visibility with the stored theme preference, but the function was never declared anywhere in the script. Added the function definition to toggle the `hidden` class on `#theme-icon-light` and `#theme-icon-dark` based on the current `documentElement` class state.

**Fix 5 — Contact section: duplicate element IDs and orphaned form markup**
A bad edit left orphaned elements after the email copy button inside `div.space-y-6`: a duplicate `<label>` + `<input id="email">`, a duplicate `<label>` + `<textarea id="message">`, a stray `<div id="form-status">`, a stray submit button, and a `</form>` closing tag with no matching open. The duplicate IDs (`email`, `message`) caused `document.getElementById` calls to behave unpredictably. All orphaned elements were removed, the unclosed `div.space-y-6` was closed, and form field IDs were renamed to `contact-name`, `contact-email`, and `contact-message` to ensure global uniqueness.

**Fix 6 — Added Formspree setup guard**
Added a runtime check that detects the `YOUR_FORM_ID` placeholder in the form's `action` URL on page load. When detected, a visible amber warning banner is shown and the submit button is disabled, preventing silent form submission failures for anyone deploying the site without replacing the placeholder.

---

### Bug Fixes — `portfolio-website.jsx`

**Fix 1 — `isMenuOpen` state variable declared but never initialized → `ReferenceError`**
The mobile hamburger toggle (`onClick={() => setIsMenuOpen(!isMenuOpen)}`), the mobile menu conditional render (`{isMenuOpen && (…)}`), and the nav item close handler (`setIsMenuOpen(false)`) all referenced `isMenuOpen`, but no corresponding `useState` declaration existed in the component. Added `const [isMenuOpen, setIsMenuOpen] = useState(false)`.

**Fix 2 — `isDarkMode` referenced but never defined → `ReferenceError`**
The theme toggle icon in the nav used `{isDarkMode ? <Sun /> : <Moon />}`, but `isDarkMode` was never declared. The component already manages theme via a `theme` state variable (values `'light'` / `'dark'`). Fixed to `{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}`.

**Fix 3 — Broken nav JSX: duplicate `navItems.map` render and unclosed conditional block**
The `<nav>` contained two separate `hidden lg:flex` blocks both mapping over `navItems`, resulting in all nav links rendering twice on desktop. A second copy of the mobile nav item map also existed inside the desktop controls area. Additionally, an `{isMenuOpen && (` conditional block was opened but never closed, causing a JSX parse error. The nav was rewritten with a single desktop nav, a single mobile hamburger control, and one properly closed `{isMenuOpen && (…)}` mobile menu block. A `navigate(id)` helper was added to handle `setActiveSection`, `setIsMenuOpen(false)`, and scroll reset in one call.

**Fix 4 — Two `<form>` elements in the contact section**
A correct async-handled `<form onSubmit={async (e) => {…}}>` was immediately followed by a second plain `<form method="POST" action="…">` rendered unconditionally. The plain form had no submission handler and would have caused a full page reload on submit, bypassing the status messaging logic. The duplicate plain form was removed; only the async form with proper error handling and `isFormSetupRequired` guard remains.

---

## [1.0.0] — 2026-03-17

### Initial Release

- Portfolio website launched with sections for Home, About, Experience, Projects, Skills, Certifications, Testimonials, and Contact.
- Dark/light mode toggle with `localStorage` persistence.
- Smooth section-based navigation with scroll progress indicator.
- Formspree-powered contact form with client-side validation.
- Downloadable PDF resume link.
- Responsive layout with mobile hamburger menu.
