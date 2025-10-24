import { Protect } from "@clerk/nextjs";
import { MousePointerClick } from "lucide-react";
import React from "react";

function PlanStatus() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-zinc-400 capitalize">Plan Status</h4>
        <p className="text-lg font-semibold">
          <Protect plan="premium" fallback="free">
            Premium
          </Protect>
        </p>
      </div>
      <div className="from-pink to-purple rounded-lg bg-gradient-to-br p-2">
        <MousePointerClick color="white" size={20} />
      </div>
    </div>
  );
}

export default PlanStatus;
