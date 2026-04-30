/**
 * ============================================================
 * Main JS
 * ------------------------------------------------------------
 * @file          src/main.js
 * @project       SnippetVault
 * @author        Young Ryou
 * @lastUpdate    29 April 2026
 * ============================================================
 */

// Import the snippet data array
import { snippetData } from './data/snippets.js';

// Get DOM elements
const sidebarMenu = document.getElementById('sidebar-menu');

/**
 * Function renderSidebar() to build the sidebar navigation
 */
function renderSidebar() {
  // Clear the sidebar content to prevent duplication
  sidebarMenu.innerHTML = '';

  // Bring every unique categories and add "All Snippets"
  const categories = [
    'All Snippets',
    ...new Set(snippetData.map((snippet) => snippet.category)),
  ];

  // Loop through each category to create menu buttons
  categories.forEach((category) => {
    // Create a new div element for the menu item
    const menuItem = document.createElement('div');
    // Add CSS class for styling
    menuItem.classList.add('menu-item');
    // Add category name
    menuItem.textContent = category;
    // Add the menu item to the sidebar
    sidebarMenu.appendChild(menuItem);
  });
}

// Execute functions for testing
renderSidebar();
