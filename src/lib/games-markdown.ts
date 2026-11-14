import { gamesNewestFirst as games, gamesDescription } from "../data/games"

export const gamesMarkdown = () => `# Games by Dmytro Gladkyi

${gamesDescription}

Mobile and Steam games, newest to oldest by first release year. Unreleased games use their development year.

${games.map((game) => `## ${game.year} — ${game.title}

${game.period} · ${game.genre} · ${game.status}

${game.description}

![${game.imageAlt}](https://dmytrogladkyi.com${game.image})

Platforms: ${game.platforms.join(", ")}.

[Official game site](${game.website})${game.play ? ` · [Play in browser](${game.play})` : ""}${game.video || game.trailer ? ` · [Watch gameplay](${game.video || game.trailer})` : ""}`).join("\n\n")}
`
