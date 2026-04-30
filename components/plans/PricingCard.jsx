// components/plans/PricingCard.jsx
"use client";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function PricingCard({ plan, variant = "navy" }) {
  const { addItem } = useCart();
  const isCream = variant === "cream";

  const handleAdd = () => {
    addItem({ id: plan.id, name: plan.name, price: plan.price });
    toast.success(`${plan.name} plan added to cart`);
  };

  // Build classes per variant
  const cardBase = isCream
    ? plan.highlight
      ? "cream-card-highlight scale-[1.02]"
      : "cream-card"
    : plan.highlight
      ? "bg-gradient-to-b from-gold-500/10 to-transparent border border-gold-500/40 gold-border-glow scale-[1.02]"
      : "glass-card glass-card-hover";

  const tagline = isCream ? "#5a6a7a" : "";
  const featureColor = isCream ? "#1a2c3c" : "";
  const priceColor = isCream ? "#0B1C2C" : "";

  return (
    <div className={`relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 ${cardBase}`}>
      {plan.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gold-gradient text-navy-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-gold-500/30">
          <Sparkles className="h-3.5 w-3.5" /> Most Popular
        </div>
      )}

      <div className="mb-6">
        <div className="text-sm uppercase tracking-[0.25em] text-gold-600 mb-3 font-semibold">{plan.name}</div>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="font-display text-5xl md:text-6xl font-semibold" style={priceColor ? { color: priceColor } : {}}>{plan.priceLabel}</span>
          {plan.period && <span style={{ color: tagline || undefined }} className={!isCream ? "text-muted-foreground" : ""}>{plan.period}</span>}
        </div>
        <p className="leading-relaxed" style={isCream ? { color: tagline } : {}} >
          <span className={!isCream ? "text-muted-foreground" : ""}>{plan.tagline}</span>
        </p>
      </div>

      <ul className="space-y-3.5 mb-10 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center">
              <Check className="h-3 w-3 text-gold-600" />
            </div>
            <span className="text-sm" style={isCream ? { color: featureColor } : {}}>
              {!isCream ? <span className="text-foreground/90">{f}</span> : f}
            </span>
          </li>
        ))}
      </ul>

      {plan.buyable ? (
        <Button
          size="lg"
          onClick={handleAdd}
          className={
            plan.highlight
              ? "bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold h-12"
              : isCream
                ? "bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12"
                : "bg-navy-800 border border-gold-500/30 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold h-12"
          }
        >
          {plan.cta}
        </Button>
      ) : (
        <Link href="/contact">
          <Button
            size="lg"
            className={
              isCream
                ? "w-full bg-navy-900 text-white hover:bg-navy-800 font-semibold h-12"
                : "w-full bg-navy-800 border border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 font-semibold h-12"
            }
          >
            {plan.cta}
          </Button>
        </Link>
      )}
    </div>
  );
}
