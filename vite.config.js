import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use './' so all asset paths in the built output are relative.
  // This is required for GitHub Pages when the site is served from a
  // subdirectory (e.g. https://username.github.io/repo-name/).
  // It also works correctly when served from the root domain.
  base: './',
})
