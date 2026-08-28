# Bhushan Mohape — Web Developer Portfolio

A premium personal portfolio / business website for Bhushan Mohape, a Web
Developer / Frontend Developer, built to attract website development
clients (businesses, restaurants, hotels, etc.) and to support a future
Google Business Profile.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)

No routing library, CMS, or backend is used — this is a single-page site
with anchor-link navigation, kept intentionally dependency-light.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # preview the production build locally
```

## Editing content

All editable content lives in `src/data/`:

- `site.ts` — name, contact email/phone, social links, resume path, domain,
  optional form backend endpoint
- `nav.ts` — header/footer navigation links
- `experience.ts` — professional experience timeline
- `skills.ts` — technology/skills categories
- `services.ts` — services offered
- `projects.ts` — featured projects and their case studies

See `CONTENT_TODO.md` for a checklist of real content to add before/after
launch (resume PDF, verified job details, custom domain, etc.).

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new) — it auto-detects
   the Vite framework preset (build command `npm run build`, output
   directory `dist`).
3. If you want the contact form to submit online (instead of opening the
   visitor's email client), set the `VITE_FORM_ENDPOINT` environment
   variable in Vercel's project settings (see `.env.example`).
4. Once a custom domain is connected, update the placeholder URL in
   `src/data/site.ts`, `index.html`, `public/robots.txt` and
   `public/sitemap.xml`.

## Deploying to GitHub Pages

The two existing project templates in this portfolio (`hotel-website-template`)
were deployed as static GitHub Pages sites. This site can be deployed the
same way by building (`npm run build`) and publishing the `dist/` folder,
though Vercel is the recommended path since it matches the `npm run build`
output automatically.
