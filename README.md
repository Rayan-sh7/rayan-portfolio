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

The project is a single-page site with in-page anchor navigation, wrapped in a
React Router [`HashRouter`](https://reactrouter.com/) (`src/main.jsx`). Because
every route is served from the same `index.html` and lives behind the URL hash
(e.g. `#/#about`), it deploys to static GitHub Pages with no server-side route
rewrites — a `BrowserRouter` would 404 on deep links and refreshes.

`base: "/rayan-portfolio"` in `vite.config.js` matches the repository name so the
built assets resolve under the GitHub Pages project path.

`src/components/ScrollToHash.jsx` bridges the two: react-router's `<Link>` update
the hash without a native anchor jump, so this helper scrolls the target section
into view (honouring the sections' `scroll-mt-16`).

## Customize

- `src/data/content.js` — Arabic/English content.
- `src/pages/` — page-level composition.
- `src/components/` — reusable UI components (`ScrollToHash.jsx` handles
  hash-route → section scrolling).
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
