// components/plans/PricingGrid.jsx
import PricingCard from "./PricingCard";
import { PLANS } from "@/lib/constants";

export default function PricingGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
