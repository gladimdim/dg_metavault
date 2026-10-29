import { allNotes, noteUrl, fmtDate, summary, visibleTags } from "../lib/notes"
import { SITE } from "../lib/site"

// every note as Markdown in one file, for AI assistants
export async function GET({ site }: { site: URL }) {
  const notes = (await allNotes()).filter((n) => !n.data.isIndex || n.id === "index")
  const parts = notes.map((n) =>
    [
      `# ${n.data.title}`,
      "",
      `URL: ${new URL(noteUrl(n.id), site).href}`,
      n.data.date ? `Date: ${fmtDate(n.data.date)}` : "",
      visibleTags(n).length ? `Tags: ${visibleTags(n).join(", ")}` : "",
      `Summary: ${summary(n)}`,
      "",
      (n.body ?? "").replace(/\]\(\//g, `](${site.origin}/`).trim(),
    ]
      .filter((l, i) => l !== "" || i === 1 || i === 6)
      .join("\n"),
  )
  return new Response(`# ${SITE.name}\n\n> ${SITE.description}\n\n---\n\n${parts.join("\n\n---\n\n")}\n`, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  })
}
