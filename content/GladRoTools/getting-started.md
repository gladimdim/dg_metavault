---
title: "Getting Started with GladRoTools"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
id: getting-started
---

**GladRoTools** is a native macOS companion app for Roblox Studio. It connects to Studio through a local TCP bridge and gives you deep visibility into every asset in your place. This guide walks you through setup.

---

## Step 1: Install the App

Download **GladRoTools** from the Mac App Store.

---

## Step 2: Install the Studio Plugin

1. Open GladRoTools.
2. Click the **Settings** button (gear icon) in the bottom-left corner of the sidebar.
3. Under **Roblox Studio Plugin**, click **Install / Update**.
   - The app copies its bundled plugin into Studio's `Plugins` folder.
   - The path is shown below the button — you can click **Open Plugins Folder** to verify.
1. The plugin version should match the app version. If it shows a mismatch, reinstall.

![[Roblox_Studio_Plugin_Settings.png|516]]

---

## Step 3: Start the Bridge Server

1. In Settings → **Bridge**, check the port number (default: `7801`).
2. The server starts automatically when the app launches.
3. Look at the toolbar badge:
   - **Red:** Bridge server is not running.
   - **Orange:** Server is running but no Studio plugin is connected.
   - **Green:** Plugin is connected and responding.
1. Make sure your firewall allows local TCP connections on the bridge port.
![[Bridge_Token_Settings.png|531]]

---

## Step 4: Connect from Studio

1. Open any place in Roblox Studio.
2. The GladRoTools plugin loads automatically (it is in the Plugins folder).
3. In Studio, open the GladRoTools plugin panel (Plugins menu → GladRoTools).
4. The plugin connects to the bridge on `localhost:7801`.
5. The toolbar badge in the Mac app should turn **green**.

![[Studio_Plugin_UI.png|305]]

---

## Step 5: Scan Your Place

1. Click any asset browser in the sidebar — **Decals**, **Sounds**, **Meshes**, or **Animations**.
2. The app prompts the plugin to scan the place for assets.
3. Once the scan completes, you can browse, filter, and inspect every asset.

---

## Next Steps

- [[connection-guide|Troubleshoot connection issues]]
- [[subscription|Learn about Premium features]]
- [[places|Browse your first place]]
- [[image-tools|Prepare images for Roblox]]
- [[model-analyzer|Scan a free model for security issues]]
