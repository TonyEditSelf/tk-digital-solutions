// components/home/About.jsx
import { Target, Sparkles, Handshake } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Outcome-First",
    desc: "We measure success by your growth — not vanity metrics or fluffy reports.",
  },
  {
    icon: Sparkles,
    title: "Premium Craft",
    desc: "Every deliverable is built to elevate your brand. No templates, no shortcuts.",
  },
  {
    icon: Handshake,
    title: "Real Partnership",
    desc: "We work with you, not just for you. Honest advice, clear communication, no fluff.",
  },
];

export default function About() {
  return (
    <section className="py-28 relative">
      <div className="container max-w-5xl text-center">
        <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
          About Us
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight mb-8">
          We turn digital noise into <span className="text-gold-gradient">measurable growth</span>.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          TK Digital Solutions is a premium digital growth partner for ambitious businesses. We combine sharp strategy, elegant creative, and powerful automation to help you build a brand that looks premium, performs consistently, and scales without chaos. No fluff. No jargon. Just clear outcomes.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="cream-card rounded-2xl p-8 text-left">
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-5 shadow-lg shadow-gold-500/30">
                  <Icon className="h-6 w-6" style={{ color: "#0B1C2C" }} strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#0B1C2C" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a" }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
