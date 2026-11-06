# Yanghui Song — Academic Homepage

Static, bilingual academic homepage hosted on GitHub Pages.

**Live:** https://yanghuisong.github.io/

## Site structure

- `index.html`: page layout, navigation and metadata
- `assets/site-data.js`: bilingual biography, paper list, honors and links
- `assets/app.js`: simple renderer and language preference
- `assets/styles.css`: light academic theme and responsive styling
- `assets/profile-photo*.webp`: personal portrait
- `assets/paper-*.webp`: publication thumbnails

To update a publication, edit the `publications.items` array in `assets/site-data.js`.
To replace a publication figure, put the new image in `assets/` and update the `image` / `imageFull` paths.
The page defaults to English and remembers manual language selections.

Push changes to `main`; the existing GitHub Pages workflow deploys the site.
