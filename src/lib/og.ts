// 1200×630 social preview cards (X, Telegram, Facebook, LinkedIn…) in the site's
// tiling-WM style, rendered with satori → resvg at build time.
import fs from "node:fs"
import path from "node:path"
import satori from "satori"
import { Resvg } from "@resvg/resvg-js"

const font = (pkg: string, file: string) =>
  fs.readFileSync(path.resolve("node_modules/@fontsource", pkg, "files", file))

// fontsource ships per-script subsets; each gets its own family name and the
// stacks below fall back from latin to cyrillic glyph by glyph
const FONTS = ["latin", "cyrillic"].flatMap((s) => [
  { name: `Inter-${s}`, data: font("inter", `inter-${s}-500-normal.woff`), weight: 500 as const },
  { name: `Inter-${s}`, data: font("inter", `inter-${s}-800-normal.woff`), weight: 800 as const },
  { name: `Mono-${s}`, data: font("jetbrains-mono", `jetbrains-mono-${s}-500-normal.woff`), weight: 500 as const },
  { name: `Mono-${s}`, data: font("jetbrains-mono", `jetbrains-mono-${s}-700-normal.woff`), weight: 700 as const },
])
const SANS = "Inter-latin, Inter-cyrillic"
const MONO = "Mono-latin, Mono-cyrillic"

const C = { bg: "#07090d", panel: "#0e1118", line: "#2e3548", text: "#dfe3ee", dim: "#a3abc0", muted: "#6c7590", c1: "#33ccff", c2: "#00ff99", c3: "#ffd23f" }

type Node = { type: string; props: Record<string, unknown> }
const h = (type: string, style: Record<string, unknown>, ...children: unknown[]): Node => ({
  type,
  props: { style: { display: "flex", ...style }, children: children.flat().filter((c) => c !== null && c !== undefined && c !== false) },
})

// /media/... → data URI, only formats satori can decode and of sane size
function imageData(mediaUrl?: string) {
  if (!mediaUrl?.startsWith("/media/")) return
  let rel: string
  try {
    rel = decodeURIComponent(mediaUrl.slice("/media/".length))
  } catch {
    return
  }
  const file = path.resolve("content", rel)
  const ext = path.extname(file).toLowerCase()
  const mime = ext === ".png" ? "image/png" : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : undefined
  if (!mime || !fs.existsSync(file) || fs.statSync(file).size > 2_500_000) return
  return `data:${mime};base64,${fs.readFileSync(file).toString("base64")}`
}

export interface Card {
  path: string // e.g. ~/Articles/fog_of_war.md
  title: string
  description?: string
  kicker?: string // section / date line
  tags?: string[]
  image?: string // /media/... url
}

const clamp = (s = "", n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s)

export async function renderCard(card: Card) {
  const img = imageData(card.image)
  const title = clamp(card.title, img ? 70 : 90)
  const size = title.length > 50 ? (img ? 52 : 60) : img ? 64 : 76
  const tree = h(
    "div",
    { width: 1200, height: 630, background: C.bg, padding: 28, boxSizing: "border-box", fontFamily: SANS, color: C.text, backgroundImage: "radial-gradient(circle at 85% 0%, rgba(51,204,255,0.18), transparent 45%), radial-gradient(circle at 0% 100%, rgba(0,255,153,0.14), transparent 45%)" },
    h(
      "div",
      { flexDirection: "column", width: 1144, height: 574, flexShrink: 0, border: `2px solid ${C.c2}`, borderRadius: 14, background: C.panel, boxShadow: "0 0 40px rgba(0,255,153,0.25)", overflow: "hidden" },
      // title bar
      h(
        "div",
        { alignItems: "center", gap: 14, padding: "14px 24px", borderBottom: `1px solid ${C.line}`, fontFamily: MONO, fontSize: 22, color: C.dim },
        h("div", { background: C.c2, color: C.bg, fontWeight: 700, padding: "2px 10px", borderRadius: 4 }, "1"),
        h("div", { flexGrow: 1 }, clamp(card.path, 60)),
        h("div", { color: C.c2 }, "dmytrogladkyi.com"),
      ),
      h(
        "div",
        { flexGrow: 1, padding: "34px 44px 30px", gap: 36 },
        h(
          "div",
          { flexDirection: "column", flexGrow: 1, flexBasis: 0, justifyContent: "space-between" },
          h(
            "div",
            { flexDirection: "column" },
            card.kicker ? h("div", { fontFamily: MONO, fontSize: 24, color: C.c2, marginBottom: 18 }, "> " + card.kicker) : null,
            h("div", { fontSize: size, fontWeight: 800, lineHeight: 1.06, letterSpacing: -1.5 }, title),
            card.description ? h("div", { fontSize: 26, fontWeight: 500, color: C.dim, lineHeight: 1.4, marginTop: 22 }, clamp(card.description, img ? 120 : 170)) : null,
          ),
          h(
            "div",
            { gap: 10, flexWrap: "wrap", fontFamily: MONO, fontSize: 21 },
            (card.tags ?? []).slice(0, 4).map((t) => h("div", { color: C.c3, border: `1px solid ${C.c3}55`, borderRadius: 6, padding: "4px 12px" }, "#" + t)),
          ),
        ),
        img
          ? h("div", { width: 420, height: "100%", borderRadius: 10, overflow: "hidden", border: `1px solid ${C.line}` }, {
              type: "img",
              props: { src: img, width: 420, height: 440, style: { width: 420, height: "100%", objectFit: "cover" } },
            })
          : null,
      ),
      h("div", { height: 6, backgroundImage: `linear-gradient(90deg, ${C.c1}, ${C.c2})` }),
    ),
  )
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts: FONTS })
  return new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng()
}
