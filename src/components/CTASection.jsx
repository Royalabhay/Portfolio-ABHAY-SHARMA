export default function CTASection() {
  return (
    <section id="cta" className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
      <div className="cta-wrap glass rounded-3xl px-8 py-14 md:px-14">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Section 5 · Final CTA</p>
        <h2 className="mt-4 text-4xl font-semibold md:text-6xl">Let&apos;s build your next immersive story.</h2>
        <p className="mx-auto mt-5 max-w-xl text-slate-300">Production-ready architecture, premium motion language, and a scalable animation system for next-level digital experiences.</p>
        <button data-magnetic className="mt-9 rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105">Start a Project</button>
      </div>
    </section>
  );
}
