# Design System: The Clinical Architect

This file defines the visual language and design tokens for the Darshil Shah Portfolio, following Google Stitch standards for AI-assisted design and development.

## 1. Core Visual Principles
- **Professional & Precise**: High contrast, clean lines, and intentional spacing reflecting Healthcare QA leadership.
- **Modern Healthcare Aesthetic**: Use of teal/green primaries combined with slate and glassmorphism.
- **Adaptive**: Seamless transitions between light and dark modes with persistent brand identity.

## 2. Color Palette

### Primary Colors
| Token | Hex (Light) | Hex (Dark) | Description |
|-------|-------------|------------|-------------|
| `primary` | `#00685f` | `#6bd8cb` | Brand primary color |
| `primary-container` | `#008378` | - | Deep teal container |
| `primary-fixed` | `#89f5e7` | - | Light teal highlight |
| `on-primary` | `#ffffff` | `#003732` | Text on primary |

### Secondary & Surface
| Token | Hex | Description |
|-------|-----|-------------|
| `secondary` | `#006c4a` | Accent green |
| `surface` | `#f8f9ff` | Default background |
| `surface-dim` | `#d1dbec` | Subtle backgrounds |
| `on-surface` | `#121c28` | Main text color |
| `background` | `#f8f9ff` | App background |

### Slate Overrides (Tailwind Defaults)
- **Dark Mode Background**: `slate-900` (#0f172a)
- **Dark Mode Text**: `slate-100` (#f1f5f9)
- **Muted Text**: `slate-500` (Light) / `slate-400` (Dark)

## 3. Typography

### Font Families
- **Headline**: `Manrope`, sans-serif (Weights: 700, 800)
- **Body**: `Inter`, sans-serif (Weights: 400, 500, 600)
- **Label**: `Inter`, sans-serif (Weights: 600, 900)

### Typographic Scale
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `h1` | `clamp(2.25rem, 5vw, 4rem)` | 800 | 1.1 | Hero headlines |
| `h2` | `clamp(1.85rem, 4vw, 3rem)` | 800 | 1.2 | Section titles |
| `h3` | `clamp(1.35rem, 3vw, 2rem)` | 700 | 1.3 | Card titles |
| `body` | `1rem` | 400 | 1.6 | Paragraphs |
| `label` | `0.75rem` | 900 | 1.0 | Small uppercase caps |

## 4. Spacing & Grid

### Layout Constants
- **Section Spacing**: `py-24` (96px) vertical padding.
- **Container**: Max-width `7xl` (1280px) with `px-6` (24px) padding.
- **Gutter**: `gap-8` (32px) for grids.

### Border Radii
- **Base**: `0.125rem`
- **Large**: `0.25rem`
- **Extra Large**: `0.5rem`
- **Full**: `9999px`
- **Custom Card**: `rounded-3xl` (1.5rem)
- **Custom Button**: `rounded-[2rem]` (2rem)

## 5. Component Specifications

### Buttons
- **Primary**: Background `primary`, Text `on-primary`, Padding `px-8 py-5`, Radius `rounded-[2rem]`.
- **Secondary**: Background `white` (or `slate-800`), Border `slate-200`, Radius `rounded-[2rem]`.

### Cards
- **Style**: White background (or `slate-900`), Border `slate-100`, Radius `rounded-3xl`, Shadow `xl`.
- **Interaction**: Hover `shadow-2xl`, `-translate-y-2` transition.

### Navigation
- **Header**: Fixed, `h-16`, `backdrop-blur-2xl`.
- **Progress Bar**: Height `h-1`, Color `primary`.

## 6. Visual Effects
- **Glassmorphism**: `backdrop-blur-3xl`, `bg-white/40`.
- **Gradients**: `from-[#00685f] to-[#004e47]`.
- **Animations**: `animate-in`, `fade-in`, `slide-in-from-bottom-4`.

## 7. Accessibility Standards
- **Contrast**: WCAG AA compliant text colors.
- **Touch Targets**: Minimum `44px` for interactive elements.
- **Focus States**: `focus:ring-2 focus:ring-[#00685f]`.
- **Motion**: `transition-all duration-300` for smooth state changes.
