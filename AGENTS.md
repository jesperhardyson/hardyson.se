## Git workflow

- Always ask for explicit confirmation before running `git commit` or `git push` in this repo — never do either proactively, even after other approved changes.
- Do not add Claude/Anthropic attribution trailers (e.g. `Co-Authored-By: Claude ...`, `Claude-Session: ...`) to commit messages in this repo.

## Deploy

- The first deploy to a new/unconfigured Vercel project target defaults to production and gets aliased straight to the live domain — flag this to the user before running `vercel deploy` or `vercel --prod`, don't assume it's just a preview.

## Content

- New portfolio items go in `src/content/projects/` as markdown files matching the schema in `src/content.config.ts`.
- Set `draft: true` until an entry is ready to publish; `draft: false` (or omit) to make it live.

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
