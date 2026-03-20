# Mini JS Showcase

A small, clean collection of vanilla JavaScript mini-projects for DOM practice and UI tooling experiments.

## What this project is

- Single-page project gallery (`index.html`) that dynamically renders project cards from `main.js`.
- Includes filters (all/dom/events/api/animation/storage) with live project count.
- 100% framework-free: plain HTML + CSS + vanilla JS.

## Project structure

- `index.html` - main showcase page with hero, filter pills, and project grid.
- `main.css` - styling for layout, cards, typography, and responsive UI.
- `main.js` - JS data model and UI renderer + filter logic.
- `01-theme-switcher/` - theme toggling demo using CSS variables.
- `02-drag-drop-kanban/` - drag-and-drop kanban list with card CRUD behavior.

## Included mini-projects

1. **Theme Switcher** - toggle dark/light (plus extra themes) via CSS custom properties.
2. **Drag & Drop Kanban** - dynamic columns and cards, drag-and-drop movement.

## Live demo

- <https://cosmic-faun-2e634b.netlify.app/> (replace with your deployed URL)

## Run locally

1. Clone repository

   ```bash
   git clone <repo-url>
   cd mini-js-showcase
   ```

2. Install dependencies

   ```bash
   npm i
   ```

3. Start a local server (recommended)
   - `npm run dev`
4. Open `http://localhost:5173` (or printed local server URL)

## Extend

- Add new project object in `main.js` array with `id`, `icon`, `link`, `title`, `description`, `tags`, `difficulty`.
- Add corresponding folder and demo page.
- Update filter pills in `index.html` and CSS if you add new tag categories.
- Update vite config file to add new index page entry for you'r added project

## Notes

- Designed for learning, demo, and portfolio usage.
- No third-party dependencies needed to run the core showcase.
