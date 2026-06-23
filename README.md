# SnippetVault

SnippetVault is a full-stack, interactive code library designed to store, manage, and test reusable code snippets. It provides a live sandbox environment with real-time CSS manipulation, categorised filtering, and a PostgreSQL database for persistent storage.

## Project Information
- **Internal Name:** SnippetVault
- **Repository:** https://github.com/youngryou/snippet-vault.git
- **Author:** Young Ryou

## Key Features

### 1. Categorised Library
- Organises snippets into main categories (CSS, JS/TS, DB, Config) and user-defined subcategories.
- Implements sorting by "Latest", "Most Liked", and filtering by user preferences.
- Dedicated views for specific languages and configurations.

### 2. Live Sandbox Preview
- Utilises `<iframe>` to render code in an isolated environment.
- Prevents CSS/JS conflicts between the snippet and the main application.
- Supports real-time visual feedback for UI-based snippets.

### 3. Interactive Code Editing
- Real-time synchronisation within the iframe preview.
- **Colour Bar UI:** Dedicated UI controls to adjust hex/rgb values dynamically without manually typing code.
- Instantly copies the exact manipulated code.

### 4. Authentication & Community Features
- User authentication to manage public and private snippets.
- Like system to elevate highly useful snippets in the sorting hierarchy.

## Tech Stack
- **Frontend:** React, Vite, Monaco Editor (or CodeMirror)
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** Clerk
- **Deployment:** Render (Web Service)

## MVP (Minimum Viable Product) Goals
- [ ] Set up PostgreSQL database schema and REST API for CRUD operations.
- [ ] Implement CSS Live Preview with code injection into an isolated iframe.
- [ ] Build authentication and the "Like" system.
- [ ] Develop interactive UI controls (e.g., Colour Bar) mapped to CSS properties.

## Future Enhancements
- Keyboard support: Increase/decrease numerical values using arrow keys within the editor.
- Search functionality to find specific snippets instantly.
