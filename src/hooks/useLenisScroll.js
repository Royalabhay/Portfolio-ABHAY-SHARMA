import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.2,
      lerp: 0.08,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
