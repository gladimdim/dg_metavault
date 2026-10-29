import { allNotes, bySection, noteUrl, summary } from "../lib/notes"
import { SITE } from "../lib/site"

// https://llmstxt.org — a map of the site for AI assistants
export async function GET({ site }: { site: URL }) {
  const abs = (id: string) => new URL(noteUrl(id), site).href
  const md = (id: string) => new URL(`/${id}.md`, site).href
  const list = async (section: string) =>
    (await bySection(section)).map((n) => `- [${n.data.title}](${md(n.id)}): ${summary(n)}`).join("\n")
  const sections = (await allNotes()).filter((n) => n.data.isIndex && n.id !== "index")
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.author} is a Ukrainian game developer and software engineer. He writes about building games (the Sloboda city builder and Loca Deserta series, Flutter/Dart game systems, Unity performance, Godot), AI-driven games and AI agent tooling, developer experience, Roblox Studio tooling (GladRoTools for macOS), the Omarchy Linux desktop (SUPER DESKTOP, plugins, watch apps), and Ukrainian sci-fi worldbuilding (${"https://scifi.locadeserta.com"}). Articles are in English or Ukrainian. Every page is also available as Markdown by appending \`.md\` to its path; the full corpus is at ${new URL("/llms-full.txt", site).href}.

Profiles: ${SITE.sameAs.join(", ")}

## Sections

${sections.map((n) => `- [${n.data.title}](${abs(n.id)}): ${summary(n)}`).join("\n")}

## Projects

${await list("Omarchy") || `- [Omarchy tools](${abs("Omarchy")}): SUPER DESKTOP, plugins, watch apps and themes for Omarchy.`}
- [SUPER DESKTOP](https://superdesktop.dmytrogladkyi.com/): hidden overlay workspace for Hyprland/Omarchy with sticky notes and AI agent terminal cards (Claude Code, Codex), plus an Android app to drive agent sessions from a phone.
- [GladRoTools](${abs("GladRoTools")}): native macOS companion app for Roblox Studio — asset audits, media tools, map renders.

## Articles

${await list("Articles")}

## Topics

${await list("Topics")}

## Optional

${await list("GladRoTools")}
${await list("Micro")}
`
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } })
}
