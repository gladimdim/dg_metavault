import { getCollection, type CollectionEntry } from "astro:content"
import { isUkrainian } from "./site"

export type Note = CollectionEntry<"notes">

export const HIDDEN_TAGS = new Set(["index", "topics"])

export const tagSlug = (t: string) =>
  t.toLowerCase().trim().replace(/#/g, "-sharp").replace(/\s+/g, "-")

export const noteUrl = (id: string) =>
  id === "index" ? "/" : "/" + id.split("/").map(encodeURIComponent).join("/") + "/"

export const fmtDate = (d?: Date) => (d ? d.toISOString().slice(0, 10) : "----------")

export const imageOf = (n: Note) => n.data.thumbnail || n.data.cover

export const plain = (md = "") =>
  md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\|.*\|$/gm, " ")
    .replace(/[#>*_`~|-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()

export const readingTime = (md = "") => Math.max(1, Math.round(plain(md).split(" ").length / 200))

const byDate = (a: Note, b: Note) => (+(b.data.date ?? 0)) - (+(a.data.date ?? 0))

let cache: Note[] | undefined
export async function allNotes() {
  cache ??= (await getCollection("notes")).sort(byDate)
  return cache
}

export async function bySection(section: string) {
  return (await allNotes()).filter((n) => n.data.section === section && !n.data.isIndex)
}

export const visibleTags = (n: Note) => n.data.tags.filter((t) => !HIDDEN_TAGS.has(t.toLowerCase()))

export async function tagIndex() {
  const map = new Map<string, { label: string; notes: Note[] }>()
  for (const n of await allNotes()) {
    if (n.data.isIndex) continue
    for (const t of visibleTags(n)) {
      const k = tagSlug(t)
      if (!map.has(k)) map.set(k, { label: t.toLowerCase(), notes: [] })
      map.get(k)!.notes.push(n)
    }
  }
  return [...map.entries()].sort((a, b) => b[1].notes.length - a[1].notes.length)
}

const dirOf = (id: string) => id.slice(0, id.lastIndexOf("/") + 1)
const twins = (t: Note, o: Note) => !!t.data.translationOf && o.id === dirOf(t.id) + t.data.translationOf

export async function related(n: Note, k = 3) {
  const mine = new Set(visibleTags(n).map(tagSlug))
  return (await allNotes())
    .filter((o) => o.id !== n.id && !o.data.isIndex && !twins(o, n) && !twins(n, o))
    .map((o) => ({
      o,
      s: visibleTags(o).filter((t) => mine.has(tagSlug(t))).length + (o.data.section === n.data.section ? 0.5 : 0),
    }))
    .filter((x) => x.s >= 1)
    .sort((a, b) => b.s - a.s || byDate(a.o, b.o))
    .slice(0, k)
    .map((x) => x.o)
}

export const SECTIONS = [
  { id: "", label: "home", href: "/" },
  { id: "Articles", label: "articles", href: "/Articles/" },
  { id: "Micro", label: "micro", href: "/Micro/" },
  { id: "Topics", label: "topics", href: "/Topics/" },
  { id: "Omarchy", label: "omarchy", href: "/Omarchy/" },
  { id: "tags", label: "tags", href: "/tags/" },
]

// meta description: frontmatter description, else the first ~155 chars of the text
export const summary = (n: Note) => {
  if (n.data.description) return n.data.description
  const t = plain(n.body).replace(/^\S.*?\s/, (m) => (m.trim() === n.data.title.trim() ? "" : m))
  return t.length > 158 ? t.slice(0, 155).replace(/\s+\S*$/, "") + "…" : t
}

export const ogUrl = (id: string) => `/og/${id === "index" ? "index" : id}.png`

// "en" | "uk": Micro posts carry a flag in `language`, everything else is detected from the text
export const langOf = (n: Note): "en" | "uk" => {
  const flag = String(n.data.language ?? "")
  if (flag.includes("🇺🇦") || flag === "uk") return "uk"
  if (flag.includes("🇺🇸") || flag.includes("🇬🇧") || flag === "en") return "en"
  return isUkrainian(n.data.title + " " + plain(n.body).slice(0, 600)) ? "uk" : "en"
}

// Translations: a note with `translationOf: <slug>` is the translated twin of a note in the same folder
export const isTranslation = (n: Note) => !!n.data.translationOf

export async function counterpart(n: Note): Promise<Note | undefined> {
  const all = await allNotes()
  return all.find((o) => twins(n, o) || twins(o, n))
}
