# Wakhra Punjab Website

## Run locally

- Dev: `npm install` then `npm run dev`
- Production build (local check): `npm run build` then `npm run preview`

## GitHub Pages deployment

This repo is configured to deploy `dist/` to GitHub Pages via GitHub Actions.

1. In GitHub: **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually via **Actions**)

The workflow sets `VITE_BASE` to `/${{ github.event.repository.name }}/`, so the site works when hosted under a repository subpath.

## Why images were working on GitHub Pages but not locally

Your code had image URLs hardcoded like `/Wakhra-Punjab-Website/assets/...`.

- On GitHub Pages (project pages), the site is served under `/Wakhra-Punjab-Website/`, so those URLs resolve.
- Locally (`npm run dev`), Vite serves the app at `/`, so `/Wakhra-Punjab-Website/assets/...` 404s.

Fix: reference public assets via `import.meta.env.BASE_URL`, e.g. `${import.meta.env.BASE_URL}assets/logo-circle.png`.
