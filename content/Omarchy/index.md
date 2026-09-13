---
title: "Omarchy stuff"
date: 2026-09-13
tags: ["omarchy", "linux", "plugins", "themes"]
description: "Public Omarchy plugins and Loca Deserta themes by Dmytro Gladkyi — config sync, hardware info, AI usage, reminders, air-raid alerts, and desktop themes."
---

# Omarchy stuff

Plugins and themes I published for [Omarchy](https://omarchy.org/), an Arch Linux desktop with a Quickshell bar. Install a plugin with `omarchy plugin add <url> --enable`, or a theme with `omarchy theme install <url>`.

Browse them on GitHub under [@gladimdim](https://github.com/gladimdim?tab=repositories&q=omarchy) or in the [Omarchy plugin marketplace](https://plugins.omarchy.org/).

# Plugins

## [Config Sync](https://github.com/gladimdim/omarchy-config-sync-plugin)

`gladimdim.config-sync` — sync Hyprland shortcuts, themes, plugins, and other Omarchy config between machines through a private git repo.

<a class="omarchy-plugins-badge" href="https://plugins.omarchy.org/plugin.html?id=gladimdim.config-sync">
  <img class="omarchy-plugins-badge-black" src="omarchy-plugins-badge-black.svg" alt="Get it on Omarchy Plugins" height="52">
  <img class="omarchy-plugins-badge-white" src="omarchy-plugins-badge-white.svg" alt="" height="52">
</a>

![[config-sync-preview.png|480]]

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

`gladimdim.omarchy-ai-watch` — bar widget and local daemon that serve those AI quotas to a Wear OS watch.

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
