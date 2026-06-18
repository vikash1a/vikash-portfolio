# vikash-portfolio

Portfolio website + resume repo for Vikash Sinha.

## Repo structure

```
vikash-portfolio/
├── plan.md                           # implementation plan — read this first
├── resume/
│   ├── Resume_Vikash_Sinha.pdf       # primary download (modernpro-cv, auto-promoted by CI)
│   └── formats/
│       ├── basic-resume/             # clean single-column (primary format)
│       ├── modernpro-cv/             # left sidebar layout
│       └── custom/                   # custom Typst, no package dependency
├── site/                             # React + Vite portfolio site
└── .github/workflows/
    ├── compile-resume.yml            # compiles all format .typ files on push
    └── deploy-site.yml               # builds + deploys site to GitHub Pages (to be created)
```

## Key context

- Primary resume format uses `@preview/modernpro-cv:1.0.0` Typst template
- Site framework: React + Vite, hosted on GitHub Pages
- See `plan.md` for the full step-by-step implementation plan
