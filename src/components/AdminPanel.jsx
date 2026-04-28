const themes = ['space', 'electronic', 'minimal', 'image'];

export default function AdminPanel({ settings, setSettings }) {
  const update = (key, value) => setSettings((prev) => ({ ...prev, [key]: value }));

  return (
    <aside className="fixed bottom-4 right-4 z-50 w-[320px] rounded-2xl border border-white/15 bg-slate-950/70 p-4 text-xs text-slate-200 backdrop-blur-xl">
      <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-cyan-300">Background Control Module</p>
      <div className="space-y-3">
        <label className="flex items-center justify-between gap-3">
          <span>Mode</span>
          <select value={settings.mode} onChange={(e) => update('mode', e.target.value)} className="rounded bg-slate-900 px-2 py-1">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>Theme</span>
          <select value={settings.theme} onChange={(e) => update('theme', e.target.value)} className="rounded bg-slate-900 px-2 py-1">
            {themes.map((theme) => (
              <option key={theme} value={theme}>{theme}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>Animations</span>
          <input type="checkbox" checked={settings.animated} onChange={(e) => update('animated', e.target.checked)} />
        </label>
        <label className="flex items-center justify-between gap-3">
          <span>Intensity</span>
          <select value={settings.intensity} onChange={(e) => update('intensity', e.target.value)} className="rounded bg-slate-900 px-2 py-1">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <label className="space-y-1">
          <div className="flex justify-between"><span>Overlay opacity</span><span>{settings.overlayOpacity.toFixed(2)}</span></div>
          <input type="range" min="0.2" max="0.75" step="0.05" value={settings.overlayOpacity} onChange={(e) => update('overlayOpacity', Number(e.target.value))} className="w-full" />
        </label>
        <label className="space-y-1">
          <span>Image URL</span>
          <input value={settings.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} className="w-full rounded bg-slate-900 px-2 py-1" placeholder="https://..." />
        </label>
      </div>
    </aside>
  );
}
