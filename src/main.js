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
const snippetContainer = document.getElementById('snippet-container');

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

/**
 * Function renderSnippets() to filter and render snippet cards
 */
// Set initial category as "All Snippets"
function renderSnippets(filter = 'All Snippets') {
  // Clear the current snippet container
  snippetContainer.innerHTML = '';

  // Filter snippets based on the selected category
  const filteredSnippets =
    // If "All Snippets" is selected, use all data
    filter === 'All Snippets'
      ? snippetData
      : // Otherwise, filter by the selected category
        snippetData.filter((snippet) => snippet.category === filter);

  // Loop through filtered snippet to create snippet card
  filteredSnippets.forEach((snippet) => {
    // Create a new article element for the snippet card
    const snippetCard = document.createElement('article');
    // Add CSS class for styling
    snippetCard.classList.add('snippet-card');
    // Add internal HTML structure for the snippet card
    snippetCard.innerHTML = `
      <div class="snippet-header">
        <span class="category-tag">${snippet.category}</span>
        <h3>${snippet.title}</h3>
      </div>
      <p class="description">${snippet.description}</p>
      <div class="code-box">
        <pre><code>${snippet.code}</code></pre>
      </div>
    `;
    // Add the snippet card to the snippet container
    snippetContainer.appendChild(snippetCard);
  });
}

// Execute functions for testing
renderSnippets();
