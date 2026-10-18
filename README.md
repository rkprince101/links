# Useful websites, explained (link-in-bio site)

Static page for the Instagram bio link: every website, GitHub repo and AI tool from the reels.
No build step. Hosted on GitHub Pages from the `main` branch root.

## Add a new case (after each reel goes live)

1. Open `links.js`, copy the first entry in `CASES`, paste it at the top of the list.
2. Change `n` (next case number), `name`, `url`, `kind` (`Website`, `GitHub repo` or `AI tool`),
   `blurb` (one or two plain sentences, facts from the reel's `facts.md`), `tags`, `reel` (the
   Instagram reel link) and `date`.
3. Commit and push:

   ```bash
   git add links.js
   git commit -m "Add case NN: Name"
   git push
   ```

   Pages redeploys in about a minute.

## Change the look or the name

- Series name, title, tagline, handle: `SITE` at the top of `links.js`.
- Look: Material 3 per the material-3 skill (github.com/hamen/material-3-skill): `--md-sys-*` colour, typescale, shape, motion and spacing tokens in `styles.css`, light and dark follow the
  device setting), Roboto Flex + Material Symbols Rounded from Google Fonts.
- My own apps (the "Made by me" section): `EXTRAS` in `links.js`.
- `og.png` is the link preview image (1200x630).

## Preview locally

Open `index.html` in a browser (works from the file system, no server needed).
