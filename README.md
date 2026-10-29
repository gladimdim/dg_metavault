# Dmytro Gladkyi's MetaVault

Source of [dmytrogladkyi.com](https://dmytrogladkyi.com): articles, micro-posts, topics, Omarchy projects and GladRoTools docs.

The content is an Obsidian vault in `content/`. The site is built with [Astro](https://astro.build) and deployed to GitHub Pages from the `main` branch.

## Run locally

Requirements: Node.js 24 (see `.node-version`; Astro needs at least 22.23).

```bash
npm install
npm run dev        # http://localhost:4321, reloads when you edit notes in content/
```

Other commands:

```bash
npm run build      # static site in dist/
npm run preview    # serve dist/ at http://localhost:4321
npm run dev -- --port 4322 --host   # different port / expose on the LAN
```

## Writing

Write in Obsidian with `content/` as the vault. Everything Obsidian-specific is converted at build time, so the Markdown files stay untouched:

- `[[note]]`, `[[folder/note|alias]]`, `[[note#heading]]` become links (shortest-path resolution, like Obsidian).
- `![[image.png]]` and `![[image.png|480]]` embed images (the number is the width).
- Relative links like `../assets/x/pic.jpg` work; all non-Markdown files are published under `/media/`.
- Code fences without a language are highlighted as Dart, C# or OCaml based on the note's tags.

Frontmatter used by the site:

```yaml
---
title: "Fog of War in Flutter Game"   # falls back to the first heading
date: 2020-12-01                      # Micro posts fall back to the YYYY-MM-DD filename
tags: ["flutter", "dart"]
description: "Shown on cards, in search and in meta tags."
thumbnail: "../assets/flutter_fog_of_war/thumbnail.jpg"  # card image; else the first image in the note
---
```

URLs follow the file path: `content/Articles/flutter_fog_of_war.md` → `/Articles/flutter_fog_of_war/`, a folder's `index.md` → `/Articles/`. Tags get pages at `/tags/<tag>/`. Folders `private/` and `templates/` are not published.

## Social previews, SEO and AI discoverability

All generated at build time, nothing to maintain by hand:

- **Link previews** (X, Telegram, Facebook, LinkedIn, Slack…): every page gets a 1200×630 card at `/og/<path>.png` in the site's style, with title, description, tags and the note's thumbnail. Rendered by `src/lib/og.ts` (satori + resvg). Open Graph and Twitter Card tags are in `src/layouts/Base.astro`.
- **Descriptions**: the frontmatter `description` is used everywhere (meta, cards, previews, llms.txt); without one, the first ~155 characters of the text are used. Keep it 120–160 characters.
- **Structured data** (JSON-LD): `WebSite` with search, `Person` (profiles, topics), `BlogPosting` / `SocialMediaPosting` per note, `CollectionPage` for sections, `BreadcrumbList`.
- **AI assistants**: `/llms.txt` (site map with summaries, [llmstxt.org](https://llmstxt.org)), `/llms-full.txt` (every note as Markdown), and a Markdown twin of every page (`/Articles/flutter_fog_of_war.md`). `public/robots.txt` explicitly allows AI crawlers.
- Also `sitemap.xml`, RSS at `/index.xml`, canonical URLs and `lang`/`og:locale` per note (Ukrainian notes are detected).
- Site name, tagline, positioning and profile links live in `src/lib/site.ts`.

Check a preview after deploying with the [Telegram bot @WebpageBot](https://t.me/WebpageBot) (also clears Telegram's cache) or [opengraph.xyz](https://www.opengraph.xyz/).

## Language filter

The `en | ua` switch in the top bar filters article cards and micro-posts on every page and is remembered in the browser; `?lang=en` / `?lang=uk` sets it from a link. Micro posts use the `language: "🇺🇸"` / `"🇺🇦"` frontmatter flag, other notes are detected from the text.

## Translations

A translation lives next to the original as `<slug>-en.md` with two extra frontmatter fields:

```yaml
language: "en"
translationOf: "gothic_remake_sich"   # file name of the original, same folder
```

Both pages then link to each other ("read in english" / "читати українською"), get `hreflang` alternates and JSON-LD `workTranslation` links. In listings, `all` shows only originals, `en` shows English posts including translations, `ua` shows Ukrainian ones.

## Layout

```
content/                 Obsidian vault (the only thing you edit to publish)
src/lib/obsidian.ts      Obsidian → Markdown conversion (links, embeds, frontmatter)
src/loaders/vault.ts     Astro content loader over content/
src/integrations/media.ts  serves/copies vault images under /media/
src/pages/               home, note/section pages, tags, og/ images, llms.txt, .md twins, search.json, RSS, sitemap
src/lib/site.ts          site identity, tagline and profiles used by meta tags and JSON-LD
src/lib/og.ts            social preview card renderer
src/components/, src/layouts/, src/styles/   the "tiling WM" design
public/                  favicon, CNAME, robots.txt
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages (custom domain `dmytrogladkyi.com`).
