import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function AICard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <Card className={cn("h-fit w-full pb-6 md:w-1/2", className)}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default AICard;
