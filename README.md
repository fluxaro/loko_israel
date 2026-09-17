# Loko Israel — Full-Stack Software Engineer & Co-Founder

> Engineering production-grade web applications, AI platforms, and scalable financial operating systems.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![WebGL2](https://img.shields.io/badge/WebGL2-GLSL_Shaders-red?style=flat-square&logo=webgl)](https://www.khronos.org/webgl/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-gold?style=flat-square)](#license)

---

## ✦ Overview

This repository houses the personal portfolio, engineering case studies, and production system showcases for **Loko Israel**, a Full-Stack Developer and Co-Founder based in Nigeria. 

The site is built with an editorial design philosophy that marries high-performance full-stack architectures with advanced optical WebGL2 shader physics, interactive project sandboxes, and live fintech venture documentation.

---

## ✦ Key Architectural Highlights

### 1. WebGL2 Glass Ribbon Lens Shader
An optical cylinder lens running on a custom GLSL fragment shader (`#version 300 es`) that renders continuous production project cards across a dynamic S-curve:
- **Matrix Lens Rotation:** Optical coordinate warping transformed through coordinate rotation matrices (`angleRotation = 1.134464`).
- **Chromatic Dispersion & Glow:** Real-time RGB split refraction offset with an exponential neon cyan rim emission along curved tangents.
- **Scroll Synchronization:** Tightly synchronized with page scroll physics alongside touch and mouse pointer scrubbing.

### 2. Ventures & Startups Showcase
- **Ryport Technologies (`/startup`):** Dedicated architectural breakdown of Ryport — an African financial operating system engineered to automate Nigerian bank SMS alert capture in kobo, calculate 30-day runway burn rates, and provide conversational AI CFO intelligence for SMEs and freelancers.

### 3. Production Work & Live Sandboxes
- **Fuzzi:** Fuzzy-logic security risk scoring platform across 14 web security dimensions with confidence-weighted threat simulations.
- **Spark AI:** Sub-second conversational AI assistant with streaming token responses, dynamic tool calling, and session memory persistence.
- **Sieve Engine:** Sub-second client-side resume compilation with live multi-theme WYSIWYG preview and zero backend compute latency.
- **Unified Project Grid:** 15+ shipped applications with interactive live previews, category filtering, and tech stack breakdowns.

### 4. Editorial Design System
- **Curated Typography:** Pairing classical editorial serifs (*Instrument Serif*) with crisp technical monospace (*JetBrains Mono*) and clean geometric body copy (*DM Sans*).
- **Brand Color Palette:** Warm parchment (`#f5f2ec`), deep obsidian ink (`#1a1a1a`), and signature warm gold (`#c8a845`).
- **Live Localized Footprint:** Real-time ticking Nigeria clock (`Africa/Lagos` timezone) with dynamic availability status and interactive intention switcher.

---

## ✦ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js](https://nextjs.org/) (Pages Router with Turbopack), [React 19](https://react.dev/) |
| **Languages** | [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ESNext) |
| **Visual Effects & Shaders** | [WebGL2](https://www.khronos.org/webgl/), GLSL Vertex & Fragment Shaders, [Framer Motion](https://www.framer.com/motion/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), CSS Modules, Curated Google Webfonts |
| **Icons & Media** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/) (Edge Network, Zero-Config CI/CD) |

---

## ✦ Repository Structure

```
├── components/
│   ├── About.js              # Bio, experience timeline & background
│   ├── Contact.js            # Direct message dispatch form
│   ├── Education.js          # Academic background & Computer Science coursework
│   ├── Footer.js             # Live Nigeria clock, status switcher & social links
│   ├── Hero.js               # Editorial headline, value proposition & core stack pills
│   ├── Highlights.js         # Career milestones, architecture deep-dives & metrics
│   ├── Navbar.js             # Floating frosted glass navigation pill
│   ├── Projects.js           # Interactive project directory with paginated previews
│   ├── Skills.js             # Core technologies & architectural capabilities
│   ├── SlantedMarquee.js     # Signature brand gold marquee ribbon
│   ├── Startups.js           # Co-founded ventures preview & Ryport showcase
│   ├── SystemsInDailyUse.js  # WebGL2 glass ribbon lens cylinder carousel
│   ├── TechTicker.js         # Infinite monochrome technology stack carousel
│   └── WhyTech.js            # Engineering essays, reflections & philosophy
├── pages/
│   ├── _app.js               # App shell, fonts & global stylesheet imports
│   ├── about.js              # Dedicated journey & background page
│   ├── contact.js            # Dedicated contact page
│   ├── highlights.js         # Detailed career milestones & achievements
│   ├── index.js              # Main landing page assembling the complete narrative
│   ├── projects.js           # Full searchable & filterable projects catalog
│   ├── skills.js             # Comprehensive skills inventory
│   └── startup.js            # Dedicated Ryport co-founder case study
├── styles/
│   └── globals.css           # Custom font definitions, tokens & keyframe animations
├── tailwind.config.js        # Color tokens, typography scales & animation configs
└── package.json              # Dependencies and scripts
```

---

## ✦ Local Development

Ensure you have [Node.js](https://nodejs.org/) (v18.17 or later) installed.

### 1. Clone the repository
```bash
git clone https://github.com/loko-israel/loko_israel.git
cd loko_israel
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## ✦ Connect & Inquiries

- **Portfolio:** [https://lokoisrael.vercel.app](https://lokoisrael.vercel.app)
- **LinkedIn:** [linkedin.com/in/loko-israel](https://linkedin.com/in/loko-israel)
- **GitHub:** [github.com/loko-israel](https://github.com/loko-israel)
- **Twitter / X:** [@loko_israel](https://twitter.com/loko_israel)
- **Email:** [israelloko65@gmail.com](mailto:israelloko65@gmail.com)

---

## ✦ License

This project is licensed under the [MIT License](LICENSE) — feel free to explore the code for personal inspiration.
