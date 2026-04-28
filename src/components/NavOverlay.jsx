import { useMemo, useState } from 'react';

const menu = [
  { id: 'intro', label: 'Intro', sub: ['Story setup', 'Typography reveal'] },
  { id: 'parallax', label: 'Parallax', sub: ['Depth layers', 'Blur field'] },
  { id: 'horizontal', label: 'Horizontal', sub: ['Pinned scroll', 'Card motion'] },
  { id: 'motion3d', label: '3D', sub: ['Perspective scene', 'Interactive orb'] },
  { id: 'cta', label: 'CTA', sub: ['Final message', 'Action state'] },
];

export default function NavOverlay({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState('intro');

  const activeIndex = useMemo(() => menu.findIndex((item) => item.id === activeSection), [activeSection]);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        data-magnetic
        className="fixed left-4 top-4 z-50 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur"
      >
        Menu
      </button>

      <div className={`fixed inset-0 z-40 transition ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <nav className="relative flex h-full max-w-xl flex-col justify-center gap-5 px-10">
          {menu.map((item, i) => (
            <div key={item.id} className="group">
              <button
                onMouseEnter={() => setExpanded(item.id)}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setOpen(false);
                }}
                className="flex items-center gap-3 text-left text-3xl font-semibold transition hover:scale-[1.02] hover:text-cyan-300 md:text-5xl"
              >
                <span className={`h-2 w-2 rounded-full transition ${activeSection === item.id ? 'bg-cyan-300 shadow-glow' : 'bg-white/30'}`} />
                {item.label}
                <span className="h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-14" />
              </button>
              <div className={`overflow-hidden pl-6 text-sm text-slate-300 transition-all ${expanded === item.id ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
                {item.sub.map((sub) => (
                  <p key={sub} className="py-0.5">{sub}</p>
                ))}
              </div>
              <div className={`mt-2 h-[1px] bg-white/10 ${i === activeIndex ? 'opacity-100' : 'opacity-30'}`} />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
