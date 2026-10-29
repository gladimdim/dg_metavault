import { allNotes, noteUrl, plain, fmtDate, visibleTags } from "../lib/notes"

export async function GET() {
  const items = (await allNotes()).map((n) => ({
    t: n.data.title,
    u: noteUrl(n.id),
    s: n.data.section || "home",
    d: n.data.date ? fmtDate(n.data.date) : "",
    g: visibleTags(n).map((t) => t.toLowerCase()),
    x: (n.data.description ? n.data.description + " " : "") + plain(n.body).slice(0, 1500),
  }))
  return new Response(JSON.stringify(items), { headers: { "content-type": "application/json" } })
}
