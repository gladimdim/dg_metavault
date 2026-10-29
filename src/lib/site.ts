// Site identity used by meta tags, JSON-LD, llms.txt and social cards.
export const SITE = {
  name: "Dmytro Gladkyi's MetaVault",
  short: "MetaVault",
  author: "Dmytro Gladkyi",
  url: "https://dmytrogladkyi.com",
  twitter: "@DmytroGladkyi",
  tagline: "Games, AI and developer tools — built hands-on.",
  description:
    "Dmytro Gladkyi builds games and developer experience: AI-native game ideas, Godot, Flutter and Unity games like Sloboda and Loca Deserta, AI agent tooling for Omarchy, Roblox Studio tools, and sci-fi books.",
  knowsAbout: [
    "AI in games",
    "AI agents and developer tooling",
    "Game development",
    "Godot",
    "Flutter",
    "Dart",
    "Unity",
    "Roblox Studio",
    "Developer experience",
    "Linux desktop (Omarchy, Hyprland)",
    "Science fiction writing",
  ],
  sameAs: [
    "https://github.com/gladimdim",
    "https://x.com/DmytroGladkyi",
    "https://t.me/locadesertachumaki",
    "https://apps.apple.com/us/app/gladrotools/id6765629252",
    "https://play.google.com/store/apps/details?id=com.gladimdim.superdesktop",
    "https://scifi.locadeserta.com",
  ],
}

export const isUkrainian = (s = "") => (s.match(/[а-яіїєґ]/gi)?.length ?? 0) > s.length * 0.2
