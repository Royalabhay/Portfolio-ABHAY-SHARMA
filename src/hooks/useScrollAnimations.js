import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#intro',
            start: 'top 72%',
            end: 'bottom 45%',
            scrub: true,
          },
        },
      );

      gsap.utils.toArray('.parallax-layer').forEach((layer) => {
        const speed = Number(layer.dataset.speed || 0.2);
        gsap.to(layer, {
          yPercent: -speed * 45,
          scale: 1 + speed * 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: '#parallax',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      mm.add('(min-width: 768px)', () => {
        const track = document.querySelector('.horizontal-track');
        if (!track) return;
        const maxX = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -Math.max(maxX, 0),
          ease: 'none',
          scrollTrigger: {
            trigger: '#horizontal',
            start: 'top top',
            end: () => `+=${Math.max(maxX, 500)}`,
            pin: true,
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        '.motion-card',
        { rotateX: 18, rotateY: -16, opacity: 0.4, scale: 0.85 },
        {
          rotateX: -6,
          rotateY: 12,
          opacity: 1,
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#motion3d',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        '.cta-wrap',
        { opacity: 0, scale: 0.88, filter: 'blur(10px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '#cta',
            start: 'top 75%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      );
    });

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);
}
