# Deploying to Vercel

This project (TanStack Start) is wired up for Vercel via a thin Node serverless function in `api/index.js` that adapts the framework's web-standard `fetch` handler to Vercel's request/response.

## How it works

- `bun run build` produces:
  - `dist/client/` — static assets (served directly by Vercel's CDN)
  - `dist/server/server.js` — the SSR handler (web-standard `{ fetch }` export)
- `api/index.js` — Vercel serverless function that imports `dist/server/server.js` and forwards every non-asset request to it.
- `vercel.json` — sets the build command, output directory for static assets, and rewrites all non-asset paths to `/api/index`.

## Deploy steps

1. Push the project to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Other** (do not pick a preset; `vercel.json` controls everything).
4. Add any `VITE_*` env vars under **Settings → Environment Variables**.
5. Click **Deploy**.

That's it. The serverless function will SSR every page; static assets are served from the CDN.

## Local sanity check

```bash
bun run build
bunx vercel dev   # optional, requires Vercel CLI login
```

## Notes

- The Cloudflare adapter (`@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`) and `wrangler.jsonc` have been removed.
- ⚠️ The Lovable in-editor preview depends on `@lovable.dev/vite-tanstack-config` and may no longer work in the Lovable editor. Local `bun dev` and Vercel deploys still work.
