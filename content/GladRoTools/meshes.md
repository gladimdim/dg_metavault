---
title: "Meshes — Mesh Asset Browser"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
thumbnail: "../assets/gladrotools/meshes.png"
id: meshes
---

**Meshes** browses every mesh asset in your place — `MeshPart.MeshId`, `SpecialMesh.MeshId`, and `FileMesh.MeshId` references.

For each mesh, you see a thumbnail preview, triangle count, vertex count, and how many instances reference it. Geometry stats are fetched from Roblox via the Open Cloud API.

---

## How to Use

1. Click **Meshes** in the sidebar.
2. Browse the list with thumbnails and geometry stats.
3. Sort by name, triangle count, creator, or instance count.
4. Click a mesh to open the Detail sheet:
   - Full triangle and vertex counts.
   - **Focus in Studio** to locate the mesh.
   - **Open in Safari** to view on Roblox.
5. Use **Upload** to push a new mesh file from your Mac to Roblox.

---

## Help & Tips

- **Triangle budget:** Pay attention to high triangle counts. A single mesh with 50k+ triangles can drag down mobile performance. Use the [[performance-audit|Performance Audit]] tool to catch these.
- **Unresolved meshes:** If triangle data shows "N/A," the mesh may be private, moderated, or not accessible through Open Cloud.
- **Draco-encoded meshes:** The app bundles the Draco decoder for previewing compressed mesh geometry.

---

## FAQ

### Why do some meshes show 0 triangles?
The Open Cloud API could not fetch geometry for that asset. Verify your API key and check that the asset is public or owned by you.

### Can I see where each mesh is placed in the world?
Yes — click **Focus in Studio** in the Detail sheet. You can also use the [[mesh-heatmap|Mesh Heatmap]] tool to see density hotspots of triangle-heavy meshes across your map.

### Does the app support mesh replacement?
Not directly. Use Focus in Studio to find instances, then replace them manually or with Roblox's asset swap tools.
