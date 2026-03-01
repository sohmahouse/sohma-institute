# Sohma Institute — Educational Portal

**URL:** `https://sohma.institute`
**Hosting:** Cloudflare Pages (auto-deploys on push to main)
**GitHub:** `sohmahouse/sohma-institute`

## Stack

- Astro 5 (static site generator)
- Terser (minification)
- No JS framework — pure Astro components

## Deployment

```bash
git add . && git commit -m "message" && git push
# Cloudflare Pages auto-builds and deploys
```

Build command: `npm run build`
Output directory: `dist/`

## What This Site Is

A password-gated educational knowledge portal for cannabis medicine and integrative healthcare.
Contains in-depth clinical articles and reference materials.

## Pages

| Page | Topic |
|------|-------|
| `index.astro` | Landing / article index |
| `cannabis-as-medicine.astro` | Cannabis as medicine overview |
| `endocannabinoid-system-fundamentals.astro` | ECS fundamentals |
| `cannabis-as-a-functional-catalyst.astro` | Functional catalyst framework |
| `cannabis-multi-target-therapeutic.astro` | Multi-target therapeutic approach |
| `adaptive-prescribing-ecs.astro` | Adaptive prescribing for ECS |
| `providing-cannabis-care.astro` | Clinical care delivery |
| `personalising-cannabis-care.astro` | Personalised care approaches |
| `terpene-bible.astro` | Comprehensive terpene reference |
| `entheogenic-stewardship.astro` | Entheogenic stewardship |
| `allostatic-overload-menopause.astro` | Allostatic overload & menopause |
| `cannabis-menopause-neurological-survival.astro` | Cannabis, menopause & neurology |
| `category/` | Category index pages |

## Project Structure

```
sohma-institute/
├── src/
│   ├── pages/           # Article pages (.astro) + category/
│   ├── components/      # PasswordGate.astro (access control)
│   ├── layouts/         # BaseLayout.astro, PortalLayout.astro
│   ├── data/            # Static data
│   ├── assets/images/   # Images
│   └── styles/          # CSS
├── public/              # Static assets
├── astro.config.mjs     # Build config (static output, terser minify)
└── package.json
```

## Key Components

- **PasswordGate** — Client-side password protection for portal access
- **BaseLayout** — Minimal HTML wrapper
- **PortalLayout** — Full article layout with navigation, styling, structure
