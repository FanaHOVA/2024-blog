# Agent notes for alessiofanelli.com

Personal blog. **Performance is a feature.** The site was migrated from Next.js + Nextra to Astro in 2026 specifically because the old stack shipped ~444 KB of critical JS and pushed INP to 1,008 ms. The current build ships **zero client JS on text pages** and scores 100 on Lighthouse mobile. Don't regress that.

## Stack

- Astro 5 (static output)
- MDX via `@astrojs/mdx`
- RSS via `@astrojs/rss`
- Sitemap via `@astrojs/sitemap`
- `remark-math` + `rehype-katex` for LaTeX (only the handful of posts that need it)
- `sharp` for image optimization (runs at build time)

No React. No Next. No Nextra. No Tailwind. No UI library.

## Directory layout

```
src/
  content/posts/        # 27 .md / .mdx posts — authored content
  content.config.ts     # posts collection schema (title, date, description, tag?, author?)
  pages/
    index.astro         # homepage: reverse-chronological post list
    about.astro         # about page
    inspiration.astro   # image gallery
    posts/[...slug].astro  # dynamic post route (one file serves all posts)
    feed.xml.ts         # RSS endpoint
  layouts/
    Base.astro          # <html> shell, meta tags, fonts, dark-mode init IIFE
    Post.astro          # wraps Base; adds title + date + prose styles
  components/
    ThemeToggle.astro   # vanilla dark/light toggle (10 lines of JS)
  styles/global.css     # all site styles, uses CSS custom properties for theming
  assets/inspiration/   # images that should be optimized by Astro (responsive WebP)
public/
  images/               # images referenced from posts via /images/...
  fonts/                # self-hosted Inter woff2 (roman + italic)
  favicon.ico
astro.config.mjs
tsconfig.json
package.json
```

## Rules for changes

1. **No client JavaScript unless you can justify it.** If you're tempted to add a framework, interactive component, or analytics SDK, ask first. The current two `<script is:inline>` blocks (theme init in `Base.astro`, toggle in `ThemeToggle.astro`) are deliberately the only JS that runs in the browser. A React island would single-handedly undo the performance win.
2. **No new dependencies unless required.** Runtime deps are `astro`, `@astrojs/mdx`, `@astrojs/rss`, `@astrojs/sitemap`, `rehype-katex`, `remark-math`, `sharp`. That's the whole list. Before adding anything else, see if Astro already does it.
3. **No Tailwind, no CSS-in-JS.** `src/styles/global.css` is ~200 lines of plain CSS with CSS custom properties for theming. Add styles there, not via a framework.
4. **Preserve URLs.** `/`, `/about/`, `/inspiration/`, `/posts/<slug>/`, `/feed.xml` all must keep working — they're linked externally and in RSS readers.
5. **Dark mode is `data-theme` on `<html>`.** Do not replace with `class="dark"` or any other scheme — the inline IIFE in `Base.astro` runs before paint specifically to prevent a flash, and the CSS selectors in `global.css` depend on this attribute.

## Common tasks

**Add a post:** create `src/content/posts/<slug>.md` with frontmatter `{ title, date, description? }`. Done. No RSS regeneration needed, no homepage edit.

**Add a post with math:** use `.mdx` extension and write `$$ ... $$` blocks. KaTeX CSS is loaded via CDN from the post route (`src/pages/posts/[...slug].astro`) and only applies where KaTeX spans are rendered.

**Add a post image:** drop it in `public/images/<name>.jpg`, reference as `![alt](/images/<name>.jpg)`. For large images that deserve optimization (hero shots, gallery pieces), put them in `src/assets/` instead and import them into an `.astro` file via `import img from '.../foo.jpg'` + `<Image src={img} ... />` from `astro:assets`.

**Change site layout / nav:** edit `src/layouts/Base.astro`.

**Change post layout:** edit `src/layouts/Post.astro` (wraps Base, adds title/date/prose).

**Change styling:** edit `src/styles/global.css`. CSS variables live in `:root` (light) and `:root[data-theme='dark']` (dark).

## Verification before committing

```bash
npm run build        # must complete without errors; expect ~30 pages
npm run preview      # open http://localhost:4321
```

Spot-check:
- `/` lists all posts in reverse-chronological order
- a sample post renders with correct title/date/prose
- `/posts/maximum-enterprise-utilization/` renders math equations (has KaTeX spans)
- `/inspiration/` loads with responsive images (check DevTools: images served as `.webp` with `srcset`)
- `/feed.xml` returns well-formed RSS
- DevTools Network tab on `/`: no `.js` files from `_astro/` should load. If they do, something added client JS — investigate before merging.
- Dark mode toggle flips theme without flashing the opposite theme on reload.

If you change anything that might touch Core Web Vitals, run:

```bash
npm install -g lighthouse    # one-time
lighthouse http://localhost:4321/ --only-categories=performance --preset=perf --form-factor=mobile --chrome-flags="--headless" --quiet
```

Target: Performance ≥95 on every route. The current baseline is 100 / 100 / 100 / 99 (home, math post, recent post, inspiration).

## Deployment

Vercel auto-detects Astro. Build command `npm run build`, output directory `dist/`. No `vercel.json` needed. Main branch → production, PR branches → preview URLs.

Speed Insights RUM is what the site uses for real-user perf monitoring. Check the Vercel dashboard after deploying significant changes — RES on `/` should stay ≥90.

## History

- **Originally (pre-2026)**: Next.js 13.5.6 + Nextra 2.13. Shipped large JS bundles, INP=1,008ms, RES=61.
- **2026-04 migration to Astro**: full rewrite on this same repo. See the migration commit for the full diff if context is needed.
