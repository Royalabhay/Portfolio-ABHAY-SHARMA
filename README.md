# Experimental Scroll Portfolio (React + GSAP)

An advanced scroll-driven portfolio experience built with **React + Vite**, **GSAP ScrollTrigger**, **Lenis smooth scrolling**, **Tailwind CSS**, and an optional **Three.js** element.

## Features

- Cinematic fullscreen hero with opening animation and layered depth.
- Scroll-synced intro text reveals.
- Advanced multi-layer parallax section with speed-based depth illusion.
- Horizontal pinned section controlled by vertical scroll.
- 3D motion section with perspective transforms and Three.js orb.
- Final CTA reveal with blur/scale/opacity transition.
- Custom cursor with hover scale and magnetic button interaction.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Hero.jsx`
- `src/components/ParallaxSection.jsx`
- `src/components/HorizontalScroll.jsx`
- `src/components/Cursor.jsx`
- `src/hooks/useScrollAnimations.js`
- `src/hooks/useLenisScroll.js`
- `src/components/ThreeOrb.jsx`

All animation logic is split into reusable hooks and component-scoped behavior.
