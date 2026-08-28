# Content To-Do

Everything the site currently ships with is either verified or a clearly
graceful default. This is the checklist of real content to add before (or
soon after) launch. No fabricated details were used anywhere on the site —
these items are intentionally left blank rather than invented.

## High priority

- **Custom domain** — once you connect a domain in Vercel, update `site.url`
  in `src/data/site.ts`, the canonical/OG tags in `index.html`, and the URLs
  in `public/robots.txt` and `public/sitemap.xml` (currently all point at
  the placeholder `https://bhushan-mohape-website.vercel.app`).
- **Resume PDF** — drop the real file at `public/resume.pdf`. The
  "Download Resume" button in the About section already links to
  `/resume.pdf`; no code changes needed once the file exists.

## Verify

- **WhatsApp number** — `src/data/site.ts` has `whatsappNumber: '919967482339'`,
  assuming the +91 (India) country code for the number you gave
  (9967482339). Confirm that's correct; if not, edit that one value.
- **Submit sitemap to Google Search Console** — `public/sitemap.xml` is
  ready, but actually submitting it (and requesting indexing) requires you
  to verify site ownership in Search Console and submit it there — that's
  a manual step in Google's console, not something committable to the repo.
- **Location claim** — `index.html` (meta description + JSON-LD) and
  `public/sitemap.xml`/`robots.txt` now state "Thane, Maharashtra" as your
  base, per your instruction. Update `Thane`/`Maharashtra` in `index.html`
  if that ever changes.

## Nice to have

- **GitHub repo links** — add `githubUrl` values in `src/data/projects.ts`
  for the Mercury Restaurant Website and Hotel Website Template projects if
  the repos are public. Leave blank to keep the GitHub button hidden.
- **AarogyaNova GitHub link** — `github.com/bhushan-mohape/aarogyanova-healthcare-website`
  exists but is empty (nothing pushed yet), so `githubUrl` is blank on that
  project entry in `src/data/projects.ts`. Push the actual code to that
  repo, then set `githubUrl: 'https://github.com/bhushan-mohape/aarogyanova-healthcare-website'`
  to turn the GitHub button back on.
- **Contact form backend** — set `VITE_FORM_ENDPOINT` (see `.env.example`)
  to a Formspree endpoint or custom API to enable real online submissions.
  Until set, the form opens the visitor's email client instead.
- **Phone number** — set `site.phone` in `src/data/site.ts` to show a phone
  contact card; it's hidden while `null`.
- **Open Graph image** — add `public/og-image.png` (1200×630 recommended)
  to give link previews a real image instead of a missing one.
- **Project preview screenshots** — `src/components/ProjectPreview.tsx`
  currently renders a stylized abstract preview instead of a real
  screenshot (so the site never shows an out-of-date capture). Swap in a
  real `<img>` per project if you'd like actual screenshots.
- **Experience responsibility bullets** — `src/data/experience.ts` now has
  verified company, title, dates and location for Cognizant, IBM,
  Capgemini and Majesco (from LinkedIn). Add a `responsibilities: string[]`
  per role later if you want bullet points describing the work itself —
  none were invented, so the cards currently show title/dates/location
  only. Mention Oracle only if it's factually part of a specific role.

## Deliberately left out

- No fabricated years of experience, degrees, certifications, client names,
  testimonials, awards, revenue figures, project counts, or performance
  statistics appear anywhere on the site, per the project brief. Add real
  versions of any of these later by editing the relevant `src/data/*.ts`
  file or component directly.
