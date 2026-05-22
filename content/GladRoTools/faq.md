---
title: "GladRoTools — Frequently Asked Questions"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
description: "Answers to common GladRoTools questions about Roblox Studio connection, privacy, subscriptions, and asset processing."
id: faq
---

## General

### What is GladRoTools?

GladRoTools is a native macOS app that connects to Roblox Studio and helps you browse, analyze, optimize, and validate the assets in your Roblox places. It is built with SwiftUI and communicates with Studio through a local TCP bridge.

### Is GladRoTools free?

The core tools — asset browsers, image tools, video tools, and the model analyzer — are free with full functionality. Four premium tools (Mesh Heatmap, Performance Audit, Release Checklist, Map Render) require a **GladRoTools Pro** subscription. See [[subscription|Subscription]] for details.

### What macOS version do I need?

macOS 14 (Sonoma) or later. The app uses SwiftUI and Apple frameworks that require Sonoma+.

### Does GladRoTools work on Windows?

No. GladRoTools is macOS-only. The Studio plugin runs on both platforms, but the Mac app is the interface.

---

## Data & Privacy

### Is my place data uploaded anywhere?

No. The app communicates locally with Roblox Studio over TCP. Asset metadata is cached on your Mac. The only external network calls are:

- Fetching asset thumbnails from Roblox CDN.
- Downloading asset bytes via Roblox Open Cloud (if you configure an API key).
- Verifying your App Store subscription receipt with Apple.

### Does GladRoTools collect analytics?

No third-party analytics are collected. The app writes diagnostic logs to your Mac for troubleshooting. These logs are stored locally and are not sent anywhere unless you manually share them.

### What permissions does the Open Cloud API key need?

For full functionality: Asset Read, Asset Write, User Inventory Item Read, and Legacy Asset Manage. You can verify your key's permissions in **Settings → Roblox Open Cloud → Verify Key**.

---

## Studio Plugin

### Does the plugin slow down Studio?

The plugin is lightweight. It polls the bridge for commands on a timer, does not hook into rendering, and only performs work when you trigger an action in the Mac app. Idle polling has negligible overhead.

### Can I use the plugin without the Mac app?

No. The plugin is a bridge client — it receives and executes commands from the Mac app. It has no UI of its own.

### What if Studio updates and breaks the plugin?

Open GladRoTools, go to **Settings → Roblox Studio Plugin**, and click **Install / Update**. This copies the latest bundled plugin into the current Studio Plugins folder. Roblox Studio updates can create new versioned plugin directories, so reinstall after major Studio updates.

---

## Troubleshooting

### The connection badge is red — what do I do?

See [[connection-guide|Connection Guide]] for step-by-step troubleshooting.

### Scans show zero assets for my place.

Make sure the Studio plugin is connected (green badge). Open an asset browser view (Decals, Sounds, etc.) to trigger a scan. If the place is newly opened in Studio, wait a moment for assets to load.

### I found a bug. How do I report it?

Check the logs: **Settings → View Logs → Open Current Log**. Attach the relevant log excerpt when reporting the issue.

---

## Premium

See [[subscription|Subscription]] for a full breakdown of pricing, free trial, and premium features.
