# hathuyanh.vn

Corporate landing page for **DOANH NGHIỆP TƯ NHÂN HÀ THỦY ANH** — "Niềm tin của mọi công trình".

Single-page, fully static Next.js site in Vietnamese. All company facts come from
`references/Profile Hà Thủy Anh 2026 A4 copy.pdf`.

## Stack

- Next.js 16 (App Router, Turbopack, Cache Components) + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Motion (`motion/react`) for scroll reveals, counters and gallery transitions — honours
  `prefers-reduced-motion`
- Lucide icons, Be Vietnam Pro via `next/font` (Vietnamese subset)

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # production build (also type-checks)
npm run start      # serve the production build
```

Node 20.9+ is required (developed on Node 24).

## Project structure

```text
src/
  app/            layout (metadata, font), page (sections + JSON-LD), robots, sitemap, icons
  components/
    layout/       Header, MobileNavigation (native <dialog> drawer), Footer, FloatingActions
    sections/     Hero, About, Services, Capabilities, Products, Projects (+ ProjectGallery),
                  Commitments, SupplyProcess, Partners, Contact (+ ContactForm)
    ui/           SectionHeading, Reveal, AnimatedCounter, ProjectCard, ContactButton, Logo
  data/           company, services, capabilities, products, projects, partners, commitments
public/
  images/         optimized photos extracted from the PDF (see docs/ASSETS.md)
  documents/      downloadable company profile PDF
```

## Updating content

All business content lives in `src/data/*.ts` — components only render it.

- **Contact details, address, tax ID** → `src/data/company.ts`
- **Services / products** → `services.ts`, `products.ts`
- **Capacity numbers** → `capabilities.ts`
- **Projects** → `projects.ts`. Add a photo to `public/images/projects/` and an entry to
  `featuredProjects`; categories drive the gallery filter. Text-only projects go in
  `projectListGroups`.
- **Brand logos** → `partners.ts` + `public/images/partners/`
- **Copyright year** and **sitemap `lastModified`** are static (to keep the page prerendered) —
  update them in `company.ts` and `src/app/sitemap.ts`.

## Contact form

Without configuration the form validates input and then opens the visitor's email app with a
pre-filled message to `thuyhayenbai@gmail.com`; the UI tells the visitor to press *Send*. It
never reports a submission as delivered.

To deliver requests via an API (Formspree, a serverless function, a CRM webhook…), set:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://example.com/your-endpoint
```

The form then `POST`s JSON `{ name, phone, email, company, need, message }` and shows success
only on a 2xx response. See `.env.example`.

## Deployment

The build output is fully static (`○` routes only).

- **Vercel**: import the repository; no configuration needed. Add
  `NEXT_PUBLIC_CONTACT_ENDPOINT` under Environment Variables if used. Point `hathuyanh.vn` DNS
  at Vercel.
- **Self-hosted Node**: `npm ci && npm run build && npm run start` behind a reverse proxy
  (Nginx/Caddy) with HTTPS. Image optimization runs in the Node server.

The canonical URL, sitemap and Open Graph tags assume `https://hathuyanh.vn`
(`company.url` in `src/data/company.ts`).
