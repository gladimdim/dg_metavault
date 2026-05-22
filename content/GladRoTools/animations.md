---
title: "Animations — Animation Asset Browser"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
description: "Browse Roblox animation asset IDs, thumbnails, byte sizes, and reference counts from a connected Roblox Studio place."
thumbnail: "Images/Animation_Grid_Compressed.jpg"
id: animations
---

**Animations** browses every `Animation.AnimationId` reference and runtime animation ID in your place. Each animation shows a thumbnail preview (with colorful gradient fallbacks), byte size, and reference count.

![[Animation_Grid_Compressed.jpg|510]]

---

## How to Use

1. Click **Animations** in the sidebar.
2. Browse the list of animations found in your place.
3. Sort by name, byte size, creator, or instance count.
4. Click any animation to open the Detail sheet with full metadata.
5. Use Save Animation button to save it as rbxm file.

![[Animation_Popup_Compressed.jpg|433]]

---

## Help & Tips

- **Gradient fallbacks:** When Roblox does not provide an animation thumbnail, the app generates a colorful gradient placeholder that is unique per asset ID.
- **Byte size matters:** Animations are often among the largest assets in a place. Sort by size to find the heaviest ones and consider whether they are worth keeping.

---

## FAQ

### Can I preview an animation in GladRoTools?

The app shows metadata, thumbnails, and byte sizes. To actually play an animation, use Roblox Studio's Animation Editor.

### Why are some animation IDs listed without names?

Some animation references may be set at runtime via scripts. The app reports the raw asset ID in these cases.

### How do I find unused animations?

Use the reference count. If an animation has 0 instances referencing it, it may be orphaned in your asset library. Check whether scripts reference it at runtime before deleting.
