# alessiofanelli.com

Personal blog at [alessiofanelli.com](https://alessiofanelli.com), built with [Astro](https://astro.build).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # writes to ./dist
npm run preview   # serves ./dist locally
```

## Writing a post

Add a `.md` or `.mdx` file to `src/content/posts/`. The filename becomes the URL slug (`src/content/posts/my-post.md` → `/posts/my-post`).

Frontmatter:

```yaml
---
title: Post title
date: 2026-04-22
description: Optional one-line description (used for meta + RSS)
---
```

For posts that embed math, use `$$ ... $$` for block equations and `$...$` for inline — `remark-math` + `rehype-katex` handle the rest.

## Images

- **Post images** go in `public/images/` and are referenced with `![](/images/foo.jpg)`. Served as-is.
- **Inspiration gallery images** go in `src/assets/inspiration/` and are imported into `src/pages/inspiration.astro`, where Astro generates responsive WebP variants automatically.

## Deployment

Pushes to `main` auto-deploy to Vercel (Astro is auto-detected, output goes to `dist/`). No `vercel.json` needed.
