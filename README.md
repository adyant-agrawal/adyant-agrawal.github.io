# adyant-agrawal.github.io

Personal academic website of **Adyant Agrawal** — postdoctoral researcher at the
Institute for Computational Physics, University of Stuttgart.

Live at **<https://adyant-agrawal.github.io/>**.

Built with [Jekyll](https://jekyllrb.com/) and served by GitHub Pages. The design
is a lightweight custom theme (no external theme dependency): a single shared
stylesheet, reusable section partials, and all content kept in plain data files.

## Editing content

Almost everything is data-driven — you rarely need to touch HTML.

| To change… | Edit |
|---|---|
| Name, bio, affiliation, social links, contact details | `_config.yml` |
| Publication list | `_data/publications.yml` |
| CV (positions, education, awards, methods, tools) | `_data/cv.yml` |
| Code / tools cards | `_data/projects.yml` |
| Theme colour | `--accent` in `assets/css/style.css` |
| Profile photo | replace `assets/img/photo.jpg` |
| CV PDF | replace `assets/files/CV_A_Agrawal.pdf` |

**Add a publication** — copy a block in `_data/publications.yml`:

```yaml
- title: Your paper title
  authors: A. Agrawal, Co Author
  journal: Journal Name
  volume: "12"
  pages: 100–110      # optional
  year: 2026
  doi: 10.xxxx/xxxxx  # optional
  tags: [Topic one, Topic two]   # optional
```

Your own name (`author_short` in `_config.yml`) is bolded automatically in author lists.

## Repository layout

```
.
├── _config.yml          # site-wide settings and all hero/contact content
├── index.html           # assembles the page from section includes
├── _layouts/
│   └── default.html      # HTML skeleton (head, nav, footer)
├── _includes/
│   ├── head.html         # <head>, fonts, stylesheet, theme-flash guard
│   ├── nav.html          # sticky nav + theme toggle
│   ├── hero.html         # about / hero
│   ├── publications.html # renders _data/publications.yml
│   ├── cv.html           # renders _data/cv.yml
│   ├── code.html         # renders _data/projects.yml
│   ├── contact.html      # contact block
│   ├── footer.html
│   └── icons/            # one SVG per icon (cv, email, scholar, orcid, …)
├── _data/                # the content you edit most
│   ├── publications.yml
│   ├── cv.yml
│   └── projects.yml
└── assets/
    ├── css/style.css     # the shared stylesheet (theme colour lives here)
    ├── js/theme.js       # light/dark toggle
    ├── img/photo.jpg
    └── files/CV_A_Agrawal.pdf
```

## Local preview (optional)

GitHub Pages rebuilds the site automatically on every push, so a local install
is only needed if you want to preview before pushing.

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Licence

Code and template released under the [MIT licence](LICENSE).
Site content (text, CV, images) © Adyant Agrawal.
