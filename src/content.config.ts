import { defineCollection } from "astro:content"
import { vault } from "./loaders/vault"
import { z } from "astro/zod"

const lenientDate = z.preprocess((v) => {
  if (v == null || v === "") return undefined
  const d = new Date(v as any)
  return isNaN(+d) ? undefined : d
}, z.date().optional())

const notes = defineCollection({
  loader: vault("./content"),
  schema: z
    .object({
      title: z.coerce.string().default("Untitled"),
      date: lenientDate,
      tags: z.preprocess(
        (v) => (Array.isArray(v) ? v : typeof v === "string" ? v.split(/[,\s]+/) : []),
        z.array(z.coerce.string()),
      ).default([]),
      description: z.coerce.string().optional(),
      thumbnail: z.string().optional(),
      cover: z.string().optional(),
      section: z.string().default(""),
      isIndex: z.boolean().default(false),
      author: z.string().optional(),
      language: z.string().optional(),
      type: z.string().optional(),
      translationOf: z.string().optional(),
    })
    .passthrough(),
})

export const collections = { notes }
