# Acadivate Next.js Conversion

This project was converted from a Vite + React + TypeScript app to **Next.js App Router**.

## Run locally

```bash
npm install
npm run dev
```

## Converted routes

- `/`
- `/about`
- `/contact`
- `/awards`
- `/events`
- `/events/international-conferences`
- `/events/upcoming-events`
- `/events/research-forums`
- `/events/workshops-fdp`
- `/events/[slug]`

## Notes

- Shared site chrome is handled in `app/layout.tsx` via `AppShell`.
- Legacy `react-router-dom` routing was replaced with Next.js file-based routing.
- Because the original project contains many interactive sections, the page/component tree was moved behind client component boundaries for compatibility.
- Some event slugs now resolve through `EventRouteResolver` so old internal links keep working.
