import CTASection from './components/CTASection';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import HorizontalScroll from './components/HorizontalScroll';
import IntroSection from './components/IntroSection';
import Motion3DSection from './components/Motion3DSection';
import ParallaxSection from './components/ParallaxSection';
import { useLenisScroll } from './hooks/useLenisScroll';
import { useMagnetic } from './hooks/useMagnetic';
import { useScrollAnimations } from './hooks/useScrollAnimations';

export default function App() {
  useLenisScroll();
  useScrollAnimations();
  useMagnetic();

  return (
    <main className="relative overflow-clip">
      <Cursor />
      <Hero />
      <IntroSection />
      <ParallaxSection />
      <HorizontalScroll />
      <Motion3DSection />
      <CTASection />
    </main>
  );
}
