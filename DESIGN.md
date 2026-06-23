# Design System: The Clinical Architect

This file defines the visual language and design tokens for the Darshil Shah Portfolio, following Google Stitch standards for AI-assisted design and development.

## 1. Core Visual Principles

- **Professional & Precise**: High contrast, clean lines, and intentional spacing reflecting Healthcare QA leadership.
- **Modern Healthcare Aesthetic**: Use of teal/green primaries combined with slate and glassmorphism.
- **Adaptive**: Seamless transitions between light and dark modes with persistent brand identity.

## 2. Color Palette

### Primary Colors

| Token               | Hex (Light) | Hex (Dark) | Description          |
| ------------------- | ----------- | ---------- | -------------------- |
| `primary`           | `#00685f`   | `#6bd8cb`  | Brand primary color  |
| `primary-container` | `#008378`   | `#004e47`  | Deep teal container  |
| `primary-fixed`     | `#89f5e7`   | `#89f5e7`  | Light teal highlight |
| `on-primary`        | `#ffffff`   | `#003732`  | Text on primary      |

### Secondary & Surface

| Token         | Hex (Light) | Hex (Dark) | Description        |
| ------------- | ----------- | ---------- | ------------------ |
| `secondary`   | `#006c4a`   | `#5cd4a0`  | Accent green       |
| `surface`     | `#f8f9ff`   | `#0f172a`  | Default background |
| `surface-dim` | `#d1dbec`   | `#1e293b`  | Subtle backgrounds |
| `on-surface`  | `#121c28`   | `#f1f5f9`  | Main text color    |
| `background`  | `#f8f9ff`   | `#0f172a`  | App background     |

### Slate Overrides (Tailwind Defaults)

- **Dark Mode Background**: `slate-900` (#0f172a)
- **Dark Mode Text**: `slate-100` (#f1f5f9)
- **Muted Text**: `slate-500` (Light) / `slate-400` (Dark)

## 3. Typography

### Font Families

- **Headline**: `Manrope`, sans-serif (Weights: 700, 800)
- **Body**: `Inter`, sans-serif (Weights: 400, 500, 600)
- **Label**: `Inter`, sans-serif (Weights: 600, 700) _(Inter does not support weight 900; use 700 max)_

### Typographic Scale

| Level   | Size                        | Weight | Line Height | Usage                |
| ------- | --------------------------- | ------ | ----------- | -------------------- |
| `h1`    | `clamp(2.25rem, 5vw, 4rem)` | 800    | 1.1         | Hero headlines       |
| `h2`    | `clamp(1.85rem, 4vw, 3rem)` | 800    | 1.2         | Section titles       |
| `h3`    | `clamp(1.35rem, 3vw, 2rem)` | 700    | 1.3         | Card titles          |
| `body`  | `1rem`                      | 400    | 1.6         | Paragraphs           |
| `label` | `0.75rem`                   | 700    | 1.0         | Small uppercase caps |

## 4. Spacing & Grid

### Layout Constants

- **Section Spacing**: `py-24` (96px) vertical padding.
- **Container**: Max-width `7xl` (1280px) with `px-6` (24px) padding.
- **Gutter**: `gap-8` (32px) for grids.

### Border Radii

| Token         | Value      | Tailwind Class   | Usage               |
| ------------- | ---------- | ---------------- | ------------------- |
| `radius-sm`   | `0.375rem` | `rounded`        | Inputs, badges      |
| `radius-md`   | `0.75rem`  | `rounded-xl`     | Chips, tags         |
| `radius-lg`   | `1rem`     | `rounded-2xl`    | Panels, modals      |
| `radius-card` | `1.5rem`   | `rounded-3xl`    | Cards               |
| `radius-pill` | `2rem`     | `rounded-[2rem]` | Buttons             |
| `radius-full` | `9999px`   | `rounded-full`   | Avatars, indicators |

## 5. Component Specifications

### Buttons

- **Primary**: Background `primary`, Text `on-primary`, Padding `px-8 py-5`, Radius `rounded-[2rem]`.
- **Secondary**: Background `white` (or `slate-800`), Border `slate-200` (or `slate-700`), Radius `rounded-[2rem]`.

### Cards

- **Style**: White background (or `slate-900`), Border `slate-100` (or `slate-800`), Radius `rounded-3xl`, Shadow `xl`.
- **Interaction**: Hover `shadow-2xl`, `-translate-y-2` transition.

### Navigation

- **Header**: Fixed, `h-16`, `backdrop-blur-2xl`.
- **Progress Bar**: Height `h-1`, Color `primary`.

## 6. Visual Effects

- **Glassmorphism**: `backdrop-blur-3xl`, `bg-white/40`, `border border-white/20`. _(A subtle border is required for glassmorphism to render correctly.)_
- **Gradients**:
  - Light: `from-[#00685f] to-[#004e47]`
  - Dark: `from-[#6bd8cb] to-[#3ab8ab]`
- **Animations**: `animate-in`, `fade-in`, `slide-in-from-bottom-4`. _(Requires `tailwindcss-animate` plugin — add to `tailwind.config.js` plugins.)_

## 7. Accessibility Standards

- **Contrast**: WCAG AA compliant text colors.
- **Touch Targets**: Minimum `44px` for interactive elements.
- **Focus States**: `focus:ring-2 focus:ring-[#00685f] focus:ring-offset-2`.
- **Motion**: `transition-all duration-300` for smooth state changes; wrap in `@media (prefers-reduced-motion: reduce)` where applicable.
