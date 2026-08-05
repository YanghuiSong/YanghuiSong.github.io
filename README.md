# Yanghui Song — Academic Homepage

A responsive academic homepage focused on **remote sensing image intelligent interpretation**. It is ready for GitHub Pages and includes the IEEE GRSL paper:

> **Prompt-Calibrated SAM 3 for Open-Vocabulary Remote-Sensing Semantic Segmentation**  
> IEEE Geoscience and Remote Sensing Letters, 2026.  
> DOI: `10.1109/LGRS.2026.3713378`

## Features

- English / Chinese language switch
- Light / dark appearance
- Responsive academic layout
- Featured IEEE publication with IEEE, DOI, arXiv, code, and BibTeX links
- GitHub project cards with live star counts and static fallbacks
- SEO and Open Graph metadata
- Accessible navigation and reduced-motion support
- No build step and no private data dependency

## Open-source components

- **GitHub Pages** for deployment
- Inline interface icons derived from the visual language of **Lucide Icons** (ISC License)
- Native browser APIs: Intersection Observer, Clipboard API, Fetch API

The page itself is dependency-free HTML/CSS/JavaScript, which makes it fast, auditable, and easy to maintain.

## Deploy as the main personal homepage

1. Create a public repository named exactly:

   ```text
   YanghuiSong.github.io
   ```

2. Copy all files in this folder to the repository root.
3. Push to the `main` branch.
4. In **Settings → Pages**, set **Source** to **GitHub Actions**.
5. The included workflow will deploy the page to:

   ```text
   https://YanghuiSong.github.io
   ```

## Deploy inside an existing repository

The site also works as a project page. Upload the files to a repository, enable GitHub Pages with GitHub Actions, and use the generated Pages URL. Because all internal assets are relative paths, no base-path modification is needed.

## Update content

Most content is in `index.html`. Chinese and English interface text is in the `translations` object inside `assets/script.js`.

Useful locations:

- Research directions: search `id="research"`
- Publication: search `id="publications"`
- Projects: search `id="projects"`
- Contact email: search `yanghuisong55@gmail.com`
- Google Scholar: search `zi6ZBp8AAAAJ`

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## License

The site code is released under the MIT License. Publication titles, author names, and project metadata remain the property of their respective owners.
