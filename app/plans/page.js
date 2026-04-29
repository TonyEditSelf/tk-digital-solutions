// app/plans/page.js
import PricingGrid from "@/components/plans/PricingGrid";
import Cart from "@/components/plans/Cart";

const PlansPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Background accents */}
      <div className="absolute top-20 left-0 right-0 h-[600px] animated-gradient-bg opacity-40 -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.3em] text-gold-500 mb-6 border border-gold-500/30 rounded-full px-4 py-1.5">
            Pricing
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
            Plans that <span className="text-gold-gradient">grow with you</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparent pricing. Premium delivery. Cancel anytime. Choose what fits today — upgrade when you're ready.
          </p>
        </div>

        <PricingGrid />

        <div className="mt-20 max-w-3xl mx-auto">
          <Cart />
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          Need something tailored? <a href="/contact" className="text-gold-500 hover:underline font-medium">Let's talk →</a>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
