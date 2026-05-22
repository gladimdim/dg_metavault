import { i18n } from "../i18n"
import { FullSlug, getFileExtension, joinSegments, pathToRoot, simplifySlug } from "../util/path"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources"
import { googleFontHref, googleFontSubsetHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { unescapeHTML } from "../util/escape"
import { CustomOgImagesEmitterName } from "../plugins/emitters/ogImage"

function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

function displaySegment(segment: string): string {
  return segment.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export default (() => {
  const Head: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
  }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.frontmatter?.socialDescription ??
      fileData.frontmatter?.description ??
      unescapeHTML(fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description)

    const { css, js, additionalHead } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/icon.png")

    // URL of current page
    const pageSlug = fileData.slug === "404" ? undefined : simplifySlug(fileData.slug!)
    const socialUrl =
      fileData.slug === "404" || pageSlug === undefined || pageSlug === "/"
        ? url.toString()
        : joinSegments(url.toString(), pageSlug)

    const usesCustomOgImage = ctx.cfg.plugins.emitters.some(
      (e) => e.name === CustomOgImagesEmitterName,
    )
    const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`
    const lang = String(fileData.frontmatter?.lang ?? cfg.locale?.split("-")[0] ?? "en")
    const author = String(fileData.frontmatter?.author ?? "Dmytro Gladkyi")
    const tags = fileData.frontmatter?.tags ?? []
    const breadcrumbSegments =
      pageSlug && pageSlug !== "/" ? pageSlug.split("/").filter((segment) => segment) : []
    const breadcrumbJsonLd =
      breadcrumbSegments.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: url.toString(),
              },
              ...breadcrumbSegments.map((segment, index) => {
                const isCurrent = index === breadcrumbSegments.length - 1
                const itemUrl = isCurrent
                  ? socialUrl
                  : joinSegments(url.toString(), ...breadcrumbSegments.slice(0, index + 1), "/")
                return {
                  "@type": "ListItem",
                  position: index + 2,
                  name: isCurrent ? title : displaySegment(segment),
                  item: itemUrl,
                }
              }),
            ],
          }
        : undefined
    const contentJsonLd =
      fileData.slug?.startsWith("Articles/") || fileData.slug?.startsWith("Micro/")
        ? {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            url: socialUrl,
            mainEntityOfPage: socialUrl,
            datePublished: fileData.dates?.published?.toISOString(),
            dateModified: fileData.dates?.modified?.toISOString(),
            inLanguage: lang,
            keywords: tags,
            author: {
              "@type": "Person",
              name: author,
            },
          }
        : fileData.slug === "GladRoTools/index"
          ? {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "GladRoTools",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "macOS",
              description,
              url: socialUrl,
              inLanguage: lang,
              author: {
                "@type": "Person",
                name: author,
              },
            }
          : undefined

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
            {cfg.theme.typography.title && (
              <link rel="stylesheet" href={googleFontSubsetHref(cfg.theme, cfg.pageTitle)} />
            )}
          </>
        )}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="og:site_name" content={cfg.pageTitle}></meta>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />

        {!usesCustomOgImage && (
          <>
            <meta property="og:image" content={ogImageDefaultPath} />
            <meta property="og:image:url" content={ogImageDefaultPath} />
            <meta name="twitter:image" content={ogImageDefaultPath} />
            <meta
              property="og:image:type"
              content={`image/${getFileExtension(ogImageDefaultPath) ?? "png"}`}
            />
          </>
        )}

        {cfg.baseUrl && (
          <>
            <meta property="twitter:domain" content={cfg.baseUrl}></meta>
            <meta property="og:url" content={socialUrl}></meta>
            <meta property="twitter:url" content={socialUrl}></meta>
            <link rel="canonical" href={socialUrl} />
          </>
        )}

        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        {contentJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(contentJsonLd) }}
          />
        )}
        {breadcrumbJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbJsonLd) }}
          />
        )}

        {css.map((resource) => CSSResourceToStyleElement(resource, true))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
        {additionalHead.map((resource) => {
          if (typeof resource === "function") {
            return resource(fileData)
          } else {
            return resource
          }
        })}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
