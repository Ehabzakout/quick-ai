import AiTools from "./_components/ai-tools";
import BillingPlans from "./_components/billing-plans";
import HeroSection from "./_components/hero";
import LovedBy from "./_components/loved-by";

export default function page() {
  return (
    <div>
      <HeroSection />
      <div className="mt-16 mb-20 flex flex-col items-center justify-center space-y-20 px-3 md:px-10">
        <AiTools />
        <LovedBy />
        <BillingPlans />
      </div>
    </div>
  );
}
