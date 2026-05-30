# vikash-portfolio — Implementation Plan

## What this is

A GitHub repo that holds:
1. Vikash Sinha's resume (Typst source → PDF, auto-compiled via GitHub Actions)
2. A portfolio website (Astro, hosted on GitHub Pages)

## Current state (what's already done)

- `resume/Resume_Vikash_Sinha.typ` — complete, production-ready resume in modernpro-cv template (left sidebar for skills/about/education, right main column for experience)
- `resume/Resume_Vikash_Sinha.pdf` — compiled output
- `.github/workflows/compile-resume.yml` — GitHub Actions workflow that auto-compiles the PDF whenever the .typ file is pushed
- `site/` — empty, needs to be scaffolded

## Decisions already made

| Decision | Choice | Reason |
|---|---|---|
| Resume format | Typst (modernpro-cv template) | Plain text, git-friendly, produces clean PDF |
| Site framework | Astro | Static output, fast, GitHub Pages compatible, good for content-heavy portfolio |
| Hosting | GitHub Pages | Free, simple, no backend needed |
| Resume in repo | .typ source + compiled PDF both committed | PDF available as direct download link from site |

## What needs to be built

### Step 1 — Create GitHub remote repo
```bash
gh repo create vikash-portfolio --public --source=. --remote=origin --push
```

### Step 2 — Scaffold Astro site
```bash
cd site
npm create astro@latest . -- --template minimal --typescript strict --no-install
npm install
```

Then enable GitHub Pages in repo Settings → Pages → Source: GitHub Actions.

Add Astro's GitHub Pages adapter:
```bash
npm install @astrojs/sitemap
```

Add to `site/astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://vikash1a.github.io',   // update with actual GitHub username
  base: '/vikash-portfolio',
});
```

### Step 3 — Build the site pages

**File structure to create inside `site/src/`:**
```
site/src/
├── pages/
│   └── index.astro          # single-page portfolio
├── components/
│   ├── Header.astro         # name, title, nav links
│   ├── About.astro          # bio paragraph
│   ├── Experience.astro     # work history cards
│   ├── Skills.astro         # pill/tag layout
│   └── Contact.astro        # email + LinkedIn + resume download
└── styles/
    └── global.css           # minimal custom styles
```

**Content to populate from resume:**

Author: Vikash Sinha
Location: Bengaluru, Karnataka
Email: vikash1a2b3c@gmail.com
LinkedIn: linkedin.com/in/vikash-sinha-583124151
Title: Senior Software Engineer

Bio: Identity and payments engineer with 6+ years building high-scale backend systems across healthtech and fintech. Focused on auth, data migration, and platform reliability.

Experience:
- Blink Health — Senior Software Engineer (July 2025 – Present)
- Toast — Software Engineer 2 (Nov 2022 – July 2025)
- Bajaj Finance — Sr. Software Engineer (July 2020 – Oct 2022)
- Flow Edge — Intern (May 2019 – July 2019)

Skills: Kotlin, Java, TypeScript, C++, C#, DynamoDB, PostgreSQL, AWS (Pinpoint/EUS/SES/EventBridge), Pulsar, Camel, Okta, OAuth 2.0, SSO, RLS, New Relic, Datadog, Splunk, Sentry, CloudWatch, System Design, Design Patterns

Resume PDF path (for download button): `../resume/Resume_Vikash_Sinha.pdf`
When deployed to GitHub Pages, the PDF will be at: `https://<username>.github.io/vikash-portfolio/resume/Resume_Vikash_Sinha.pdf`

### Step 4 — GitHub Pages deploy workflow

Create `.github/workflows/deploy-site.yml`:
```yaml
name: Deploy Portfolio Site

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Copy resume PDF to site public folder
        run: cp resume/Resume_Vikash_Sinha.pdf site/public/
      - name: Install dependencies
        run: npm ci
        working-directory: site
      - name: Build
        run: npm run build
        working-directory: site
      - uses: actions/upload-pages-artifact@v3
        with:
          path: site/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Step 5 — Enable GitHub Pages

In the GitHub repo: Settings → Pages → Source: **GitHub Actions**

## File structure (final state)

```
vikash-portfolio/
├── CLAUDE.md
├── .gitignore
├── .github/
│   └── workflows/
│       ├── compile-resume.yml    # compiles .typ → PDF on push
│       └── deploy-site.yml       # builds + deploys Astro site
├── resume/
│   ├── Resume_Vikash_Sinha.typ   # edit this to update resume
│   └── Resume_Vikash_Sinha.pdf   # auto-compiled, do not edit manually
└── site/
    ├── astro.config.mjs
    ├── package.json
    └── src/
        ├── pages/index.astro
        ├── components/
        └── styles/
```

## Update workflow (once set up)

To update resume content:
1. Edit `resume/Resume_Vikash_Sinha.typ`
2. `git push`
3. GitHub Actions auto-compiles new PDF and commits it
4. Site re-deploys with new PDF available for download

## Notes

- The Typst modernpro-cv template used is `@preview/modernpro-cv:1.0.0`
- Font used: "PT Sans" (available on Ubuntu via GitHub Actions without extra install steps)
- Resume uses left sidebar (1/3) for skills/about/education, right column (2/3) for experience
- Color scheme is default modernpro-cv (black/dark gray — professional, ATS-safe)
