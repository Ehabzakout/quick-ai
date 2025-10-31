import React from "react";
import ReactQueryProvider from "./components/react-query.provider";
import { ClerkProvider } from "@clerk/nextjs";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ClerkProvider>
  );
}

export default Providers;
