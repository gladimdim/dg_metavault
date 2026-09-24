---
title: "Omarchy stuff"
date: 2026-09-24
tags: ["omarchy", "linux", "desktop", "plugins", "themes", "wearos"]
description: "Everything I build for Omarchy: SUPER DESKTOP, the AI Usage Wear OS app and watch faces, plugins for config sync, hardware info, AI quotas, reminders and air-raid alerts, and the Loca Deserta themes."
---

# Omarchy stuff

Tools, plugins, watch apps and themes I published for [Omarchy](https://omarchy.org/), an Arch Linux desktop with a Quickshell bar. Install a plugin with `omarchy plugin add <url> --enable`, or a theme with `omarchy theme install <url>`.

Browse them on GitHub under [@gladimdim](https://github.com/gladimdim?tab=repositories&q=omarchy) or in the [Omarchy plugin marketplace](https://plugins.omarchy.org/).

# SUPER DESKTOP

[SUPER DESKTOP](https://superdesktop.dmytrogladkyi.com/) is a hidden overlay workspace for Hyprland / Omarchy: press `SUPER + SHIFT + Q` and sticky notes and mini AI-terminal cards slide in from the screen edges, press it again and the desktop is clean while every session keeps running in background tmux. The notes are draggable and autosave, follow the active Omarchy theme and update the moment you switch themes; each terminal card is a real Claude Code, Codex, Reasonix or shell session with iconify, edge resize, stacking and a dotted ghost outline when a card is covered, an `Alt`-hold picker for raising a terminal by digit, referenced-file previews (images, GIFs, PDFs, Markdown, code), a pointer-only hot corner, an optional encrypted phone bridge, and PC-to-PC workspace sharing.

![[super-desktop-overlay.webp]] *A live Omarchy desktop with the overlay open: sticky notes, three AI harness cards and the SUPER DESKTOP control bar.*

```bash
git clone https://github.com/gladimdim/super-desktop.git ~/GitHub/super-desktop
cd ~/GitHub/super-desktop && ./install.sh
```

Feature tour and screenshots: [superdesktop.dmytrogladkyi.com](https://superdesktop.dmytrogladkyi.com/) · Source: [gladimdim/super-desktop](https://github.com/gladimdim/super-desktop)

# Plugins

## [Config Sync](https://github.com/gladimdim/omarchy-config-sync-plugin)

`gladimdim.config-sync` — sync Hyprland shortcuts, themes, plugins, and other Omarchy config between machines through a private git repo.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.config-sync">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[config-sync-preview.png|480]] *Changes: what this machine has that the repo does not.*

<div class="omarchy-shots">
  <img src="config-sync-overview.png" alt="Config Sync Overview tab: shortcuts, plugins, incoming and outgoing counts, remote repo, branch and last apply/publish times" width="290">
  <img src="config-sync-configs.png" alt="Config Sync Configs tab: shortcuts, theme, plugins, displays, Hyprland configs and shell, grouped by category" width="290">
</div>

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-config-sync-plugin --enable --yes
```

## [Hardware Info](https://github.com/gladimdim/omarchy-hardware-info-plugin)

`gladimdim.hardware.info` — status-bar hardware inspector: CPU, RAM, storage, GPU, thermals, and a JSON export.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.hardware.info">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[hardware-info-preview.png|480]]

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-hardware-info-plugin --enable
```

## [AI Usage Bar](https://github.com/gladimdim/omarchy-ai-usage-bar)

`gladimdim.ai-limits` — ASCII progress bars in the dock for Claude Code, Grok, Codex, Antigravity, and other local AI quotas.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.ai-limits">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[ai-usage-bar-preview.png|480]]

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-ai-usage-bar.git --enable
```

## [AI Watch Bridge](https://github.com/gladimdim/omarchy-ai-companion)

`gladimdim.omarchy-ai-watch` — bar widget and local daemon that serve those AI quotas to a Wear OS watch. The widget's **Setup** tab starts the daemon, advertises it over mDNS (`_omarchy-ai._tcp`) and opens the firewall; the watch finds the laptop by subnet sweep on TCP 8765 and asks for approval, and you pick which limit each of the watch face's four slots tracks. The wrist side is **Omarchy AI Usage — watch apps**, further down this page.

<img src="ai-watch-dock.png" alt="The Omarchy AI Watch widget in the bar, with a sync badge" width="360">

<div class="omarchy-shots">
  <img src="ai-watch-slots.png" alt="LLM Slots tab: four watch slots pointed at discovered limits, with Claude Code, Grok and Antigravity quotas listed" width="300">
  <img src="ai-watch-pairing.png" alt="Pairing tab: the linked watch with battery and last sync, an Add another watch button, and a PIN fallback" width="300">
</div>

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-ai-companion.git --enable
```

## [Today Reminders](https://github.com/gladimdim/omarchy-today-reminders)

`gladimdim.today-reminders` — set a reminder for later today from the center bar; it notifies once and does not roll into tomorrow.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.today-reminders">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[today-reminders-preview.png|480]]

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-today-reminders.git --enable --yes
```

## [Air Raid Alert Ukraine](https://github.com/gladimdim/omarchy-air-raid-alert-ukraine-plugin)

`gladimdim.air-raid-alert` — live повітряна тривога status in the bar, oblast picker, desktop notifications, and a siren.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.air-raid-alert">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[air-raid-alert-preview.png|480]]

```bash
omarchy plugin add https://github.com/gladimdim/omarchy-air-raid-alert-ukraine-plugin.git --enable
```

# Omarchy AI Usage — watch apps

The quotas the AI Usage Bar tracks, moved from the dock to your wrist: a Wear OS companion app with its own watch face, both live on Google Play and both fed by the **AI Watch Bridge** plugin on the laptop — no account, no cloud, the numbers go straight from your machine to the watch over the local network. Below them are two stand-alone Omarchy watch faces for Galaxy Watch and Garmin that need nothing but the watch itself.

## [Omarchy AI Usage](https://play.google.com/store/apps/details?id=com.gladimdim.omarchy.ai.watch) — Wear OS app

`com.gladimdim.omarchy.ai.watch` — the four gauges, today's tokens and sessions, and an honest account of whether any of it is current. A gauge configurator points any side of the dial at any limit the laptop has discovered; the app finds the laptop by sweeping the local subnet and asks it to approve; quota alerts buzz when a tracked limit rolls over to a new window or hits 100%; background sync runs every 5 minutes over Wi-Fi. It also publishes five complication data sources (`Slot1Top`, `Slot2Right`, `Slot3Bottom`, `Slot4Left` and `Smart`, which follows whichever quota is closest to running out), so the numbers work on any watch face, not just this one. Wear OS 3+.

<div class="omarchy-shots">
  <img src="ai-usage-wearos-dashboard.png" alt="Omarchy AI Usage dashboard: 9.9M tokens and 5 sessions today, with Codex weekly at 31% and Grok weekly at 33%" width="300">
  <img src="ai-usage-wearos-gauges.png" alt="Configure 4 gauges screen: tap a side of the dial to choose which limit it tracks" width="300">
</div>

## [Omarchy AI Usage Watchface](https://play.google.com/store/apps/details?id=com.gladimdim.omarchy.ai.watch.watchface) — Wear OS

`com.gladimdim.omarchy.ai.watch.watchface` — Watch Face Format v2: four arcs, one per quota, each labelled with the limit's name and percentage around a pixel-font clock, date and the Omarchy arch. The arcs name the app's complication services directly, so they populate the moment the face is selected; background and logo colour are pickable, and always-on falls back to true black. Wear OS 5+.

<div class="omarchy-shots">
  <img src="ai-usage-watchface-default.png" alt="Omarchy AI Usage watch face: Codex weekly, Grok weekly, Claude weekly and today's tokens as four arcs around a pixel clock" width="200">
  <img src="ai-usage-watchface-orange.png" alt="The same watch face with the orange theme and battery on the dial" width="200">
  <img src="ai-usage-watchface-ambient.png" alt="Always-on mode: dimmed Omarchy mark, wordmark and clock on a true black background" width="200">
</div>

Both listings ship together but install separately: a Watch Face Format face has no code, so the face draws the arcs and the app supplies the numbers. [Source](https://github.com/gladimdim/ai-omarchy-wearos) · [Bridge and setup guide](https://gladimdim.github.io/omarchy-ai-companion/)

## [Omarchy Galaxy Watch face](https://gladimdim.github.io/galaxy-watch-omarchy/) — Galaxy Watch

A second Watch Face Format v2 face, this one for Samsung Galaxy Watch 4 and newer (Watch 5, 6, 7 and Watch Ultra): the Omarchy arch in official green and the pixel OMARCHY wordmark in JetBrains Mono, with four complication arcs that can show battery, steps, heart rate and weather or the next event — and act as one-tap launchers. Always-on drops to `#000000` with dimmed branding, and every slot is reassignable to any installed app. Sideload it over Wi-Fi ADB with the repo's `./deploy.sh`. [Source](https://github.com/gladimdim/galaxy-watch-omarchy)

<div class="omarchy-shots">
  <img src="ai-usage-galaxy-watch.png" alt="The Omarchy watch face on a Galaxy Watch: battery, steps, heart rate and a quick app arc around the OMARCHY wordmark" width="200">
  <img src="ai-usage-galaxy-watch-ambient.png" alt="The Galaxy Watch face in always-on mode: dimmed mark, wordmark and clock" width="200">
  <img src="ai-usage-galaxy-watch-on-device.png" alt="The Omarchy watch face rendered on a physical Galaxy Watch" width="200">
</div>

## [Omarchy: a Garmin watch face](https://github.com/gladimdim/omarchy-watchface) — Garmin

The Garmin take on the same look: weekday and day number, the square Omarchy mark, the OMARCHY wordmark and a clock in matching block glyphs. No permissions, no network, no sensors — it is built first for the Instinct's two-colour sunlight display, so it stays legible in direct sun, and on AMOLED watches the always-on mode drifts the mark and time to prevent burn-in. Sixty products, eighty device builds, from the one-bit Instinct to the round and rectangular AMOLED fenix, Venu and Forerunner families. Build and deploy for your own device with `./build.sh <product-id>`. [Source](https://github.com/gladimdim/omarchy-watchface)

<div class="omarchy-shots">
  <img src="garmin-watchface-devices.png" alt="The Omarchy Garmin face on Instinct 2X Solar, fenix 9 Pro, Venu X1 and a red Garmin watch" width="620">
  <img src="garmin-watchface-fenix9.png" alt="The Omarchy face on a fenix 9 Pro: FRI 4, the Omarchy mark and wordmark, and a block-digit clock" width="240">
</div>

# Themes

## [Loca Deserta Dark](https://github.com/gladimdim/omarchy-loca-deserta-dark-theme)

Far-future Loca Deserta palette: white hulls on void charcoal, plasma-blue accents, DARYA-class warp-carrier wallpapers.

![[loca-deserta-dark-preview.png|480]]

```bash
omarchy theme install https://github.com/gladimdim/omarchy-loca-deserta-dark-theme.git
omarchy theme set "Loca Deserta Dark"
```

## [Loca Deserta Light](https://github.com/gladimdim/omarchy-loca-deserta-light-theme)

The daylight companion: engineering drawings of the DARYA-class carrier on warm paper, with the same plasma, brass, and laser hues.

![[loca-deserta-light-preview.png|480]]

```bash
omarchy theme install https://github.com/gladimdim/omarchy-loca-deserta-light-theme.git
omarchy theme set "Loca Deserta Light"
```
