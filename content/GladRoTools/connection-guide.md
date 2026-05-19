---
title: "Connection Guide — Bridge Troubleshooting"
date: 2026-05-11
tags: ["gladrotools", "roblox", "macos"]
author: "Dmytro Gladkyi"
id: connection-guide
---

The GladRoTools bridge is a local TCP server that allows the Mac app and the Roblox Studio plugin to communicate. If the connection is not working, this guide will help you fix it.

---

## Understanding the Connection Badge

The badge in the GladRoTools toolbar shows the current state:

| Badge | Meaning |
|-------|---------|
| **Red** | Bridge server is not running. Click it to restart, or check Settings → Bridge. |
| **Orange** | Server is running but no Studio plugin has connected. Open Studio and make sure the plugin is loaded. |
| **Green** | Connected. The plugin is polling and responding to commands. |

---

## Common Issues

### Studio plugin does not appear

1. Go to **Settings → Roblox Studio Plugin** and click **Install / Update**.
2. Check that the path shown matches your active Studio version. Roblox Studio updates may create a new versioned Plugins folder.
3. Click **Open Plugins Folder** and verify `GladRoTools.server.lua` or the plugin file is present.
4. Restart Roblox Studio.

### Plugin loads but badge stays orange

1. In Studio, open the GladRoTools plugin panel (Plugins menu → GladRoTools).
2. Check that the plugin shows "Connecting to localhost:7801."
3. Verify the port matches: the app default is `7801`. If you changed it in Settings, the plugin must be updated to match.
4. Mac firewall may be blocking the connection. Go to **System Settings → Network → Firewall → Options** and ensure GladRoTools is allowed to accept incoming connections.

### Bridge server won't start

1. Port `7801` may be in use by another application. In Terminal, run:
   ```
   lsof -i :7801
   ```
2. If another process is using it, either stop that process or change GladRoTools to a different port in **Settings → Bridge**.

### Connection works but scans time out

1. Large places take longer to scan. Wait for the progress indicator.
2. If scans consistently fail, check the logs in **Settings → View Logs → Open Current Log**. Look for error messages around the scan command.
3. Restart both Roblox Studio and GladRoTools.

---

## Manual Bridge Token

The bridge uses a random token for basic authentication between the app and plugin. If you need to inspect or copy it, go to **Settings → Bridge → Bridge Token** and click **Copy**. The plugin uses this token automatically when installed from the app.

---

## Still Stuck?

Check the logs: **Settings → View Logs → Open Current Log**. The log file contains detailed diagnostic output. If you need to report a bug, include the relevant log excerpt.
