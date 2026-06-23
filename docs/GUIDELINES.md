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
- **client**: Frontend React application changes.
- **server**: Backend Express application changes.
- **shared**: Shared types and interfaces.
- **ui**: Global UI components (buttons, modals).
- **preview**: Logic or styles related to the iframe live preview.
- **db**: Database schemas, migrations, or Supabase configurations.
- **auth**: Clerk authentication logic.
- **config**: Workspaces, Vite, or TypeScript configurations.
- **deps**: Managing npm dependencies across workspaces.

### Subject Rules
- **Imperative mood**: Start with a verb (e.g., "add", "fix", "update").
- **Lowercase**: Always start the subject with a lowercase letter.
- **No period**: Do not end the subject with a full stop (.).
- **Limit length**: Try to keep it under 50 characters.

### Commit Examples
- `feat(client): implement live preview iframe synchronization`
- `feat(server): setup snippet controller and express router`
- `fix(auth): resolve clerk session redirect loop`
- `docs(readme): update monorepo architecture instructions`
- `style(ui): apply dark mode tokens to snippet cards`
- `chore(deps): add typescript to shared package`

---

## 2. Branch Naming Conventions

All working branches should branch off from `main` and follow this format:
`<type>/<short-description>`

- `chore/setup-workspaces`
- `feat/server-core`
- `feat/snippet-api`
- `feat/client-layout`
- `feat/live-preview`
- `fix/auth-redirect`
- `refactor/shared-types`

---

## 3. Coding Standards

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

### TypeScript & React (Client)
- Use `const` by default. Use `let` only when reassignment is strictly necessary. Avoid `var`.
- Prefer functional components with React Hooks.
- Keep components strictly separated: business logic inside `features/` and reusable UI elements inside `components/`.
- Use shared types from `packages/shared` for all data fetching and state management.

### Express & API (Server)
- **Architecture**: Strictly adhere to the 3-layer architecture (`Router` -> `Controller` -> `Service` -> `Repository`).
- **Error Handling**: Use the centralized error handling utility for consistent API responses.

---

## 4. Directory Structure

```text
snippet-vault/
├── docs/                 # Project documentation and guidelines
│   ├── GUIDELINES.md     # Coding guidelines
│   └── note.md           # Private Note
│
├── packages/             
│   └── shared/           # Shared TypeScript interfaces
│
├── apps/                 
│   ├── client/           # React + Vite frontend application
│   └── server/           # Express backend application
│
├── .gitignore            # Root ignore file
├── .prettierrc           # Global Prettier configuration
├── LICENSE               # Licensing information
├── package.json          # Root workspace configuration
├── tsconfig.base.json    # Base TypeScript configuration
└── README.md             # Project description
```