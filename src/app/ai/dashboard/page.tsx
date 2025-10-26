import React from "react";
import AICard from "../_components/ai-card";
import TotalCreation from "./_components/total-creation";
import PlanStatus from "./_components/plan-status";
import CreatedItem from "./_components/created-item";

function page() {
  return (
    <>
      <div className="flex w-full gap-6 md:w-2/3">
        <AICard>
          <TotalCreation />{" "}
        </AICard>
        <AICard>
          <PlanStatus />
        </AICard>
      </div>

      <h3 className="my-8 text-lg font-bold">Recent Creation</h3>
      <div className="space-y-3">
        <CreatedItem
          title="Navigating the Technological Frontier: Trends Shaping Our Future"
          type="article"
          date="6/11/2025"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias provident, eveniet sit expedita tenetur, nostrum a dolor repellat fuga nam quia perferendis commodi sequi quas voluptatem debitis corporis! Vel, obcaecati!"
        />
        <CreatedItem
          title="Navigating the Technological Frontier: Trends Shaping Our Future"
          type="article"
          date="6/11/2025"
          text='Okay, I can help you with that! To write a good article about clothes, I need a little more information.  Please tell me:\n\n1.  **What kind of clothes are you interested in?** (e.g., casual wear, formal wear, athletic wear, vintage clothing, sustainable fashion, a specific designer, a particular trend)\n2.  **What is the purpose of the article?** (e.g., to inform, to persuade, to entertain, to review, to compare)\n3.  **Who is your target audience?** (e.g., fashion enthusiasts, budget-conscious shoppers, environmentally aware consumers, people looking for specific advice)\n4.  **Do you have a specific angle or topic in mind?** (e.g., \"The Rise of Athleisure,\" \"How to Dress for a Job Interview,\" \"The Best Sustainable Clothing Brands,\" \"The History of the Little Black Dress\")\n5.'
        />
      </div>
    </>
  );
}

export default page;
