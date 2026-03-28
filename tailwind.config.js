import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-fixed": "#89f5e7",
        "secondary": "#006c4a",
        "outline-variant": "#bcc9c6",
        "primary-fixed-dim": "#6bd8cb",
        "surface-tint": "#006a61",
        "on-background": "#121c28",
        "on-secondary-fixed": "#002114",
        "inverse-on-surface": "#eaf1ff",
        "background": "#f8f9ff",
        "tertiary": "#00647c",
        "outline": "#6d7a77",
        "on-secondary": "#ffffff",
        "on-primary-container": "#f4fffc",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#004e61",
        "on-secondary-fixed-variant": "#005137",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#27313e",
        "on-secondary-container": "#00714e",
        "surface-variant": "#d9e3f4",
        "primary-container": "#008378",
        "on-primary-fixed-variant": "#005049",
        "error": "#ba1a1a",
        "tertiary-container": "#007f9d",
        "on-error": "#ffffff",
        "surface": "#f8f9ff",
        "on-tertiary-container": "#fafdff",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#00201d",
        "tertiary-fixed-dim": "#6cd3f7",
        "on-surface-variant": "#3d4947",
        "secondary-fixed": "#85f8c4",
        "secondary-fixed-dim": "#68dba9",
        "inverse-primary": "#6bd8cb",
        "surface-container-high": "#dfe9fa",
        "surface-container-highest": "#d9e3f4",
        "surface-container-low": "#eef4ff",
        "tertiary-fixed": "#b7eaff",
        "surface-bright": "#f8f9ff",
        "on-tertiary-fixed": "#001f28",
        "primary": "#00685f",
        "surface-container": "#e5eeff",
        "surface-dim": "#d1dbec",
        "secondary-container": "#82f5c1",
        "on-surface": "#121c28"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin,
  ],
}
