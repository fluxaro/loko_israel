# Loko Israel — Portfolio

Personal developer portfolio built with Next.js, Three.js, and Framer Motion. Features a fully custom 3D robot built in WebGL, live project previews proxied through a Cloudflare Worker, and smooth animated sections.

## Tech Stack

- **Next.js** — framework and routing
- **Three.js / React Three Fiber** — 3D robot canvas
- **Framer Motion** — page and section animations
- **Tailwind CSS** — styling
- **Cloudflare Workers** — proxy for live project iframe previews
- **Vercel** — deployment

## Features

- Interactive 3D robot that tracks mouse movement
- Live project previews loaded via a Cloudflare Worker proxy that strips `X-Frame-Options` and CSP headers so any site can be embedded
- 15 featured projects with paginated cards, hover-to-expand previews, and background preloading
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Cursor trail effect, skill sphere canvas, and animated loader

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Preview Proxy

All project iframes route through a Cloudflare Worker at:

```
https://late-snow-8d7f.israelloko65.workers.dev/?url=<encoded-url>
```

The worker fetches the target site server-side, strips frame-blocking headers, rewrites relative URLs to absolute, and returns clean HTML safe for iframe embedding.

## Deployment

Deployed on Vercel. The `vercel.json` sets `maxDuration: 30` on the proxy API route and adds permissive frame headers for the portfolio itself.
