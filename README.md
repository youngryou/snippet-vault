# SnippetVault

SnippetVault is a personal, interactive code library designed to store, manage, and test reusable code snippets. Unlike generic documentation sites, this tool focuses on a curated collection of frequently used logic and styles for myself, providing a live sandbox environment for real-time adjustments and instant copying.

## Key Features

### 1. Categorised Library
- Organises snippets into **HTML, CSS, and JavaScript** categories.
- Data-driven rendering allows easy addition of new snippets via `snippets.js`.

### 2. Live Sandbox Preview
- Utilises `<iframe>` to render code in an isolated environment.
- Prevents CSS/JS conflicts between the snippet and the main application.

### 3. Interactive Code Editing
- Real-time synchronisation: Changes in the code editor are instantly reflected in the preview.
- Dynamic adjustments for values like padding, margin, or colours.

### 4. Smart Copy
- One-click "Copy to Clipboard" functionality for refined code.
- Ensures the copied code includes all real-time modifications made in the sandbox.

## Tech Stack
- **HTML5**: Semantic structure and layout.
- **CSS3**: Responsive design and custom styling for the dashboard.
- **Vanilla JavaScript**: DOM manipulation, data handling, and iframe communication.

## MVP (Minimum Viable Product) Goals
- [ ] Render snippet cards from a JSON-like data structure.
- [ ] Display live preview of HTML/CSS within an iframe.
- [ ] Implement a basic "Copy to Clipboard" button.
- [ ] Functional sidebar for category filtering.

## Future Enhancements
- Persistent storage using LocalStorage.
- Advanced UI controls for CSS properties (sliders, colour pickers).
- Search functionality to find specific snippets instantly.