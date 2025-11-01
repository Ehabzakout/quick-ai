import { Sparkles } from "lucide-react";
import React from "react";

function TotalCreation({ length }: { length: number }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-zinc-400 capitalize">Total Creation</h4>
        <p className="text-xl font-semibold">{length}</p>
      </div>
      <div className="from-blue to-green rounded-lg bg-gradient-to-br p-2">
        <Sparkles color="white" size={20} />
      </div>
    </div>
  );
}

export default TotalCreation;
