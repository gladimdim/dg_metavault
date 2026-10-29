import { defineConfig } from "astro/config"
import { media } from "./src/integrations/media.ts"

export default defineConfig({
  site: "https://dmytrogladkyi.com",
  trailingSlash: "ignore",
  scopedStyleStrategy: "class",
  devToolbar: { enabled: false },
  integrations: [media("./content")],
  markdown: {
    shikiConfig: { themes: { light: "github-light", dark: "tokyo-night" } },
  },
})
