import { useEffect, useMemo, useState } from 'react';
import AdminPanel from './components/AdminPanel';
import BackgroundSystem from './components/BackgroundSystem';
import CTASection from './components/CTASection';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import HorizontalScroll from './components/HorizontalScroll';
import IntroSection from './components/IntroSection';
import Motion3DSection from './components/Motion3DSection';
import NavOverlay from './components/NavOverlay';
import ParallaxSection from './components/ParallaxSection';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useMagnetic } from './hooks/useMagnetic';
import { useScrollAnimations } from './hooks/useScrollAnimations';

const sectionIds = ['intro', 'parallax', 'horizontal', 'motion3d', 'cta'];

export default function App() {
  const [settings, setSettings] = useState({
    mode: 'dark',
    theme: 'space',
    animated: true,
    intensity: 'medium',
    overlayOpacity: 0.45,
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80',
  });
  const [activeSection, setActiveSection] = useState('intro');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useLenisScroll();
  useScrollAnimations();
  useMagnetic();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 },
    );

    sectionIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const textTheme = useMemo(() => (settings.mode === 'light' ? 'text-slate-900' : 'text-slate-100'), [settings.mode]);

  return (
    <main className={`relative overflow-clip transition-colors ${textTheme}`}>
      <BackgroundSystem {...settings} />
      <Cursor />
      <NavOverlay activeSection={activeSection} />
      <div className="fixed left-0 top-0 z-50 h-1 bg-cyan-300 transition-all" style={{ width: `${progress * 100}%` }} />
      <Hero />
      <IntroSection />
      <ParallaxSection />
      <HorizontalScroll />
      <Motion3DSection />
      <CTASection />
      <AdminPanel settings={settings} setSettings={setSettings} />

      <div className={`fixed inset-0 z-[120] grid place-items-center bg-slate-950 transition duration-700 ${loading ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-cyan-200">Preparing immersive scene</p>
        </div>
      </div>
    </main>
  );
}
