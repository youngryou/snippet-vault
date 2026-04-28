# SnippetVault

SnippetVault is a personal, interactive code library designed to store, manage, and test reusable code snippets. Unlike generic documentation sites, this tool focuses on a curated collection of frequently used logic and styles for myself, providing a live sandbox environment for real-time adjustments and instant copying.

## Project Information
- **Internal Name:** SnippetVault
- **Repository:** https://github.com/youngryou/snippet-vault.git
- **Author:** Young Ryou

## Key Features

### 1. Categorised Library
- Organises snippets into **HTML, CSS, JavaScript, and Setup/Config** categories.
- Data-driven rendering allows easy addition of new snippets via `snippets.js`.
- Separate handling for UI components (with preview) and Config snippets (plain text).

### 2. Live Sandbox Preview
- Utilises `<iframe>` to render code in an isolated environment.
- Prevents CSS/JS conflicts between the snippet and the main application.
- Supports real-time visual feedback for UI-based snippets.

### 3. Interactive Code Editing
- Real-time synchronisation: Changes in the code editor are instantly reflected in the preview.
- Dynamic adjustments: Fine-tune values like padding, margin, or colours before finalising the code.

### 4. Smart Copy
- One-click "Copy to Clipboard" functionality for refined code.
- Ensures the copied code includes all real-time modifications made in the sandbox.

## Tech Stack
- **HTML5**: Semantic structure and layout.
- **CSS3**: Responsive design and custom styling for the dashboard.
- **Vanilla JavaScript**: DOM manipulation, data handling, and iframe communication.
- **Vite**: Modern build tool for fast development and optimised deployment.

## MVP (Minimum Viable Product) Goals
- [ ] Render snippet cards from a JSON-like data structure (`snippets.js`).
- [ ] Display live preview of HTML/CSS within an iframe for UI snippets.
- [ ] Implement a basic "Copy to Clipboard" button for instant use.
- [ ] Functional sidebar for category filtering (HTML, CSS, JS, Setup).

## Future Enhancements
- Persistent storage using LocalStorage to save temporary edits.
- Advanced UI controls for CSS properties (sliders for numerical values, colour pickers).
- Keyboard support: Increase/decrease numerical values using arrow keys within the editor.
- Search functionality to find specific snippets instantly.
