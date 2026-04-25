# Deploying to Vercel

This project is built with **TanStack Start** and currently configured for **Cloudflare Workers** (via `@lovable.dev/vite-tanstack-config`, which bundles the Cloudflare adapter). To deploy on Vercel, you must switch the server adapter — Vercel cannot run a Cloudflare Worker bundle.

## Option A — Recommended: Deploy as-is to Cloudflare

The project is already Cloudflare-ready (`wrangler.jsonc` is present). Just run:

```bash
bunx wrangler deploy
```

No code changes needed.

## Option B — Switch to Vercel

You'll need to eject from `@lovable.dev/vite-tanstack-config` and configure the Vercel adapter manually. High-level steps:

1. **Replace the Vite config** — remove `@lovable.dev/vite-tanstack-config` and write a standard `vite.config.ts` using `@tanstack/react-start/plugin/vite` with `target: "vercel"`:

   ```ts
   import { defineConfig } from "vite";
   import { tanstackStart } from "@tanstack/react-start/plugin/vite";
   import viteReact from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   import tsConfigPaths from "vite-tsconfig-paths";

   export default defineConfig({
     plugins: [
       tsConfigPaths(),
       tailwindcss(),
       tanstackStart({ target: "vercel" }),
       viteReact(),
     ],
   });
   ```

2. **Remove Cloudflare bits**:
   - Delete `wrangler.jsonc`
   - `bun remove @cloudflare/vite-plugin @lovable.dev/vite-tanstack-config`

3. **Build output** — TanStack Start's Vercel target emits to `.vercel/output` (already set in `vercel.json`).

4. **Push to GitHub**, then in Vercel:
   - Import the repo
   - Framework preset: **Other**
   - Build command: `bun run build` (already in `vercel.json`)
   - Output directory: `.vercel/output` (already in `vercel.json`)

5. **Environment variables** — add any `VITE_*` vars in Vercel project settings.

> ⚠️ Doing the eject in Lovable will break the Lovable preview, since the preview relies on `@lovable.dev/vite-tanstack-config`. Recommend doing the switch in a separate branch / after exporting to GitHub.

## What I added

- `vercel.json` — build/output config so Vercel knows how to build the project once you complete Option B.
