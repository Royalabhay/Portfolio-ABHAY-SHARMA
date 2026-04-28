export default function IntroSection() {
  const lines = [
    'Designing motion-first interfaces that feel alive.',
    'Building visual hierarchy using depth, blur, and perspective.',
    'Crafting premium storytelling through scroll-synced animation.',
  ];

  return (
    <section id="intro" className="mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
      <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-200/70">Section 1 · Intro</p>
      <div className="space-y-5 text-3xl font-medium leading-tight md:text-6xl">
        {lines.map((line, index) => (
          <p key={line} className="intro-line opacity-0" data-index={index}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
