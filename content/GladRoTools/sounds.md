---
title: "Sounds — Audio Asset Browser"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
description: "Browse Roblox sound assets with metadata, in-app audio preview, waveform visualization, and reference counts."
thumbnail: "Images/Sounds_list_Compressed.jpg"
id: sounds
---

**Sounds** browses every `Sound.SoundId` reference in your place. Each sound card includes an **in-app audio player** so you can preview sounds without leaving the app. A waveform visualization gives you a quick visual read of each audio clip.

![[Sounds_list_Compressed.jpg]]

---

## How to Use

1. Click **Sounds** in the sidebar.
2. Browse the list — each card shows the audio waveform, asset name, ID, and reference count.
3. Click **Play** on any sound card to preview it in-app.
   - If the format is not natively playable, the app runs **FFmpeg** automatically to convert it for preview.
4. Filter and sort by name, byte size, creator, or instance count.
5. Click a sound to open the Detail sheet with full metadata and asset links.
6. Use **Upload** to push a new sound file from your Mac to Roblox.

![[Sound_Upload_Compressed.jpg|343]]

## Download Sounds from Assets

You can download sounds from the Sound details popup. Choose WAV or MP3:

![[Download_Sound_Compressed.jpg|333]]

---

## FAQ

### Why won't a sound play?

The asset might be inaccessible (private, moderated, or deleted). Check that the asset ID is valid and that your Open Cloud API key has the required permissions.

### Can I export sounds from my place?

The Detail sheet lets you open the asset URL in Safari, where you can download the original file through Roblox's website.

### Does GladRoTools show sound length/duration?

Yes. The Detail sheet displays the duration in seconds after the audio is downloaded and decoded.
