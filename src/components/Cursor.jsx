import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const move = (event) => {
      gsap.to(cursor, { x: event.clientX - 14, y: event.clientY - 14, duration: 0.25, ease: 'power3.out' });
      gsap.to(dot, { x: event.clientX - 3, y: event.clientY - 3, duration: 0.08 });
    };

    window.addEventListener('mousemove', move);

    const hoverables = Array.from(document.querySelectorAll('a,button,[data-magnetic]'));
    const handlers = hoverables.map((node) => {
      const onEnter = () => gsap.to(cursor, { scale: 1.8, duration: 0.2 });
      const onLeave = () => gsap.to(cursor, { scale: 1, duration: 0.2 });
      node.addEventListener('mouseenter', onEnter);
      node.addEventListener('mouseleave', onLeave);
      return { node, onEnter, onLeave };
    });

    return () => {
      window.removeEventListener('mousemove', move);
      handlers.forEach(({ node, onEnter, onLeave }) => {
        node.removeEventListener('mouseenter', onEnter);
        node.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 rounded-full border border-cyan-300/80 mix-blend-difference md:block" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-1.5 w-1.5 rounded-full bg-cyan-300 md:block" />
    </>
  );
}
