# vikash-portfolio

Portfolio website + resume repo for Vikash Sinha.

## Repo structure

```
vikash-portfolio/
├── plan.md                           # implementation plan — read this first
├── resume/
│   ├── Resume_Vikash_Sinha.typ       # Typst source — edit this to update resume
│   └── Resume_Vikash_Sinha.pdf       # auto-compiled by CI, do not edit manually
├── site/                             # Astro portfolio site (to be built)
└── .github/workflows/
    ├── compile-resume.yml            # compiles .typ → PDF on push
    └── deploy-site.yml               # builds + deploys site to GitHub Pages (to be created)
```

## Key context

- Resume uses `@preview/modernpro-cv:1.0.0` Typst template
- Site framework: Astro, hosted on GitHub Pages
- See `plan.md` for the full step-by-step implementation plan
