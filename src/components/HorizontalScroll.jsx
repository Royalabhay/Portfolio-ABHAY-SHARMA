const cards = ['Storyboarding', 'Concept Renders', 'UI Motion', 'Scroll Architecture', 'Interaction Polish'];

export default function HorizontalScroll() {
  return (
    <section id="horizontal" className="relative h-[130vh] overflow-hidden py-20">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="horizontal-track flex gap-6 px-6 md:px-10">
          {cards.map((card, i) => (
            <article key={card} className="h-[65vh] w-[75vw] shrink-0 rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 md:w-[45vw]">
              <p className="text-xs tracking-[0.3em] text-cyan-200/80">Panel {i + 1}</p>
              <h3 className="mt-5 text-3xl font-semibold md:text-5xl">{card}</h3>
              <p className="mt-6 max-w-md text-slate-300">Pinned horizontal sequence controlled by vertical scrolling with depth scaling and timeline scrubbing.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
