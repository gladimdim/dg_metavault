---
title: "GladRoTools — Roblox Studio Companion for macOS"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos", "gamedev"]
author: "Dmytro Gladkyi"
description: "GladRoTools is a native macOS companion app for Roblox Studio that audits assets, prepares media, validates releases, and renders maps."
thumbnail: "Images/Tools_Compressed.jpg"
id: gladrotools
---

**GladRoTools** is a native macOS app that connects to Roblox Studio and gives you deep visibility into every asset in your place. Browse decals, sounds, meshes, and animations with full metadata. Prepare images and videos for Roblox. Audit performance, validate releases, and generate top-down map renders — all from your Mac.

![[Tools_Compressed.jpg|130]] ![[MapRender_Preview_Compressed.jpg|191]]![[ReleaseChecklist_Portrait_Compressed.jpg|165]]![[Performance_Audit_Portrait_Compressed.jpg|177]]

The app talks to Roblox Studio through a local TCP bridge. A bundled Studio plugin polls the Mac app for commands and returns results. No cloud dependency for core features — your place data stays on your machine.

![[Places_UI_Compressed.jpg|683]]

---

## All Tools

### Free Tools

| Tool                               | What It Does                                                              |
| ---------------------------------- | ------------------------------------------------------------------------- |
| [[places\|Places]]                 | Connected place overview, scan history, cached asset browser              |
| [[decals\|Decals]]                 | Browse all images, textures, and decals with thumbnails and dimensions    |
| [[sounds\|Sounds]]                 | Browse all sound assets with in-app audio player and waveform view        |
| [[meshes\|Meshes]]                 | Browse all mesh assets with triangle/vertex geometry stats                |
| [[animations\|Animations]]         | Browse all animation assets with thumbnails and metadata                  |
| [[image-tools\|Image Tools]]       | Compress, remove backgrounds, crop, and resize images for Roblox          |
| [[video-tools\|Video Tools]]       | Convert videos to TikTok/Shorts formats with trimming                     |
| [[model-analyzer\|Model Analyzer]] | Security scan .rbxm/.rbxmx files for malicious scripts and risky patterns |

### Premium Tools

| Tool                                     | What It Does                                            |
| ---------------------------------------- | ------------------------------------------------------- |
| [[mesh-heatmap\|Mesh Heatmap]]           | Top-down triangle density map with hotspot detection    |
| [[performance-audit\|Performance Audit]] | Scored audit against Mobile/Desktop budget presets      |
| [[release-checklist\|Release Checklist]] | Pre-release validation of every referenced asset        |
| [[map-render\|Map Render]]               | Top-down orthographic PNG renders via Studio raycasting |

---

## Free vs Premium

| Capability                    | Free | Premium   |
| ----------------------------- | ---- | --------- |
| Asset browsing (all types)    | Full | Full      |
| Image & video tools           | Full | Full      |
| Model security analyzer       | Full | Full      |
| Mesh heatmap                  | —    | Unlimited |
| Performance audit             | —    | Unlimited |
| Release checklist             | —    | Unlimited |
| Map render                    | —    | Unlimited |
| Export results (Markdown/PDF) | —    | Included  |
| Audit history & diffs         | —    | Included  |

Premium requires a **GladRoTools Pro** subscription with a 7-day free trial.

---

## Getting Started

1. [[getting-started|Install the plugin and connect to Studio]]
2. [[connection-guide|Troubleshoot bridge connection issues]]
3. [[subscription|Learn about Premium and subscription]]
4. [[faq|Frequently asked questions]]
