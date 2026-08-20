# Yanghui Song Academic Homepage

A lightweight bilingual academic homepage for **Remote-Sensing Image Intelligence**, designed for GitHub Pages.

## Design principles

- Academic-first: follows familiar researcher-homepage structure rather than a product landing page.
- High readability: restrained typography, generous whitespace, clear section hierarchy.
- Light geospatial identity: subtle coordinate/grid details instead of decorative animation.
- Easy maintenance: routine content updates live in one file, `assets/site-data.js`.
- English-first: first-time visitors see English; a manual language choice is remembered.
- Chinese as a first-class interface: Chinese copy is maintained independently rather than mechanically translated at runtime.
- Zero build step: no npm, bundler, framework, external web font, or database is required.

## Page structure

1. Hero / academic identity
2. About
3. Education
4. Honors & Awards
5. Research directions
6. Selected publications
7. Open-source projects
8. Contact

## Routine maintenance

For normal updates, edit only:

```text
assets/site-data.js
```

It contains:

```text
settings        default language and site URL
profile         name, affiliation, email, GitHub, Scholar
hero            first-screen introduction
about           bilingual biography and quick facts
education       education timeline
honors          selected honors, dates, issuers, official links
research        research directions
publications    publication entries, links, figure, BibTeX
projects        highlighted repositories
contact         contact copy
```

See `MAINTENANCE.md` for copy-and-paste templates.

## Local preview

From the repository root:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## GitHub Pages deployment

The repository includes `.github/workflows/deploy-pages.yml`.

On GitHub:

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

Push to `main`; the workflow publishes the static site automatically.

## Files

```text
.
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── app.js
│   ├── site-data.js        # routine content updates
│   ├── styles.css
│   ├── profile-photo.webp
│   ├── profile-photo-small.webp
│   ├── paper-proc-sam3.png
│   ├── paper-proc-sam3.webp
│   ├── favicon.svg
│   └── og-cover.svg
├── index.html
├── MAINTENANCE.md
├── CHANGELOG.md
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## License

Site code is provided under the MIT License. Publication content, figures, photographs, and author information retain their respective rights.
