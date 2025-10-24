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
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias provident, eveniet sit expedita tenetur, nostrum a dolor repellat fuga nam quia perferendis commodi sequi quas voluptatem debitis corporis! Vel, obcaecati!"
        />
      </div>
    </>
  );
}

export default page;
