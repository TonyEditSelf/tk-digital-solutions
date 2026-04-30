// app/plans/page.js
import PricingGrid from "@/components/plans/PricingGrid";
import Cart from "@/components/plans/Cart";

const PlansPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navy hero header */}
      <div className="relative pt-32 pb-16">
        <div className="absolute top-20 left-0 right-0 h-[400px] animated-gradient-bg opacity-40 -z-10" />
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
              Pricing
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              Plans that <span className="text-gold-gradient">grow with you</span>.
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparent pricing. Premium delivery. Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Cream pricing section */}
      <div className="cream-section py-20">
        <div className="container">
          <PricingGrid variant="cream" />

          <div className="mt-16 max-w-3xl mx-auto">
            <Cart variant="cream" />
          </div>

          <div className="mt-12 text-center text-sm" style={{ color: "#5a6a7a" }}>
            Need something tailored? <a href="/contact" className="text-gold-600 hover:underline font-semibold">Let's talk →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
