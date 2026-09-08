## Git workflow

- Always ask for explicit confirmation before running `git commit` or `git push` in this repo — never do either proactively, even after other approved changes.
- Do not add Claude/Anthropic attribution trailers (e.g. `Co-Authored-By: Claude ...`, `Claude-Session: ...`) to commit messages in this repo.
- The repo is public and `main` has branch protection: pull requests are required (the `build` CI check must pass, branch must be up to date) and this is enforced even for admins — direct pushes to `main` are rejected by GitHub, including from the owner. Work on a feature branch and open a PR instead of pushing straight to `main`; merge only once the `build` check is green. `gh pr create` / `gh pr merge` are the fastest way to do this from the CLI.

## Deploy

- The first deploy to a new/unconfigured Vercel project target defaults to production and gets aliased straight to the live domain — flag this to the user before running `vercel deploy` or `vercel --prod`, don't assume it's just a preview.
- Actual publishing happens via Vercel's GitHub integration (auto-deploys on push: production on `main`, preview on other branches) — not GitHub Actions. `.github/workflows/ci.yml` only runs `astro check` + `astro build` on PRs and pushes to `main` as a pre-merge safety net; it doesn't deploy anything.

## Content

- Site is bilingual (sv/en). Content lives in two collections, both split per language: `src/content/projects/<lang>/` and `src/content/articles/<lang>/`, as markdown files matching the schemas in `src/content.config.ts`. An entry needs a separate file per language it should appear in — there's no automatic translation.
- Projects use `order` (number) to control manual display order (not date-sorted); articles are sorted by `date` descending.
- Set `draft: true` until an entry is ready to publish; `draft: false` (or omit) to make it live.
- Swedish is the default locale and lives at the root (`/`, `/projects/<id>/`, `/articles/<id>/`, `/contact/`); English lives under `/en/` (`/en/projects/<id>/`, etc). Routing is configured in `astro.config.mjs` (`i18n`).
- UI copy (nav, footer, section headings, etc.) lives in `src/i18n/ui.ts`; add new keys there for both languages rather than hardcoding strings in pages/components. `socials` (GitHub/LinkedIn URLs, email, phone) and `tools` (tech tag list) also live there — the GitHub/LinkedIn URLs are placeholders (`jesperhardyson`) and should be verified.
- Adding a new page in one language requires a matching page under `src/pages/en/` (or the root) for the other language — pages are duplicated per locale by design, sharing logic via `src/i18n/utils.ts` and shared components in `src/components/`.
- Visual design (colors, type, layout) comes from `docs/design.pen`, a Pencil design file the user actively edits — never read or write it directly, only via the `pencil` MCP tools, and never touch `docs/` (including `docs/.claude/`) unless the user explicitly asks; it's their design workspace, not site source. Design tokens are mirrored as CSS custom properties in `src/styles/global.css`.
- The contact page (`src/pages/contact/`, `src/pages/en/contact/`) has no form — just email/GitHub/LinkedIn cards (`ContactCard.astro`). If a form is added later, static hosting has no backend, so it'll need a real submission handler (Vercel function, Formspree, etc.).

## SEO

- `@astrojs/sitemap` is configured in `astro.config.mjs` and auto-generates `sitemap-index.xml`/`sitemap-0.xml` at build time from every static route, with per-page hreflang alternates. Nothing to maintain manually.
- `public/robots.txt` allows all crawlers and points to the sitemap.
- `src/layouts/Base.astro` computes canonical URL, hreflang alternates (`sv`/`en`/`x-default`), and Open Graph/Twitter meta tags per page from `Astro.url` — don't hardcode these, they're derived automatically for any new page.
- Pass `type="article"` to `Base` on content detail pages (project/article `[id].astro`) so `og:type` is correct; leave the default `"website"` for listing/section pages.
- No `og:image` yet (no image asset exists) — social share previews will be text-only until one is added.
- `src/components/PersonSchema.astro` adds JSON-LD `Person` structured data, included only on the homepage (`sv` and `en`) — don't duplicate it on every page.
- `src/pages/404.astro` is a real not-found page (locale-aware); Astro/Vercel serve it with a 404 status automatically for unmatched routes.

## View transitions

- `<ClientRouter />` (from `astro:transitions`, in `Base.astro`) is enabled site-wide for smooth cross-page navigation. This makes navigation client-side (SPA-like), which changes how `<script>` tags behave.
- Any `<script>` that queries/attaches listeners to DOM elements (not `is:inline`) must wrap its logic in a function and register it via `document.addEventListener('astro:page-load', setup)` instead of running at the top level — otherwise it won't re-run after a client-side navigation and the feature silently breaks. See `Header.astro`, `ScrollToTop.astro`, or the project/article filter scripts for the pattern.
- If the listener is attached to `window` or `document` (not an element that gets replaced on navigation, e.g. a scroll listener), store the handler in an outer variable and `removeEventListener` the previous one before adding a new one inside `setup()` — otherwise listeners stack up on every navigation since `window`/`document` persist across the SPA session.
- `is:inline` scripts (like the theme FOUC-prevention script in `Base.astro`) don't need this — they're plain inline scripts, not modules, and aren't subject to the same caching.

## Node version

- Local dev uses whatever Node is active in the shell (currently 22.x per `.nvmrc`-less setup); Vercel currently builds with Node 24.x (see Project Settings → Node.js Version).
- Keep these in sync when changing either — mismatches can cause "works locally, breaks on Vercel" issues. `package.json` `engines.node` currently allows `>=22.12.0`.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
