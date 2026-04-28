import { useEffect, useMemo, useRef } from 'react';

const palette = {
  dark: {
    text: 'text-slate-100',
    gradient: 'from-[#05060f] via-[#0b1226] to-[#1c1143]',
    glowA: 'bg-cyan-400/15',
    glowB: 'bg-violet-500/20',
  },
  light: {
    text: 'text-slate-900',
    gradient: 'from-[#f8fafc] via-[#eef2ff] to-[#e2e8f0]',
    glowA: 'bg-sky-300/30',
    glowB: 'bg-fuchsia-300/20',
  },
};

function getThemeClasses(theme) {
  switch (theme) {
    case 'electronic':
      return 'bg-[linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] bg-[size:70px_70px]';
    case 'space':
      return 'bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.2),transparent_35%),radial-gradient(circle_at_40%_85%,rgba(99,102,241,0.2),transparent_40%)]';
    case 'minimal':
      return 'bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_40%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_35%)]';
    case 'image':
      return '';
    default:
      return '';
  }
}

export default function BackgroundSystem({
  mode,
  theme,
  animated,
  intensity,
  overlayOpacity,
  imageUrl,
}) {
  const canvasRef = useRef(null);
  const bg = palette[mode];

  const particleCount = useMemo(() => {
    if (!animated) return 0;
    if (intensity === 'low') return 30;
    if (intensity === 'high') return 90;
    return 55;
  }, [animated, intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !animated) return;

    const ctx = canvas.getContext('2d');
    let width;
    let height;
    let frame;
    let stars = [];

    const speed = intensity === 'high' ? 0.6 : intensity === 'low' ? 0.2 : 0.35;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1.4 + 0.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.y += speed * star.z;
        if (star.y > height + 5) {
          star.y = -5;
          star.x = Math.random() * width;
        }
        const alpha = mode === 'light' ? 0.18 * star.z : 0.45 * star.z;
        ctx.fillStyle = mode === 'light' ? `rgba(71,85,105,${alpha})` : `rgba(125,211,252,${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.z * 1.4, 0, Math.PI * 2);
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, [animated, intensity, mode, particleCount]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${bg.gradient}`} />
      {theme === 'image' && (
        <img
          src={imageUrl}
          alt="Theme background"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
      )}
      <div className={`absolute inset-0 ${getThemeClasses(theme)}`} />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className={`absolute -left-24 top-24 h-80 w-80 rounded-full blur-3xl ${bg.glowA}`} />
      <div className={`absolute -right-20 bottom-20 h-96 w-96 rounded-full blur-3xl ${bg.glowB}`} />
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(2,6,23,0.55)_100%)]" />
    </div>
  );
}
