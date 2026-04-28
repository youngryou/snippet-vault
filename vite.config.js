// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Set base path to relative for GitHub Pages compatibility
  base: './',
  server: {
    open: true, // Automatically open browser on start
  },
});
