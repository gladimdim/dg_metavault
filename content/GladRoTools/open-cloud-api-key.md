---
title: "How to Obtain a Roblox Open Cloud API Key"
date: 2026-05-13
tags: ["gladrotools", "roblox", "setup"]
author: "Dmytro Gladkyi"
id: open-cloud-api-key
---

Several **GladRoTools** features require a Roblox Open Cloud API key to read asset metadata, download asset bytes, and upload optimized assets back to Roblox. This guide walks you through creating a key with the correct permissions.

## Step 1: Open the Credentials Page

Go to the [Creator Dashboard credentials page](https://create.roblox.com/dashboard/credentials) and sign in with your Roblox account.

## Step 2: Create a New API Key

Click **Create API Key** and give it a descriptive name (for example, *GladRoTools*).

## Step 3: Configure Access Permissions

Under **Access Permissions**, add each of the following scopes. All four are required for full functionality in GladRoTools.

| Permission | Scope | Operation | Why GladRoTools Needs It |
|---|---|---|---|
| **Asset Read** | `asset` | `read` | Reads asset metadata to check for missing or broken assets during validation. |
| **Asset Upload Write** | `asset` | `write` | Uploads optimized assets back to Roblox. Without this, you can inspect but not apply fixes. |
| **User Inventory Read** | `user.inventory-item` | `read` | Reads inventory items to verify asset ownership and availability. |
| **Legacy Asset Manage** | `legacy-asset` | `manage` | Allows modifying or updating older legacy assets when uploading replacements. |

## Step 4: Copy the Key Secret

Click **Save and Generate**. The key secret will be displayed **only once** — copy it immediately and store it securely. If you lose the secret, you must generate a new key.

## Step 5: Add the Key to GladRoTools

1. Open **Settings** in GladRoTools (**GladRoTools → Settings...** or **⌘,**).
2. Select the **Roblox Open Cloud** section.
3. Paste the key secret into the **API Key** field.
4. Click **Verify Key** to confirm the key is valid and has all required permissions.

The app will display which permissions are present and which are missing, so you can adjust the key in the Creator Dashboard if needed.

## Important Notes

- The API key secret is stored **locally on your device** and is transmitted only to Roblox's official API endpoints (`apis.roblox.com`).
- The developer does not have access to your API key at any time.
- You can revoke or regenerate your key at any time from the [Credentials page](https://create.roblox.com/dashboard/credentials).
- Features that only read data (asset browsing, model analysis) work without `asset:write` and `legacy-asset:manage`, but you will not be able to upload optimized or repaired assets.
