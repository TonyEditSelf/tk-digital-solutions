// components/home/Hero.jsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-90" />
      {/* Abstract glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-navy-700/40 blur-[140px]" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-navy-800/40 backdrop-blur-sm mb-8">
            <Sparkles className="h-4 w-4 text-gold-500" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">Premium Digital Partner</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold mb-6">
            Helping businesses <br />
            <span className="text-gold-gradient">grow online</span> with<br />
            clarity &amp; consistency.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Strategy, content, and automation systems crafted for ambitious brands. We simplify your digital growth — so you can focus on what you do best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/plans">
              <Button size="lg" className="bg-gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 h-14 text-base gold-border-glow">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-gold-500/40 text-foreground hover:bg-gold-500/10 hover:text-gold-500 px-8 h-14 text-base">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-16 flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gold-gradient border-2 border-navy-900" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground"><span className="text-gold-500 font-semibold">50+</span> brands growing with us</span>
            </div>
            <div className="h-6 w-px bg-gold-500/20 hidden sm:block" />
            <div className="text-sm text-muted-foreground">★ <span className="text-gold-500 font-semibold">4.9/5</span> client satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500/60 text-xs tracking-[0.3em] uppercase animate-pulse-soft">
        Scroll
      </div>
    </section>
  );
}
