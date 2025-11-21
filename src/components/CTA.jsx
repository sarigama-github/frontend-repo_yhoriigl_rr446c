export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-amber-400 p-[1px] shadow-2xl shadow-fuchsia-700/20">
          <div className="rounded-3xl bg-slate-900 p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">Launch your first voice agent in minutes</h3>
                <p className="text-white/70 mt-2 max-w-2xl">Start free, invite your team, and connect your stack. Upgrade as you scale with usage-based pricing.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold ring-1 ring-white/50 shadow-lg shadow-black/20">
                  Get started
                </a>
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 backdrop-blur">
                  View pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
