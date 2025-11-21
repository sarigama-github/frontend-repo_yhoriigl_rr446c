import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Subtle starfield grid */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(139,92,246,0.18),transparent_40%),radial-gradient(circle_at_10%_120%,rgba(59,130,246,0.15),transparent_45%)]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Oriiion AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
