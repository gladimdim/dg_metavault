import { allNotes, noteUrl, plain, fmtDate, visibleTags } from "../lib/notes"
import { games, gamesDescription } from "../data/games"

export async function GET() {
  const items = (await allNotes()).map((n) => ({
    t: n.data.title,
    u: noteUrl(n.id),
    s: n.data.section || "home",
    d: n.data.date ? fmtDate(n.data.date) : "",
    g: visibleTags(n).map((t) => t.toLowerCase()),
    x: (n.data.description ? n.data.description + " " : "") + plain(n.body).slice(0, 1500),
  }))
  items.push({ t: "Games by Dmytro Gladkyi", u: "/games/", s: "games", d: "", g: ["games", "gamedev"], x: gamesDescription })
  items.push(...games.map((game) => ({ t: game.title, u: `/games/#${game.id}`, s: "games", d: String(game.year), g: ["games", game.genre.toLowerCase()], x: `${game.description} ${game.platforms.join(" ")}` })))
  return new Response(JSON.stringify(items), { headers: { "content-type": "application/json" } })
}
