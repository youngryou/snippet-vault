/**
 * ============================================================
 * Snippets JS
 * ------------------------------------------------------------
 * @file          src/data/snippets.js
 * @project       SnippetVault
 * @author        Young Ryou
 * @lastUpdate    29 April 2026
 * ============================================================
 */

// Export and define array 'snippetData' containing snippet objects
export const snippetData = [
  {
    // ID for the snippet
    id: 1,
    // Category for filtering in the sidebar
    category: 'CSS',
    // Display title for the snippet
    title: 'Glass Card',
    // Brief description
    description: 'Glass Card (Stacked Effect)',
    // HTML markup for preview
    html: '<div class="glass-card">Hello</div>',
    // Code snippet
    code: `
glass-card {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px 38px;

  /* Stacked Layer Effect (Shadows) */
  box-shadow:
    0 30px 60px -5px rgba(0, 0, 0, 0.6),
    0 12px 0 -6px rgba(255, 255, 255, 0.05),
    0 24px 0 -12px rgba(255, 255, 255, 0.03);
}
    `,
  },

  {
    id: 2,
    category: 'Setup',
    title: 'Vite Config',
    description: 'Vite Config for GitHub deployed website (relative base path)',
    code: `
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Set base path to relative for GitHub Pages compatibility
  base: './',
  server: {
    open: true, // Automatically open browser on start
  },
});
    `,
  },
];

/**
 * ============================================================
 * For Copy
 * ============================================================
 */
// {
//   id: 1,
//   category: 'CSS',
//   title: 'Glass Card',
//   description: 'Glass Card (Stacked Effect)',
//   html: '<div class="glass-card">Hello</div>',
//   code: `glass-card {
//     position: relative;
//   }`,
// },
