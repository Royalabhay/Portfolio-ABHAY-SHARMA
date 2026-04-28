import ThreeOrb from './ThreeOrb';

export default function Motion3DSection() {
  return (
    <section id="motion3d" className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-10 [perspective:1400px]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Section 4 · 3D Motion</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Perspective-driven transforms and real-time 3D energy.</h2>
        <p className="text-slate-300">Scroll rotates and scales this block in 3D while an interactive Three.js orb adds tactile dimensionality.</p>
      </div>
      <div className="motion-card glass rounded-3xl p-4 md:p-8">
        <ThreeOrb />
      </div>
    </section>
  );
}
