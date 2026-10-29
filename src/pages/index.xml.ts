import { allNotes, noteUrl } from "../lib/notes"

const esc = (s = "") => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

export async function GET({ site }: { site: URL }) {
  const items = (await allNotes())
    .filter((n) => !n.data.isIndex && n.data.date)
    .map((n) => {
      const link = new URL(noteUrl(n.id), site).href
      return `<item><title>${esc(n.data.title)}</title><link>${link}</link><guid>${link}</guid><pubDate>${n.data.date!.toUTCString()}</pubDate>${n.data.description ? `<description>${esc(n.data.description)}</description>` : ""}</item>`
    })
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Dmytro Gladkyi's MetaVault</title><link>${site.href}</link><description>Articles, essays and micro-posts by Dmytro Gladkyi</description>${items.join("")}</channel></rss>`
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } })
}
