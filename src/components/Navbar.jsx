import { Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-violet-500/30 ring-1 ring-white/10 flex items-center justify-center">
            <span className="text-white font-semibold">OA</span>
          </div>
          <div className="leading-tight">
            <p className="text-white/90 font-semibold tracking-tight">Oriiion AI</p>
            <p className="text-xs text-white/50 -mt-0.5">Voice Agent Platform</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#usecases" className="text-white/70 hover:text-white transition-colors">Use cases</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/test" className="text-white/70 hover:text-white transition-colors">Status</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm backdrop-blur-md ring-1 ring-white/20 transition-all">
            Launch Console
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
