The Clinical Architect — DESIGN.md
1 Core Visual Principles
Professional & Precise: high contrast, clean lines, intentional spacing for Healthcare QA leadership.

Modern Healthcare Aesthetic: teal/green primaries with slate and glassmorphism.

Adaptive: consistent brand tokens with light/dark variants for seamless mode switching.

2 Color Palette (tokens)
System note: each token is semantic; tools should map tokens to Tailwind or CSS variables as needed.

Primary
color.primary.light: #00685f

color.primary.dark: #6bd8cb

color.primary-container: #008378

color.primary-fixed: #89f5e7

color.on-primary.light: #ffffff

color.on-primary.dark: #003732

Secondary & Surface
color.secondary: #006c4a

color.surface: #f8f9ff

color.surface-dim: #d1dbec

color.on-surface: #121c28

color.background: #f8f9ff

Slate overrides (semantic mapping to Tailwind)
color.slate.dark-bg: #0f172a (slate-900)

color.slate.dark-text: #f1f5f9 (slate-100)

color.slate.muted.light: #6b7280 (slate-500)

color.slate.muted.dark: #94a3b8 (slate-400)

3 Typography (tokens)
type.headline.family: "Manrope, sans-serif" (weights: 700, 800)

type.body.family: "Inter, sans-serif" (weights: 400, 500, 600)

type.label.family: "Inter, sans-serif" (weights: 600, 900)

Typographic scale:

type.h1.size: clamp(2.25rem, 5vw, 4rem); weight: 800; line-height: 1.1; usage: hero headlines.

type.h2.size: clamp(1.85rem, 4vw, 3rem); weight: 800; line-height: 1.2; usage: section titles.

type.h3.size: clamp(1.35rem, 3vw, 2rem); weight: 700; line-height: 1.3; usage: card titles.

type.body.size: 1rem; weight: 400; line-height: 1.6; usage: paragraphs.

type.label.size: 0.75rem; weight: 900; line-height: 1.0; usage: small uppercase caps.

4 Spacing & Grid
spacing.section-vertical: 96px (py-24).

layout.container.maxWidth: 1280px (7xl); padding-x: 24px (px-6).

layout.gutter: 32px (gap-8).

Border radii:

radius.base: 0.125rem.

radius.large: 0.25rem.

radius.xl: 0.5rem.

radius.full: 9999px.

radius.card: 1.5rem (rounded-3xl).

radius.button: 2rem (rounded-[2rem]).

5 Component Specifications (tokens + examples)
Buttons

button.primary.bg: color.primary.light; button.primary.text: color.on-primary.light; padding: px-8 py-5; radius: radius.button.

button.secondary.bg: white (light) / slate-800 (dark); border: slate-200; radius: radius.button.

Cards

card.bg: white (light) / slate-900 (dark); border: slate-100; radius: radius.card; shadow: xl; hover: shadow-2xl + -translate-y-2 transition.

Navigation

nav.header.height: 4rem (h-16); position: fixed; backdrop: backdrop-blur-2xl.

nav.progress.height: 0.25rem (h-1); color: color.primary.light.

6 Visual Effects
glassmorphism.surface: backdrop-blur-3xl + bg-white/40 (adjust opacity in dark mode).

gradients.brand: linear-gradient(from #00685f to #004e47).

animations: animate-in, fade-in, slide-in-from-bottom-4; default transition: transition-all duration-300.

7 Accessibility
contrast: text tokens selected to meet WCAG AA for normal text; ensure color pairing tools are used when generating derived tokens.

touch-targets: interactive min size 44px.

focus: focus.ring: 2px ring with color.primary.light (focus:ring-2 focus:ring-[#00685f]).

motion: provide reduced-motion alternative; default transitions: duration-300.

8 Implementation notes (for developers)
Token mapping: export tokens as CSS variables and as Tailwind theme extensions (system tokens -> design tokens -> Tailwind keys) so components can consume either variables or classes.

Single source for baseURL-like values: keep shared tokens (colors, radii, spacing) defined once and reused across component token files. This avoids drift between design and code.

Tailwind integration: prefer Tailwind v4 token mapping (use CSS variables + theme extension) or keep v3 PostCSS setup if pinned to Tailwind v3. Map semantic tokens to Tailwind keys (colors, backgroundColor, borderColor) as needed.

Stitch-friendly: format tokens as clear key/value pairs and include light/dark variants so Stitch or other agents can consume and export code.

9 Example token JSON (machine-friendly)
{
"color": {
"primary": {"light":"#00685f","dark":"#6bd8cb"},
"primary-container":"#008378",
"primary-fixed":"#89f5e7",
"on-primary":{"light":"#ffffff","dark":"#003732"},
"secondary":"#006c4a",
"surface":"#f8f9ff",
"surface-dim":"#d1dbec",
"on-surface":"#121c28",
"background":"#f8f9ff",
"slate": {"dark-bg":"#0f172a","dark-text":"#f1f5f9","muted-light":"#6b7280","muted-dark":"#94a3b8"}
},
"type": {
"h1":{"size":"clamp(2.25rem, 5vw, 4rem)","weight":800,"lineHeight":1.1},
"h2":{"size":"clamp(1.85rem, 4vw, 3rem)","weight":800,"lineHeight":1.2},
"h3":{"size":"clamp(1.35rem, 3vw, 2rem)","weight":700,"lineHeight":1.3},
"body":{"size":"1rem","weight":400,"lineHeight":1.6},
"label":{"size":"0.75rem","weight":900,"lineHeight":1.0}
},
"spacing":{"section-vertical":"96px","gutter":"32px","container":{"maxWidth":"1280px","px":"24px"}},
"radius":{"base":"0.125rem","large":"0.25rem","xl":"0.5rem","card":"1.5rem","button":"2rem","full":"9999px"},
"component":{"button":{"primary":{"bg":"color.primary.light","text":"color.on-primary.light","px":"32px","py":"20px","radius":"radius.button"}}}
}
