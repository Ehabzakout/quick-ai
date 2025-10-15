import { PricingTable } from "@clerk/nextjs";
import React from "react";

function BillingPlans() {
  return (
    <section className="w-full">
      <h2 className="text-center text-5xl font-semibold">Choose Your Plan</h2>
      <p className="mt-5 text-center leading-8 text-zinc-400">
        Start for free and scale up as you grow. Find the perfect plan for
        <span className="block">your content creation needs.</span>
      </p>
      <div className="price-table mx-auto mt-10 w-3/4">
        <PricingTable />
      </div>
    </section>
  );
}

export default BillingPlans;
