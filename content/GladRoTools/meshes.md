---
title: "Meshes — Mesh Asset Browser"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
description: "Inspect Roblox mesh assets with thumbnails, triangle counts, vertex counts, byte sizes, and reference counts."
thumbnail: "Images/Meshes_List_Compressed.jpg"
id: meshes
---

**Meshes** browses every mesh asset in your place — `MeshPart.MeshId`, `SpecialMesh.MeshId`, and `FileMesh.MeshId` references.

For each mesh, you see a thumbnail preview, triangle count, vertex count, and how many instances reference it. Geometry stats are fetched from Roblox when you sign in with your Roblox account.

![[Meshes_List_Compressed.jpg|554]]

---

## How to Use

1. Click **Meshes** in the sidebar.
2. Browse the list with thumbnails and geometry stats.
3. Sort by name, triangle count, creator, or instance count.
4. Click a mesh to open the Detail sheet:
   - Full triangle and vertex counts.
   - **Focus in Studio** to locate the mesh.
   - **Open in Safari** to view on Roblox.

![[Mesh_Popup_Compressed.jpg|253]]

---

## Help & Tips

- **Triangle budget:** Pay attention to high triangle counts. A single mesh with 50k+ triangles can drag down mobile performance. Use the [[performance-audit|Performance Audit]] tool to catch these.
- **Unresolved meshes:** If triangle data shows "N/A," the mesh may be private, moderated, or not accessible through Roblox's API.
- **Draco-encoded meshes:** The app bundles the Draco decoder for previewing compressed mesh geometry.

---

## FAQ

### Why do some meshes show 0 triangles?

The Roblox API could not fetch geometry for that asset. Sign in with Roblox and check that the asset is public or owned by you.

### Can I see where each mesh is placed in the world?

Yes — click **Focus in Studio** in the Detail sheet. You can also use the [[mesh-heatmap|Mesh Heatmap]] tool to see density hotspots of triangle-heavy meshes across your map.

### Does the app support mesh replacement?

Not directly. Use Focus in Studio to find instances, then replace them manually or with Roblox's asset swap tools. This is the limitation of the Roblox Studio Security that does not allows changing mesh IDs from plugins.
