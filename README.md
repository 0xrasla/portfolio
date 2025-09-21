## 0xRasla Portfolio

Clean, fast, minimal developer portfolio for **Thinesh Rasla (0xRasla)** built with **Svelte 5 + Vite + Tailwind + Bun**.

### Features

- Central data file: `src/lib/data.ts` (meta, experience, projects, videos, socials)
- Reusable components: hero, timeline, project cards, video list, footer
- Lightweight reveal animations (no external animation libs)
- SEO (OG + Twitter meta) in `+layout.svelte`
- Accessible focus states & responsive layout

### Install & Dev

```fish
bun install
bun run dev
```

Visit http://localhost:5173

### Build & Preview

```fish
bun run build
bun run preview
```

### Customize

Edit data in `src/lib/data.ts`.
Adjust design tokens / colors in `src/app.css`.

### Deploy

Ready for Vercel (`@sveltejs/adapter-vercel`). After pushing to GitHub, import repo in Vercel and deploy.

### Roadmap / Ideas

- Dynamic GitHub API stats (server load + caching)
- Blog / notes section
- Sitemap + RSS
- OG image generation route
- Theme toggle (currently system-based)

MIT License.

# portfolio
