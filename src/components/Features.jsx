import { Phone, Mic, Zap, Shield, Globe, Workflow, Webhook, Database } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Phone,
      title: "Telephony built-in",
      desc: "Provision numbers, handle inbound/outbound calls, IVR, and voicemail without extra providers.",
    },
    {
      icon: Mic,
      title: "Real-time voice",
      desc: "Ultra-low-latency streaming ASR and TTS for natural, interruptible conversations.",
    },
    {
      icon: Workflow,
      title: "Workflow engine",
      desc: "Design call flows, state, and tool-calling with a visual builder or code SDKs.",
    },
    {
      icon: Webhook,
      title: "Tool integrations",
      desc: "Connect CRMs, calendars, payments, and your internal APIs with secure webhooks.",
    },
    {
      icon: Database,
      title: "Knowledge grounding",
      desc: "RAG over docs, FAQs, and product data with embeddings and vector search.",
    },
    {
      icon: Shield,
      title: "Enterprise security",
      desc: "SSO, role-based access, audit logs, and data controls you can trust.",
    },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(59,130,246,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Everything you need to run voice agents</h2>
          <p className="mt-3 text-white/70">A modern, reliable stack to build production-grade phone agents from day one.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur shadow-lg shadow-black/10 hover:shadow-black/20 transition-all">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 text-white ring-1 ring-white/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
