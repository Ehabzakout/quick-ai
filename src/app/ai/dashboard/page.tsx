import React from "react";
import AICard from "../_components/ai-card";
import TotalCreation from "./_components/total-creation";
import PlanStatus from "./_components/plan-status";
import CreatedItem from "./_components/created-item";
import { getAllCreations } from "@/lib/api/get-creations";

async function page() {
  const { creations }: { creations: Creation[] } = await getAllCreations();

  return (
    <>
      <div className="flex w-full gap-6 md:w-2/3">
        <AICard>
          <TotalCreation length={creations.length} />
        </AICard>
        <AICard>
          <PlanStatus />
        </AICard>
      </div>

      <h3 className="my-8 text-lg font-bold">Recent Creation</h3>
      <div className="space-y-3">
        {creations.length ? (
          creations.map((creation) => (
            <React.Fragment key={creation.id}>
              <CreatedItem {...creation} />
            </React.Fragment>
          ))
        ) : (
          <p className="text-center text-xl font-semibold">There are no creations for you</p>
        )}
      </div>
    </>
  );
}

export default page;
