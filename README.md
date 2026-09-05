# الفسيفساء للسياحة والأسفار — Al-Mosaïque Travel & Tourism

A premium, mobile-first Arabic (RTL) travel website for a real Algerian travel agency.

The design language sits between a luxury travel brand, a modern travel app, and an editorial
magazine — warm ivory, deep charcoal, muted olive, and a subtle champagne accent. No gold
gradients, no dark-website clichés; luxury comes from typography, spacing, photography, and detail.

> Because photos and copy are edited in one place, the whole site stays consistent.

---

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (custom design system in `tailwind.config.js`)
- **lucide-react** for icons (single, tree-shaken dependency)
- Files optimized to **WebP** with lazy loading, responsive `srcSet`, and proper aspect ratios

```
src/
  components/     Navbar, Hero, TravelPlanner, FeaturedJourneys, Destinations,
                  Services, Umrah, WhyAlMosaique, Process, Testimonials, TrustBar,
                  Contact, Footer, WhatsAppButton, SectionHeading, Reveal, Logo
  lib/data.js     ← ALL copy, destinations, journeys, services, contact info
  assets/images/  ← optimized WebP imagery
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

Open `src/lib/data.js`. It centralizes:

- Business contact (phone, WhatsApp, email, location)
- Navigation links
- Featured journeys
- Destinations gallery
- Services
- Form select options

Every component pulls from this file, so a single edit updates the site.

## Design decisions

- **RTL native** — `dir="rtl"` on `<html>`; all spacing/positioning uses logical
  properties (`start`/`end`/`ps`/`pe`) so the layout mirrors correctly and never hardcodes
  `left`/`right`.
- **Mobile-first** — hero is a full-bleed `100svh` cinematic image; journeys and destinations
  become horizontal, snap-scrolled carousels below `md`.
- **Honest content** — no invented testimonials (a tasteful placeholder is shown), and no
  fabricated statistics (a qualitative trust strip is shown instead).
- **Motion** — subtle fade-up reveals via `IntersectionObserver`, image scale on hover,
  smooth scrolling. All disabled under `prefers-reduced-motion`.
- **Accessibility** — semantic landmarks, a skip link, focus-visible rings, `aria` labels,
  descriptive alt text, and logical tab order.
- **SEO** — single H1, semantic H2/H3 hierarchy, meta/Open Graph/Twitter tags, JSON-LD
  `TravelAgency` structured data, canonical URL, and `sitemap.xml` + `robots.txt`.

## WhatsApp contact

The primary conversion path is WhatsApp (extremely easy to reach on mobile via a sticky
button and from the navigation, planner, contact form, and footer). Update the number in
`src/lib/data.js` (`WH.whatsappRaw` / `WH.telRaw`) — it's used everywhere.

## Production notes

- Images are imported in `src/lib/data.js` so Vite fingerprints and bundles them; this is
  required for the production build to work (never reference `/public`-style paths for bundled
  assets).
- `vite.config.js` allowlists the live-preview host (`.e2b.app`) and `localhost`.

## Not yet wired (intentionally)

- Contact form currently shows a confirmation state only; to wire it, connect the submit
  handler to your backend or prefill a WhatsApp message.
- Testimonials and statistics are placeholders awaiting real, verified customer data.
- The language selector (العربية / Français / English) is UI-ready but translations are not
  yet implemented; Arabic is the default per the brief.
