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

## Deploy to GitHub Pages

GitHub Pages must serve the **built** output, not the source. The root
`index.html` is Vite's dev entry (`<script src="/src/main.jsx">`), which only
works under `npm run dev`; served statically it 404s because GitHub Pages does
not transpile JSX and `/src/main.jsx` is an absolute path outside the project.

`.github/workflows/deploy.yml` builds the app and publishes `dist/`:

1. Push to `main` (or run the workflow manually from the **Actions** tab).
2. In **Settings → Pages → Build and deployment**, set **Source** to
   **GitHub Actions** — do *not* use "Deploy from a branch", which would publish
   the un-built source and reproduce the `main.jsx` 404.

The workflow installs dependencies, runs `npm run build`, and deploys `dist/` to
`https://<user>.github.io/rayan-portfolio/`.

To preview the production build locally:

```bash
npm run build
npm run preview
```

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
