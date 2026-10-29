import type { APIRoute } from "astro"
import { allNotes, fmtDate, imageOf, summary, tagIndex, visibleTags } from "../../lib/notes"
import { renderCard, type Card } from "../../lib/og"
import { SITE } from "../../lib/site"

export async function getStaticPaths() {
  const cards: { params: { slug: string }; props: Card }[] = []
  for (const n of await allNotes()) {
    const home = n.id === "index"
    cards.push({
      params: { slug: n.id },
      props: home
        ? { path: "~/whoami", title: SITE.author, kicker: "games · AI · developer tools", description: SITE.tagline + " AI-native games, Godot, Flutter & Unity, Omarchy tooling and sci-fi books.", tags: ["ai", "gamedev", "godot", "flutter"]}
        : {
            path: `~/${n.id}${n.data.isIndex ? "/" : ".md"}`,
            title: n.data.title,
            description: summary(n),
            kicker: [n.data.section.toLowerCase() || "home", n.data.date && !n.data.isIndex ? fmtDate(n.data.date) : ""].filter(Boolean).join(" / "),
            tags: visibleTags(n).map((t) => t.toLowerCase()),
            image: imageOf(n),
          },
    })
  }
  const tags = await tagIndex()
  cards.push({ params: { slug: "tags" }, props: { path: "~/tags/", title: "Tags", kicker: `${tags.length} tags`, description: "Every topic on MetaVault: games, AI, Flutter, Unity, Roblox tools and more.", tags: tags.slice(0, 4).map(([, v]) => v.label) } })
  for (const [k, v] of tags)
    cards.push({ params: { slug: `tags/${k}` }, props: { path: `~/tags/${k}/`, title: `#${v.label}`, kicker: `${v.notes.length} notes`, description: v.notes.slice(0, 3).map((n) => n.data.title).join(" · ") } })
  return cards
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await renderCard(props as Card), { headers: { "content-type": "image/png" } })
