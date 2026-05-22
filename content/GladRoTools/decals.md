---
title: "Decals — Image Asset Browser"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
description: "Browse every Roblox image, texture, decal, and particle texture reference with thumbnails, dimensions, metadata, and usage counts."
thumbnail: "Images/Decals_Overview_Compressed.jpg"
id: decals
---

**Decals** browses every image-based asset in your Roblox place. This includes `Decal`, `ImageLabel`, `Texture`, and `ParticleEmitter` texture references.

For each asset, you see a thumbnail preview, asset ID, name, reference count (how many instances use it), and dimensions in pixels and bytes. The grid view makes it easy to scan large asset libraries visually.
![[Decals_Overview_Compressed.jpg]]

---

## How to Use

1. Connect GladRoTools to Roblox Studio.
2. Click **Decals** in the sidebar.
3. Use the search bar to filter by name, path, or asset ID.
4. Sort by name, byte size, last modified, creator, or instance count.
5. Click any decal to open the **Detail** sheet:
   - View full metadata (dimensions, asset ID, creator).
   - Click **Focus in Studio** to select the asset in Studio's Explorer.
   - Click **Open in Safari** to view the asset on the Roblox website.
   - Copy the asset ID to your clipboard.
6. Use **Upload** to push a new decal from your Mac to Roblox.

![[Upload_Decal_Compressed.jpg|368]]

---

## Help & Tips

- **Performance note:** Thumbnails are loaded on-demand and cached locally. Scrolling through hundreds of decals is smooth because images are loaded asynchronously.
- **Reference count:** A high reference count means that asset is used by many instances — changing or deleting it will have broad impact.
- **Upload formats:** Accepted image formats for upload include PNG, JPEG, and BMP.

---

## FAQ

### Why are some thumbnails missing?

The Roblox CDN may not have a thumbnail for every asset ID. The app shows a placeholder when the thumbnail is unavailable.

### Can I replace a decal in bulk?

Not directly. Use the reference count and Focus in Studio to manually replace instances, or use Roblox's built-in bulk asset replacement tools.

### Does the app track decal dependencies?

Yes. The Detail sheet shows how many instances reference this decal, and the asset library tracks which assets are used by which instances.
