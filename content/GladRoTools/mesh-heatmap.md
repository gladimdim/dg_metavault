---
title: "Mesh Heatmap — Triangle Density Visualization (Premium)"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos", "premium"]
author: "Dmytro Gladkyi"
thumbnail: "../assets/gladrotools/mesh-heatmap.png"
id: mesh-heatmap
---

**Mesh Heatmap** creates a top-down density map of your place, color-coded by triangle concentration. It downloads mesh data, divides the map into a grid, and calculates triangle density per cell — so you can spot exactly where heavy meshes are clustered.

---

## How to Use

1. Click **Mesh Heatmap** in the sidebar (requires [[subscription|GladRoTools Pro]]).
2. Configure the analysis frame:
   - **Center X / Z:** The center of the area to analyze (in studs).
   - **Width / Depth:** The size of the analysis area.
   - **Cell Size:** Grid resolution (4–2048 studs).
3. Set density thresholds:
   - **Low threshold:** Cells below this are green (safe).
   - **High threshold:** Cells above this are red (hotspot).
   - Between thresholds: yellow to orange (concerning).
4. Click **Analyze**.
5. Review results:
   - **Summary:** Placements analyzed, unique/resolved/unresolved meshes, max density, total triangles, cell count.
   - **Preview image:** Color-coded grid with the heatmap.
   - **Hotspot list:** Cells ranked by density, with contributing mesh names and instance paths.

### Studio Integration
- Click **Create Overlay Parts** to place temporary colored parts in Studio at hotspot locations.
- Click **Clear Overlay Parts** to remove them.
- Use **Sync Frame from Studio** to pull the analysis frame from workspace bounds or a placed reference part.
- Use **Read Studio Frame** to import frame dimensions from a manual placement.

---

## Help & Tips

- **Start coarse, then refine:** Use a large cell size (256–512 studs) first to find general hot zones, then re-run with a smaller cell size on the problem area.
- **Unresolved meshes:** Some meshes may not have downloadable geometry data. They are counted as 0 triangles and do not contribute to density, which can under-report a cell.
- **Custom thresholds:** Adjust Low/High based on your platform target. Mobile-first games should flag cells with much lower triangle densities than desktop-only games.

---

## FAQ

### How long does the analysis take?
It depends on the number of meshes, the grid resolution, and the speed of your Mac. For a typical place with a few hundred meshes and a 64-stud cell size, analysis completes in seconds.

### Does this modify my place in Studio?
Only if you use **Create Overlay Parts**, which adds temporary `Part` instances in `Workspace` to mark hotspot locations. These are not saved unless you choose to keep them. Use **Clear Overlay Parts** to remove them.

### What does "Unresolved" mean?
Mesh geometry could not be downloaded — the asset may be private, moderated, or inaccessible. These meshes are shown in the results but contribute 0 triangles to density calculations.
