import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const layers = heroRef.current.querySelectorAll('[data-layer]');

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('[data-envelope-left]', { xPercent: -100 }, { xPercent: 0, duration: 0.9 })
      .fromTo('[data-envelope-right]', { xPercent: 100 }, { xPercent: 0, duration: 0.9 }, '<')
      .to('[data-envelope-left]', { xPercent: -110, duration: 1, delay: 0.15 })
      .to('[data-envelope-right]', { xPercent: 110, duration: 1 }, '<')
      .fromTo(
        layers,
        { opacity: 0, y: 80, scale: 0.94, rotateX: 10 },
        { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1.1, stagger: 0.1, clearProps: 'transform' },
        '-=0.5',
      );

    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      layers.forEach((layer, idx) => {
        const depth = (idx + 1) * 0.35;
        gsap.to(layer, { x: x * depth, y: y * depth, duration: 0.8, ease: 'power3.out' });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 [perspective:1200px]">
      <div data-envelope-left className="absolute inset-y-0 left-0 z-30 w-1/2 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent" />
      <div data-envelope-right className="absolute inset-y-0 right-0 z-30 w-1/2 bg-gradient-to-l from-slate-950 via-slate-900 to-transparent" />
      <div data-layer className="depth-layer absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_45%)]" />
      <div data-layer className="depth-layer absolute inset-x-8 top-20 mx-auto h-56 max-w-4xl rounded-full bg-cyan-400/10 blur-3xl" />
      <div data-layer className="depth-layer glass relative z-10 max-w-4xl rounded-3xl p-8 text-center shadow-glow md:p-12">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-200/80">Experimental Scroll Journey</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-7xl">Cinematic Parallax & 3D Motion Experience</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 md:text-lg">
          A premium React + GSAP lab that blends ScrollTrigger timelines, smooth Lenis motion, cursor interactions, and layered depth.
        </p>
        <button data-magnetic className="mt-8 rounded-full border border-cyan-300/50 px-8 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/10">
          Enter Experience
        </button>
      </div>
    </section>
  );
}
