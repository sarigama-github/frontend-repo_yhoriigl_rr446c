import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -inset-[20%] bg-[radial-gradient(closest-side,rgba(139,92,246,0.35),rgba(99,102,241,0.25),rgba(251,146,60,0.18),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,20,0)_0%,rgba(10,10,20,0.6)_60%,rgba(10,10,20,0.9)_100%)]" />
      </div>

      <div className="relative pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live AI voice agents for your business
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Build, deploy, and scale AI Voice Agents
            </h1>
            <p className="text-white/70 text-lg">
              Connect to your tools, answer calls, and automate conversations with a modern, reliable, and blazing-fast platform.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold ring-1 ring-white/50 shadow-lg shadow-black/20">
                Get started free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 backdrop-blur">
                Explore features
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-white/60">
              <div>
                <p className="text-2xl font-semibold text-white">99.99%</p>
                <p className="text-xs">Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">200ms</p>
                <p className="text-xs">Avg. latency</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">SOC2</p>
                <p className="text-xs">Enterprise ready</p>
              </div>
            </div>
          </div>

          <div className="relative h-[540px] rounded-3xl ring-1 ring-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
