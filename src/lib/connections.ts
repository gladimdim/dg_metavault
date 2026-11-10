import { allNotes, noteUrl, type Note } from "./notes"

// Use rendered links so wiki links, Markdown links and HTML anchors share the
// vault loader’s resolution. Code samples and image sources are not references.
export async function connections(note: Note) {
  const notes = await allNotes()
  const normalize = (href: string) => {
    try { return decodeURIComponent(new URL(href, "https://vault.local").pathname).replace(/\/$/, "") }
    catch { return "" }
  }
  const targets = (n: Note) => new Set(
    [...(n.rendered?.html ?? "").matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)]
      .map((match) => match[1])
      .filter((href) => href.startsWith("/") && !href.startsWith("//"))
      .map(normalize),
  )
  const mine = targets(note)
  const current = normalize(noteUrl(note.id))
  return {
    outgoing: notes.filter((n) => n.id !== note.id && mine.has(normalize(noteUrl(n.id)))),
    incoming: notes.filter((n) => n.id !== note.id && targets(n).has(current)),
  }
}
