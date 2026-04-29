// components/home/Services.jsx
import { Share2, PenTool, Layout, Video, Target, Cog, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS = { Share2, PenTool, Layout, Video, Target, Cog };

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-4 border border-gold-500/30 rounded-full px-4 py-1.5">
            Services
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Everything you need to <span className="text-gold-gradient">grow online</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div key={s.title} className="glass-card glass-card-hover rounded-2xl p-8 group cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold-500" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gold-500/40 group-hover:text-gold-500 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
