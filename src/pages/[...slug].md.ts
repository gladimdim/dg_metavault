import type { APIRoute } from "astro"
import { allNotes, noteUrl, fmtDate, summary, visibleTags, type Note } from "../lib/notes"

// Markdown twin of every page (/Articles/foo.md), linked from llms.txt
export async function getStaticPaths() {
  return (await allNotes()).map((n) => ({ params: { slug: n.id }, props: { note: n } }))
}

export const GET: APIRoute = ({ props, site }) => {
  const n = (props as { note: Note }).note
  const fm = [
    "---",
    `title: ${JSON.stringify(n.data.title)}`,
    `url: ${new URL(noteUrl(n.id), site).href}`,
    n.data.date ? `date: ${fmtDate(n.data.date)}` : "",
    `author: Dmytro Gladkyi`,
    visibleTags(n).length ? `tags: ${JSON.stringify(visibleTags(n))}` : "",
    `description: ${JSON.stringify(summary(n))}`,
    "---",
  ].filter(Boolean)
  const body = (n.body ?? "").replace(/\]\(\//g, `](${site!.origin}/`)
  return new Response(fm.join("\n") + "\n\n" + body, { headers: { "content-type": "text/markdown; charset=utf-8" } })
}
