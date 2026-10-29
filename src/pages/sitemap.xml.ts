import { allNotes, noteUrl, tagIndex, tagSlug } from "../lib/notes"

export async function GET({ site }: { site: URL }) {
  const urls = [
    ...(await allNotes()).map((n) => noteUrl(n.id)),
    "/tags/",
    ...(await tagIndex()).map(([k]) => `/tags/${encodeURIComponent(k)}/`),
  ]
  const body = urls.map((u) => `<url><loc>${new URL(u, site).href}</loc></url>`).join("")
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  })
}
