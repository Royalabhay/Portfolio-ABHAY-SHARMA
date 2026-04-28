# Experimental Scroll Portfolio (React + GSAP)

A cinematic, scroll-based UI/UX system built with **React + Vite**, **GSAP ScrollTrigger**, **Lenis**, **Tailwind CSS**, and **Three.js**.

## Experience Highlights

- Story-driven, scene-by-scene scroll journey with smooth section continuity.
- Cinematic hero with layered depth and envelope-style opening reveal.
- True multi-layer parallax with depth-of-field blur and speed-based motion.
- Pinned horizontal section and perspective-based 3D motion section.
- Cursor system with trailing dot, hover growth, and magnetic interactions.
- Fullscreen overlay menu with submenu micro-animations and active section indicators.
- Admin-style background control panel:
  - Dark/Light mode
  - Theme switch (Space / Electronic / Minimal / Image)
  - Animation toggle + intensity control
  - Overlay opacity slider
  - Custom image URL support
- Preloader and scroll progress bar for premium polish.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project Structure

- `src/components/BackgroundSystem.jsx`
- `src/components/NavOverlay.jsx`
- `src/components/AdminPanel.jsx`
- `src/components/Hero.jsx`
- `src/components/ParallaxSection.jsx`
- `src/components/HorizontalScroll.jsx`
- `src/components/Motion3DSection.jsx`
- `src/components/Cursor.jsx`
- `src/hooks/useLenisScroll.js`
- `src/hooks/useScrollAnimations.js`
- `src/hooks/useMagnetic.js`

Animation and interaction logic stays modular and section-oriented for maintainability.
