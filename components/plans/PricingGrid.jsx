"use client";
import PricingCard from "./PricingCard";
import { PLANS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const microPlan = PLANS.filter((p) => p.section === "micro");
const buildPlans = PLANS.filter((p) => p.section === "build");
const automatePlans = PLANS.filter((p) => p.section === "automate");
const growPlans = PLANS.filter((p) => p.section === "grow");

export default function PricingGrid({ variant = "navy" }) {
  const isCream = variant === "cream";

  const sectionLabelClass = `inline-block text-xs uppercase tracking-[0.3em] mb-4 border rounded-full px-4 py-1.5`;
  const sectionLabelStyle = {
    color: isCream ? "#C9A227" : "#D4AF37",
    borderColor: isCream ? "rgba(201,162,39,0.3)" : "rgba(212,175,55,0.3)",
  };

  const headingStyle = { color: isCream ? "#0B1C2C" : "#F5EFE6" };

  // Taglines — slightly brighter than before
  const taglineStyle = { color: "#A8B8C8" };

  // Body notes — clearly visible
  const bodyNoteStyle = { color: isCream ? "#1a2c3c" : "#D6CBBA" };

  const dividerStyle = {
    borderColor: isCream ? "rgba(201,162,39,0.2)" : "rgba(212,175,55,0.15)",
  };

  // Dark lifted block — navy-800 on navy-900
  const darkBlockStyle = {
    background: isCream ? "#0B1C2C" : "#0E2238",
    border: `1px solid ${isCream ? "rgba(201,162,39,0.25)" : "rgba(212,175,55,0.2)"}`,
    borderRadius: "1rem",
    padding: "2rem",
  };

  // Inner nested block inside dark block
  const innerBlockStyle = {
    background: isCream ? "rgba(255,255,255,0.08)" : "rgba(19,43,71,0.7)",
    border: `1px solid rgba(212,175,55,0.12)`,
    borderRadius: "0.75rem",
    padding: "1.25rem",
  };

  return (
    <div className="max-w-5xl mx-auto space-y-20">
      {/* MICRO */}
      <div>
        <div className="max-w-3xl mb-10">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Micro — Starter Visibility System
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
            <span className="text-gold-gradient">A starting point </span>
            <span style={{ color: "#F5EFE6" }}>
              for businesses getting online.{" "}
            </span>
          </h2>
          {/* Price — fully visible */}
          <p className="text-sm leading-relaxed" style={taglineStyle}>
            This is NOT a growth system. It’s a basic visibility layer to stay
            active online. Ideal for businesses that just need to appear
            consistent online. Best used as an entry point before building a
            real digital system.
          </p>
        </div>

        <div className="max-w-md">
          {microPlan.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>

        {/* Notes — styled distinctly, clearly visible */}
        {/* <div
          className="mt-6 rounded-xl p-5 space-y-2"
          style={{
            background: "rgba(212,175,55,0.12)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <p className="text-sm font-semibold" style={{ color: "#F5EFE6" }}>
            This is NOT a growth system.
          </p>
          <p className="text-sm" style={{ color: "#D6CBBA" }}>
            It's a basic visibility layer to stay active online.
          </p>
          <p className="text-sm" style={{ color: "#D6CBBA" }}>
            Ideal for businesses that just need to appear consistent online.
          </p>
          <p className="text-sm" style={{ color: "#D6CBBA" }}>
            Best used as an entry point before building a real digital system.
          </p>
        </div> */}
      </div>

      {/* TRANSITION CALLOUT */}
      <div style={darkBlockStyle}>
        <h3
          className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3"
          style={{ color: "#F5EFE6" }}
        >
          But most businesses outgrow this quickly.
        </h3>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#C8BFAD" }}
        >
          Because posting alone doesn't create growth. At some point, you need
          structure.
        </p>
        <ul className="space-y-3">
          {[
            "A website that converts",
            "Systems that capture leads",
            "Automation that saves time",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm font-medium"
              style={{ color: "#F5EFE6" }}
            >
              <ArrowRight
                className="h-4 w-4 shrink-0"
                style={{ color: "#D4AF37" }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* BUILD */}
      <div className="flex flex-col gap-10">
        <div className="max-w-3xl mb-10">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Build — Web Systems
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
            <span style={{ color: "#F5EFE6" }}>Websites that convert — </span>
            <span className="text-gold-gradient">not just impress.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={taglineStyle}>
            One-time project fee. Most businesses upgrade here when they want
            real structure and conversions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {buildPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>

        {/* Why businesses move here — fixed background */}
        <div className="mt-6" style={darkBlockStyle}>
          <h3
            className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3"
            style={{ color: "#F5EFE6" }}
          >
            Why businesses move here:
          </h3>
          <ul className="space-y-3">
            {[
              "Social media alone stops generating consistent leads",
              "They need credibility that converts visitors",
              "They need structure, not random posting",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm"
                style={{ color: "#C8BFAD" }}
              >
                <span className="shrink-0 mt-0.5" style={{ color: "#D4AF37" }}>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4">
          <Link
            href="/contact"
            className="text-sm hover:underline"
            style={{ color: "#D4AF37" }}
          >
            eCommerce, full stack applications, or advanced systems — Let's talk
          </Link>
        </p>
      </div>

      <div className="border-t" style={dividerStyle} />

      {/* AUTOMATE */}
      <div>
        <div className="max-w-3xl mb-10">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Automate — Business Systems
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
            <span style={{ color: "#F5EFE6" }}>Systems that </span>
            <span className="text-gold-gradient">save time.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={taglineStyle}>
            One-time setup fee. Often combined with Web Systems for full
            operational setup.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {automatePlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>
        <p className="mt-4">
          <Link
            href="/contact"
            className="text-sm hover:underline"
            style={{ color: "#D4AF37" }}
          >
            Complex workflows or advanced AI systems — Let's talk
          </Link>
        </p>
      </div>

      <div className="border-t" style={dividerStyle} />

      {/* GROW */}
      <div>
        <div className="max-w-3xl mb-10">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Grow — Content Systems
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
            <span style={{ color: "#F5EFE6" }}>Content that </span>
            <span className="text-gold-gradient">compounds.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={taglineStyle}>
            Monthly retainer. Best used after Web + Automation systems are in
            place.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {growPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant={variant} />
          ))}
        </div>
        <p className="mt-4">
          <Link
            href="/contact"
            className="text-sm hover:underline"
            style={{ color: "#D4AF37" }}
          >
            Multi-platform or advanced content strategy — Let's talk
          </Link>
        </p>
      </div>

      <div className="border-t" style={dividerStyle} />

      {/* WHERE TO START — free section */}
      <div>
        <div className="max-w-3xl mb-10">
          <div className={sectionLabelClass} style={sectionLabelStyle}>
            Not sure where to start?
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-3">
            <span style={{ color: "#F5EFE6" }}>Most businesses fall into </span>
            <span className="text-gold-gradient">one of these.</span>
          </h2>
        </div>

        {/* Combined box — where to start list + final CTA */}
        <div style={darkBlockStyle}>
          <ul className="space-y-3 mb-8">
            {[
              { label: "Just want visibility", cta: "Start with Micro" },
              { label: "Want real structure", cta: "Start with Web System" },
              { label: "Want full setup", cta: "Web + Automation" },
            ].map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-sm pb-3 border-b last:border-0 last:pb-0"
                style={{ borderColor: "rgba(212,175,55,0.1)" }}
              >
                <span style={{ color: "#C8BFAD" }}>{item.label}</span>
                <span className="font-semibold" style={{ color: "#F5EFE6" }}>
                  {item.cta}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm mb-8" style={{ color: "#C8BFAD" }}>
            Still unsure? I'll tell you exactly what to build first.
          </p>

          {/* Inner CTA block */}
          <div style={innerBlockStyle}>
            <h3
              className="font-display text-xl font-semibold mb-2"
              style={{ color: "#F5EFE6" }}
            >
              Let's build your system.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#C8BFAD" }}
            >
              No guessing. No confusion. I'll look at your current setup and
              tell you what's missing, what to fix first, and what will actually
              grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <button className="bg-gold-gradient text-navy-900 font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition w-full sm:w-auto">
                  Book a Free Call
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition w-full sm:w-auto hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#F5EFE6",
                  }}
                >
                  Ask a Question
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
