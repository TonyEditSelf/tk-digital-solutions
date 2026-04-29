// components/home/About.jsx
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
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { k: "50+", v: "Brands Served" },
            { k: "3x", v: "Avg. Growth" },
            { k: "98%", v: "Retention" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-6">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient font-semibold">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
