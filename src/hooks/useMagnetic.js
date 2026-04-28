import { useEffect } from 'react';
import gsap from 'gsap';

export function useMagnetic(selector = '[data-magnetic]') {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector));

    const cleanups = nodes.map((node) => {
      const onMove = (e) => {
        const rect = node.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(node, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: 'power3.out' });
      };
      const onLeave = () => gsap.to(node, { x: 0, y: 0, duration: 0.6, ease: 'expo.out' });

      node.addEventListener('mousemove', onMove);
      node.addEventListener('mouseleave', onLeave);

      return () => {
        node.removeEventListener('mousemove', onMove);
        node.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, [selector]);
}
