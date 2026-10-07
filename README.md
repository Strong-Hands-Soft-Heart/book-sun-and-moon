# Mia, the Sun, and the Moon

A bilingual (English / Spanish) web picture book. A short children's story about a curious girl, the sun, and the moon.

Spanish title: **Mia, el Sol y la Luna**.

Live site: [mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com](https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com). Production origin is set at build time via `VITE_SITE_URL` (default fallback matches that domain).

Source: [Strong-Hands-Soft-Heart/book-sun-and-moon](https://github.com/Strong-Hands-Soft-Heart/book-sun-and-moon).

## Also in this series

Bilingual web picture books from [Strong Hands Soft Heart](https://stronghandssoftheart.com). Each book is its own repository.

| Book | Read | Source |
|------|------|--------|
| Mia, the Sun, and the Moon / *Mia, el Sol y la Luna* | [live](https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com) | **this repository** |
| The Bent One / *La Doblada* | [live](https://the-bent-one-book.stronghandssoftheart.com) | [the-bent-one](https://github.com/Strong-Hands-Soft-Heart/the-bent-one) |

## Stack

- React 18 + Vite 7
- Tailwind CSS
- Static SPA deploy (Vercel rewrite to `index.html`)

App version lives in `package.json` and is stamped in the footer at build time.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the URL Vite prints (typically `http://localhost:3000`). `pnpm start` is the same as `pnpm dev`.

```bash
pnpm build
pnpm preview
pnpm test
```

## Reader behavior

- Cover: **Open the book** / **Abrir el cuento** starts the story; **Continue reading** / **Seguir leyendo** appears when a mid-book position was saved.
- Language: **EN / ES** toggle; preference is stored for later visits.
- Keyboard: Arrow keys, Space, Enter, Page Up / Page Down turn pages; Home returns to the cover; End jumps to the last screen.
- Touch: swipe left / right; tap the left or right edge of the illustration to go back or forward.
- Reader bar: page dots jump to a page; **Read aloud** uses the browser's Web Speech API (stop with the same control).
- Each location has a URL (`/`, `/1/park`, `/10/bedtime`, …).

## Deploy and SEO

Set `VITE_SITE_URL` to the production origin (no trailing slash) before build so canonical and Open Graph image URLs match that origin. Example: `.env.example`.

Social card: `public/og.png` (1200×630). Cover still: `public/cover.jpg`.

Icons: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, and related PNGs in `public/`.

Crawlers: `public/robots.txt`, `public/sitemap.xml`. Meta + JSON-LD live in `index.html`; language switches update them via `src/book/documentMeta.js`.

`vercel.json` rewrites all routes to `index.html` so deep links work on a static host.

## Project layout

| Path | Role |
|------|------|
| `src/book/content.js` | Story pages, titles, SEO strings, production URLs |
| `src/book/paths.js` | Page URLs and legacy-hash redirects |
| `src/book/documentMeta.js` | Document meta updates when language changes |
| `src/book/speech.js` | Read-aloud / Web Speech |
| `src/book/storage.js` | Saved language and resume position |
| `src/components/App.jsx` | Shell, routing, navigation |
| `src/components/CoverPage.jsx` | Cover, start / continue |
| `src/components/ReaderBar.jsx` | Footer chrome, language, read-aloud |
| `src/hooks/` | Navigation, gestures, read-aloud |
| `LICENSE.md` | MIT (code) and CC BY-NC 4.0 (story and art) |
| `TODO.md` | Open work |

## Editorial notes

Written, designed, and built for Mia and Dario. Dedication copy lives on the cover; keep the reader voice warm, short, and bilingual in both story and chrome.

See `TODO.md` for open work (print stylesheet polish; optional recorded narration instead of browser speech).

## License

Two licenses, on purpose:

- **Source code** (the reader app): [MIT](LICENSE.md)
- **Book content** (story text, illustrations, and other creative work): [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

Forks and copies of the story are welcome for non-commercial use. Credit [Antonio Rodriguez Martinez](https://antonio.builds.software), name the book, and link back. Commercial use of the story and art stays with the author. Details and the MIT text are in [`LICENSE.md`](LICENSE.md).
