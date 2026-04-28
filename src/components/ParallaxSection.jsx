const layers = [
  { src: '/images/responsive-web.svg', speed: 0.15, className: 'left-[8%] top-[15%] w-40 md:w-60 blur-[1px]' },
  { src: '/images/ui-ux.svg', speed: 0.3, className: 'left-[50%] top-[20%] w-52 md:w-72 -translate-x-1/2' },
  { src: '/images/performance.svg', speed: 0.5, className: 'right-[10%] top-[18%] w-36 md:w-52 blur-[0.5px]' },
  { src: '/images/ui-ux.svg', speed: 0.75, className: 'left-[20%] bottom-[14%] w-52 md:w-72 opacity-90 blur-[1.5px]' },
  { src: '/images/responsive-web.svg', speed: 0.95, className: 'right-[16%] bottom-[10%] w-40 md:w-60' },
];

export default function ParallaxSection() {
  return (
    <section id="parallax" className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 via-transparent to-violet-500/10" />
      <h2 className="mx-auto max-w-6xl text-3xl font-semibold md:text-5xl">Section 2 · Advanced Parallax Depth Scene</h2>
      <p className="mx-auto mt-4 max-w-6xl text-slate-300">Layered assets shift at independent rates, producing true depth illusion with soft blur and focus roll-off.</p>
      <div className="relative mx-auto mt-14 h-[60vh] max-w-6xl rounded-3xl border border-white/10 bg-black/20">
        {layers.map((layer) => (
          <img
            key={`${layer.src}-${layer.className}`}
            src={layer.src}
            loading="lazy"
            alt="Parallax visual"
            className={`parallax-layer depth-layer absolute ${layer.className}`}
            data-speed={layer.speed}
          />
        ))}
      </div>
    </section>
  );
}
