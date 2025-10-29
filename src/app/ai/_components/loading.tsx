import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { ReactNode } from "react";

function Loading({
  children,
  status,
  className = "",
}: {
  children: ReactNode;
  status: boolean;
  className?: string;
}) {
  return (
    <>
      {status ? (
        <div className={cn("flex items-center justify-center gap-3 text-white", ...className)}>
          <Loader2 size={20} className="animate-spin" /> Please wait...
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default Loading;
