# Rayan Portfolio

React + Tailwind CSS portfolio designed for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project is a single-page site with in-page anchor navigation (no router), so
`base: './'` lets it be deployed as a static GitHub Pages site without
server-side route configuration.

## Customize

- `src/data/content.js` — Arabic/English content.
- `src/pages/` — page-level composition.
- `src/components/` — reusable UI components.
- `src/context/AppContext.jsx` — language/theme state.
- `src/index.css` — global Tailwind/CSS effects, light/dark theme tokens.

## Theme

Light mode is the default; dark mode is applied by adding the `dark` class to
`<html>`. Tailwind's dark variant is bound to that class in `src/index.css`
(`@custom-variant dark`), the choice is persisted in `localStorage`
(`rayan-theme`), and an inline script in `index.html` applies it before first
paint to avoid a flash.

Fonts (Inter + Noto Sans Arabic) are loaded from Google Fonts in
`index.html`.
