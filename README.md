# DJAGO Design & Build Collaborative

> **Architecture • Civil Engineering • Interiors • Branding**
> Ghana's premier integrated, multidisciplinary design & engineering firm.

[![Live Site](https://img.shields.io/badge/Live%20Site-djago--design--build.vercel.app-amber?style=for-the-badge&logo=vercel)](https://djago-design-build.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-djago--design--build-181717?style=for-the-badge&logo=github)](https://github.com/rocksondjago56-wq/djago-design-build)

---

## 📌 Overview

**DJAGO Design & Build** is a high-performance, single-page marketing and portfolio website for Ghana's leading multidisciplinary design collaborative. The site showcases three core service pillars — Graphic Design & Branding, Civil Engineering, and Interior Design — in a seamless, animated, dark-themed experience.

Built with **React 19 + Vite 8 + Tailwind CSS v4**, deployed on **Vercel**.

---

## ✨ Features

- 🎨 **Premium Dark UI** — rich amber-on-dark color palette with glassmorphism cards
- 💬 **WhatsApp Direct-Chat Desk** — floating interactive quick-chat widget with dual phone lines and quick inquiry starters (`WhatsAppWidget.tsx`)
- 🔄 **Before & After Transformations** — interactive draggable comparison wipe slider showcasing renovations and structural delivery (`BeforeAfterSlider.tsx`)
- 🗺️ **Interactive Ghana Projects Map** — interactive SVG vector map with regional hubs, active development corridors, and spotlight case studies (`ProjectsMap.tsx`)
- 📄 **Corporate Capabilities Deck** — downloadable 2024/2025 practice statement & capabilities profile with instant print/PDF document export (`BrochureModal.tsx`)
- 🔍 **Rich SEO & Social Sharing Cards** — custom SVG architectural favicon, Open Graph, and Twitter metadata cards for WhatsApp and LinkedIn sharing
- 🏗️ **Animated Sections** — IntersectionObserver scroll-reveal animations on every section (`AnimatedSection.tsx`)
- 🔢 **Animated Counters** — easeOutExpo number counters for stats in the Hero (`AnimatedCounter.tsx`)
- 🌊 **Keyframe Animations** — float, pulse-glow, shimmer, spin-slow, radar-ripple animations
- 🗂️ **Filterable Portfolio** — filter projects by Discipline and Sector with a case study modal
- 💬 **Contact Form** — full quotation & consultation request form with service selection
- 🌍 **Vercel Deployment** — production-ready with `vercel.json` SPA rewrite rules
- 📱 **Fully Responsive** — mobile-first layouts across all screen sizes

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Language | TypeScript 5.7 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans, Syne, Space Grotesk (Google Fonts) |
| Deployment | Vercel |
| Version Control | Git / GitHub |

---

## 📁 Project Structure

```
DJAGO/
├── index.html                  # Vite HTML shell with Open Graph & Favicon
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite + Tailwind + Figma plugins
├── vercel.json                 # Vercel SPA routing rewrite
├── public/
│   ├── favicon.svg             # Custom geometric D architectural emblem
│   └── og-image.svg            # 1200x630 Open Graph social share banner
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Root component with scroll tracking
    ├── index.css               # Global CSS, Tailwind v4, custom animations
    ├── data/
    │   └── content.ts          # All site content (services, projects, team)
    └── components/
        ├── AnimatedSection.tsx # Scroll-reveal IntersectionObserver HOC
        ├── AnimatedCounter.tsx # easeOutExpo number counter component
        ├── Navbar.tsx          # Sticky navigation with mobile menu & brochure action
        ├── Hero.tsx            # Hero section with service carousel & CTA buttons
        ├── About.tsx           # Company philosophy & pillars
        ├── Sectors.tsx         # Market sector showcase with tabs
        ├── Services.tsx        # Service detail switcher
        ├── Portfolio.tsx       # Filterable project grid + modal
        ├── BeforeAfterSlider.tsx # Interactive comparison slider
        ├── ProjectsMap.tsx     # Interactive SVG Ghana project map
        ├── Process.tsx         # 4-step delivery methodology
        ├── Testimonials.tsx    # Client reviews + team showcase
        ├── Contact.tsx         # Consultation quotation form
        ├── WhatsAppWidget.tsx  # Floating WhatsApp direct-chat desk
        ├── BrochureModal.tsx   # Corporate profile download modal
        ├── Footer.tsx          # Site footer with links
        └── Logo.tsx            # DJAGO brand logo component
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** (comes with Node)

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Opens at **[http://localhost:8443](http://localhost:8443)**

### Build for production

```bash
npm run build
```

Output in `dist/`.

### Preview production build

```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

The project is deployed on Vercel. To redeploy:

```bash
# Preview deploy
npx vercel

# Production deploy
npx vercel --prod
```

Or push to GitHub — Vercel auto-deploys every commit on `main`:

```bash
git push origin main
```

**Live URL:** [https://djago-design-build.vercel.app](https://djago-design-build.vercel.app)

---

## 🎨 Animation System

Custom animations are defined in [`src/index.css`](./src/index.css) using CSS `@keyframes`:

| Class | Effect |
|---|---|
| `.animate-float` | Gentle vertical float loop |
| `.animate-float-slow` | Slow float + slight rotation |
| `.animate-float-delayed` | Float with 1.5s delay |
| `.animate-pulse-glow` | Pulsing opacity/scale glow |
| `.animate-spin-slow` | 22-second full rotation |
| `.animate-shimmer` | Horizontal shimmer sweep |
| `.animate-radar` | Expanding ripple fade |
| `.glass-card` | Glassmorphism base card |
| `.glass-card-hover` | Hover lift + amber border glow |

**Scroll Reveal** is handled by [`AnimatedSection.tsx`](./src/components/AnimatedSection.tsx) — wrap any element with it for entrance animations:

```tsx
<AnimatedSection direction="up" delay={200}>
  <YourComponent />
</AnimatedSection>
```

Supports directions: `up`, `down`, `left`, `right`, `fade`, `zoom`.

---

## 📞 Contact

**DJAGO Design & Build Collaborative**
No. 14 Ridge Road, North Ridge, Accra, Ghana

- 📞 0506471139 / 0599793141
- 📧 info@djagodesignbuild.com
- 🌐 [djago-design-build.vercel.app](https://djago-design-build.vercel.app)

---

*© 2026 DJAGO Design & Build Collaborative. All rights reserved.*
