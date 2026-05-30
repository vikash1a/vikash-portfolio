# vikash-portfolio

Portfolio website and resume for Vikash Sinha — hosted at [vikash1a.github.io/vikash-portfolio](https://vikash1a.github.io/vikash-portfolio).

## What's here

| Path | Description |
|---|---|
| `resume/Resume_Vikash_Sinha.pdf` | Latest compiled resume (auto-updated by CI) |
| `resume/formats/` | Typst source files for each resume layout |
| `site/` | Astro portfolio site |
| `.github/workflows/compile-resume.yml` | Compiles `.typ` → PDF on every push |
| `.github/workflows/deploy-site.yml` | Builds and deploys site to GitHub Pages |

## Updating the resume

1. Edit the `.typ` source in `resume/formats/`
2. `git push`
3. GitHub Actions auto-compiles the PDF and commits it back

## Running the site locally

```bash
cd site
npm install
npm run dev
```

Requires Node 20.3+.

## Tech

- Resume: [Typst](https://typst.app) with the `modernpro-cv` template
- Site: [Astro 4](https://astro.build), static output
- Hosting: GitHub Pages
