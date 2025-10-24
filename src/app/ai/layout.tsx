import { SidebarProvider } from "@/components/ui/sidebar";

import React from "react";
import AiSidebar from "./_components/sidebar";

function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AiSidebar />
      <main className="w-full bg-blue-50 p-7">{children}</main>
    </SidebarProvider>
  );
}

export default AiLayout;
