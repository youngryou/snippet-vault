# SnippetVault Development Guidelines

This document outlines the coding standards, commit conventions, and project structure for SnippetVault. All contributors (including myself) should adhere to these rules to maintain consistency.

---

## 1. Git Commit Conventions

We use the **Conventional Commits** specification to keep the history readable and to support automated versioning.

### Format
`<type>(<scope>): <subject>`

### Primary Types
- **feat**: A new feature for the application.
- **fix**: A bug fix.
- **docs**: Documentation only changes (e.g., README.md, GUIDELINES.md).
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **chore**: Updating build tasks, package configurations, or dependencies.
- **test**: Adding or correcting tests.

### Scopes (Optional but Recommended)
The scope should specify the place or feature affected by the change. For SnippetVault, use the following:
- **ui**: General user interface changes (layout, navigation).
- **sidebar**: Changes specific to the category menu.
- **preview**: Logic or styles related to the live iframe sandbox.
- **core**: Fundamental application logic and entry points (e.g., `main.js`).
- **data**: Updates to the `snippets.js` file (adding/removing snippets).
- **config**: Changes to `vite.config.js` or environment settings.
- **css**: Global style changes in `style.css`.
- **deps**: Managing dependencies (e.g., adding a new library via npm).

### Subject Rules
- **Imperative mood**: Start with a verb (e.g., "add", "fix", "update").
- **Lowercase**: Always start the subject with a lowercase letter.
- **No period**: Do not end the subject with a full stop (.).
- **Limit length**: Try to keep it under 50 characters.

### Commit Examples
- `feat(sidebar): add HTML category to the navigation`
- `fix(preview): resolve sandbox rendering error on mobile`
- `docs(readme): update deployment instructions`
- `style(css): format global variables for consistency`
- `chore(deps): install lucide-icons for the copy button`
- `refactor(ui): improve responsiveness of the main grid`

---

## 2. Coding Standards

### General Principles
- **Language**: Use **UK/NZ/AU English** for all naming and documentation (e.g., `initialise`, `organisation`, etc).
- **Formatting**: All files must be formatted using **Prettier** as defined in `.prettierrc`.
- **Naming**: Use `camelCase` for variables and functions, and `PascalCase` for classes.

### HTML & CSS
- **HTML**: Use semantic tags (`<header>`, `<main>`, `<aside>`, `<footer>`).
- **CSS**: 
  - Define global design tokens (colours, spacing) in `:root`.
  - Use relative units like `rem` and `em` for better accessibility.
  - Maintain a consistent naming convention (e.g., BEM (Block Element Modifier)).

### JavaScript
- Use `const` by default. Use `let` only when reassigning is necessary. Avoid `var`.
- Prefer arrow functions for callbacks and simple logic.
- Keep functions small and focused on a single responsibility.
- Write comments in English only within code blocks.

---

## 3. Directory Structure

```text
snippet-vault/
├── docs/               # Project documentation and guidelines
│   ├── GUIDELINES.md   # Coding guidelines
│   └── note.md         # Private Note
│
├── node_modules/       # Do not touch
│
├── public/             # For global assets (icons, etc.)
│
├── src/                # Source
│   ├── data/           # Data objects and snippet collections
│   │   └── snippets.js # Snippet data
│   ├── styles/         # CSS stylesheets
│   │   └── main.css    # Moved from src/style.css
│   └── main.js         # Main application logic
│
├── .gitignore          # Ignore files and folders
│
├── .prettierrc         # Prettier configuration
│
├── index.html          # Entry point
│
├── LICENSE             # Licensing information
│
├── package-lock.json   # Do not touch
├── package.json        # Do not touch (Dependencies and scripts)
│
├── README.md           # Project description
│
└── vite.config.js      # Vite configuration