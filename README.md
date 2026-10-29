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

## Layout

```
content/                 Obsidian vault (the only thing you edit to publish)
src/lib/obsidian.ts      Obsidian → Markdown conversion (links, embeds, frontmatter)
src/loaders/vault.ts     Astro content loader over content/
src/integrations/media.ts  serves/copies vault images under /media/
src/pages/               home, note/section pages, tags, search.json, RSS (index.xml), sitemap.xml
src/components/, src/layouts/, src/styles/   the "tiling WM" design
public/                  favicon, CNAME, robots.txt
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages (custom domain `dmytrogladkyi.com`).
