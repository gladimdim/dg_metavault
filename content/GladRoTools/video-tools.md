---
title: "Video Tools — Convert Videos for Social Media"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
thumbnail: "../assets/gladrotools/video-tools.png"
id: video-tools
---

**Video Tools** converts local video files to social media formats using the bundled FFmpeg binary. It is designed for Roblox developers who record gameplay clips and want to post them to TikTok, YouTube Shorts, or other vertical-video platforms.

---

## How to Use

1. Click **Video Tools** in the sidebar.
2. Import a video:
   - Drag and drop a video file onto the window, or
   - Click the file picker button (supports `.mov`, `.mp4`, `.m4v`, `.qt`).
3. Choose a **format preset:**
   - **TikTok / Shorts** — portrait 9:16, 1080×1920.
4. (Optional) **Trim the video:**
   - Drag the start and end time sliders to select the segment.
   - Click any position on the timeline to preview that frame.
5. Click **Convert** — the app runs FFmpeg and shows a progress bar.
6. Click **Save** to export the resulting MP4 file.

---

## Help & Tips

- **Frame preview:** Click anywhere on the trim bar to see a still frame at that timestamp. Useful for setting precise edit points.
- **FFmpeg is bundled:** No need to install anything separately. The app ships its own FFmpeg binary inside the app bundle.
- **Long videos:** Trimming before conversion speeds up the process. The conversion is CPU-bound, so large videos may take a while.

---

## FAQ

### Can I convert to landscape formats?
The current preset is portrait (9:16). Additional presets may be added in future updates.

### Where does FFmpeg come from?
The app bundles a licensed FFmpeg binary. You can view license details in **Settings → Tools (Converters) → Licenses**.

### Does Video Tools upload to social media?
No. It only converts the video file locally. You upload the resulting MP4 to TikTok, YouTube, or other platforms yourself.
