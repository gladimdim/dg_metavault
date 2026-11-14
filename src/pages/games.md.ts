import { gamesMarkdown } from "../lib/games-markdown"

export function GET() {
  return new Response(gamesMarkdown(), { headers: { "content-type": "text/markdown; charset=utf-8" } })
}
