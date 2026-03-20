# Changelog

All notable changes to the portfolio website are documented here.

---

## [1.1.0] — 2026-03-20

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
